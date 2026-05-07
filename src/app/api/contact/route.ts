import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type Body = {
  name: string;
  email: string;
  message: string;
};

const trimTo = (value: unknown, maxLen: number) => {
  const s = String(value ?? '').trim();
  if (s.length <= maxLen) return s;
  return s.slice(0, maxLen);
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const name = trimTo(body?.name, 120);
  const email = trimTo(body?.email, 180);
  const message = trimTo(body?.message, 4000);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
  }

  const smtpHost = (process.env.SMTP_HOST ?? '').trim();
  const smtpUser = (process.env.SMTP_USER ?? '').trim();
  const smtpPass = (process.env.SMTP_PASS ?? '').trim();
  const smtpPort = Number(process.env.SMTP_PORT ?? '587');
  const smtpSecure = String(process.env.SMTP_SECURE ?? '').trim() === 'true';
  const smtpFrom = (process.env.SMTP_FROM ?? smtpUser).trim();
  const toEmail = (process.env.CONTACT_TO_EMAIL ?? 'info@apg.co.id').trim();

  const subject = `Pesan dari ${name} - Website APG`;
  const text = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}\n`;
  const mailtoUrl = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

  const emailResult: { ok: boolean; attempted: boolean; reason?: string } = {
    ok: false,
    attempted: false,
  };

  try {
    if (smtpHost && smtpUser && smtpPass && smtpFrom) {
      emailResult.attempted = true;
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: toEmail,
        replyTo: email,
        subject,
        text,
      });
      emailResult.ok = true;
    } else {
      emailResult.reason = 'not_configured';
    }
  } catch {
    emailResult.reason = 'failed_to_send';
  }

  const whatsappNumber = (process.env.CONTACT_WHATSAPP_NUMBER ?? '6281288885132').trim();
  const whatsappText = `Halo APG,%0A%0ASaya ${encodeURIComponent(name)} (${encodeURIComponent(email)}).%0A%0A${encodeURIComponent(message)}`;
  const whatsappFallbackUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const waToken = (process.env.WHATSAPP_CLOUD_TOKEN ?? '').trim();
  const waPhoneNumberId = (process.env.WHATSAPP_PHONE_NUMBER_ID ?? '').trim();

  if (!waToken || !waPhoneNumberId) {
    return NextResponse.json({
      ok: true,
      email: emailResult,
      mailtoUrl,
      whatsapp: { ok: false, attempted: false, reason: 'not_configured' },
      whatsappFallbackUrl,
    });
  }

  try {
    const upstream = await fetch(`https://graph.facebook.com/v20.0/${encodeURIComponent(waPhoneNumberId)}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${waToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: whatsappNumber,
        type: 'text',
        text: { body: `Halo APG,\n\nSaya ${name} (${email}).\n\n${message}` },
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json({
        ok: true,
        email: emailResult,
        mailtoUrl,
        whatsapp: { ok: false, attempted: true, reason: `upstream_${upstream.status}` },
        whatsappFallbackUrl,
      });
    }

    return NextResponse.json({
      ok: true,
      email: emailResult,
      mailtoUrl,
      whatsapp: { ok: true, attempted: true },
      whatsappFallbackUrl,
    });
  } catch {
    return NextResponse.json({
      ok: true,
      email: emailResult,
      mailtoUrl,
      whatsapp: { ok: false, attempted: true, reason: 'exception' },
      whatsappFallbackUrl,
    });
  }
}
