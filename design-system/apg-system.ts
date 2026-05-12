const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1];

export const apgSystem = {
  colors: {
    primary: '#095aa9',
    primaryLight: '#0A66C2',
    primaryDark: '#041E4A',
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1f2937',
      900: '#0f172a',
    },
  },
  typography: {
    h1: 'text-3xl md:text-5xl font-bold tracking-tight leading-tight',
    h2: 'text-2xl md:text-3xl font-semibold tracking-tight',
    h3: 'text-lg font-medium',
    body: 'text-base text-slate-600 leading-relaxed',
    tag: 'text-xs font-black tracking-[0.18em] uppercase',
  },
  spacing: {
    sectionY: 'py-16 md:py-24',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    stackY: 'space-y-10 md:space-y-12',
    heroShellPad: 'pt-10 pb-7 md:pt-12 md:pb-8',
    heroInnerPad: 'p-6 sm:p-8 md:p-10',
    heroBottomGap: 'pb-24 md:pb-28',
  },
  surfaces: {
    primaryGradient: 'bg-gradient-to-br from-[#095aa9] via-[#0A66C2] to-[#041E4A]',
    primaryGradientOverlay:
      'bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_58%),radial-gradient(circle_at_80%_70%,rgba(4,26,64,0.42),transparent_60%)]',
    gridOverlay:
      'bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:5rem_5rem]',
    heroCurve: 'rounded-b-[3.25rem] md:rounded-b-[4.25rem]',
  },
  card: {
    base: 'apg-card rounded-xl border border-slate-100 bg-white',
    subtle: 'apg-card rounded-xl border border-slate-100 bg-slate-50',
    elevated: 'shadow-md',
    padding: 'p-6',
    paddingComfort: 'p-6 sm:p-8',
  },
  badge: {
    logo:
      'flex items-center bg-white/95 text-slate-950 border border-white/70 shadow-lg pl-6 pr-12 py-4 rounded-r-3xl rounded-l-none min-w-[9.5rem]',
  },
  diagram: {
    node:
      'rounded-xl border border-slate-200 bg-white shadow-sm p-5 text-center transition-all duration-200 ease-out hover:shadow-md',
    role: 'text-xs sm:text-sm uppercase tracking-wide text-slate-500',
    name: 'mt-2 text-base font-semibold text-slate-950',
    connector: 'bg-slate-300',
    sectionBg: 'bg-slate-50',
  },
  button: {
    base:
      'apg-btn group inline-flex min-h-12 items-center justify-center font-semibold leading-none rounded-full transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white active:scale-[0.98]',
    size: {
      sm: 'px-5 py-2.5 text-xs sm:text-sm',
      md: 'px-7 py-3 text-sm sm:text-base',
      lg: 'min-h-[3.5rem] px-8 py-4 text-base sm:text-lg',
    },
    primary:
      'bg-[#095aa9] text-white focus:ring-[#095aa9] shadow-sm hover:bg-[#084c8e] hover:shadow-md hover:scale-[1.02]',
    secondary:
      'border border-slate-200 bg-white text-slate-950 focus:ring-slate-300 shadow-sm hover:bg-slate-50 hover:shadow-md hover:scale-[1.02]',
    outline:
      'border-2 border-[#095aa9] bg-transparent text-[#095aa9] hover:bg-[#095aa9] hover:text-white focus:ring-[#095aa9] shadow-sm hover:shadow-md hover:scale-[1.02]',
    ghost:
      'bg-transparent text-slate-950 focus:ring-slate-300 hover:bg-slate-50 active:scale-100',
    white:
      'bg-white text-[#095aa9] focus:ring-white shadow-sm hover:bg-slate-50 hover:shadow-md hover:scale-[1.02]',
    whiteOutline:
      'border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-[#095aa9] hover:border-white focus:ring-white shadow-sm hover:shadow-md hover:scale-[1.02]',
    noScaleHover: 'hover:scale-100',
  },
  link: {
    underline: 'apg-link text-[#095aa9] hover:text-[#084c8e]',
  },
  icon: {
    hover: 'apg-icon-hover',
  },
  motion: {
    fadeUp: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.22 },
      transition: { duration: 0.65, ease: easeOut },
    },
    reveal: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.22 },
      transition: { duration: 0.65, ease: easeOut },
    },
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: 0.24 },
      transition: { duration: 0.55, ease: easeOut },
    },
    ctaEnter: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.22 },
      transition: { duration: 0.65, ease: easeOut },
    },
    stagger: {
      initial: 'hidden',
      whileInView: 'show',
      viewport: { once: true, amount: 0.22 },
      variants: {
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      },
    },
    item: {
      variants: {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
      },
    },
    itemDelay: (delay: number) => ({
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.22 },
      transition: { duration: 0.6, ease: easeOut, delay },
    }),
    hoverLift: {
      whileHover: { y: -2, scale: 1.03 },
      transition: { duration: 0.25, ease: easeOut },
    },
    float: {
      animate: () => ({ y: [0, -8, 0] }),
      transition: { duration: 5, repeat: Infinity, ease: easeInOut },
    },
    logoBadge: {
      variants: {
        hidden: { opacity: 0, x: -24, pointerEvents: 'none' as const },
        show: { opacity: 1, x: 0, pointerEvents: 'auto' as const },
      },
      transition: { duration: 0.55, ease: easeOut },
    },
  },
} as const;
