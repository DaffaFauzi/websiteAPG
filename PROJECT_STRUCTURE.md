# 📁 Project Folder Structure Guide

## 🎯 Overview
This folder structure is designed for the **Quantum Dynamics Creations (QDC)** website project, following **SOLID principles**, **modularity**, and **scalability** best practices. It separates concerns while maintaining clean, maintainable code.

## 🏗️ Folder Structure

```
src/
├── app/                    # Next.js 13+ App Router (pages, layouts, loading)
├── components/             # Reusable React components
│   ├── ui/                 # Basic UI components (buttons, inputs, cards)
│   ├── sections/           # Page sections (Hero, About, Services, etc.)
│   ├── layout/             # Layout components (Header, Footer, Navigation)
│   └── animations/         # Animation components (Particle effects, transitions)
├── hooks/                  # Custom React hooks
│   ├── useAnimations/      # Animation-related hooks
│   └── useScroll/          # Scroll and viewport hooks
├── lib/                    # Utility libraries and configurations
│   ├── animations/         # Animation configurations and helpers
│   └── validation/         # Form validation logic
├── types/                  # TypeScript type definitions
├── styles/                 # Styling files
│   ├── theme/              # Theme variables, colors, fonts
│   └── animations/         # CSS animation keyframes and classes
├── constants/              # Application constants and configuration
├── utils/                  # Pure utility functions
└── assets/                 # Static assets
    ├── images/             # Image files (logos, backgrounds, photos)
    └── icons/              # SVG icons and icon components
```

## 📋 Folder Usage Guidelines

### 🎨 `components/`
**Purpose:** Contains all reusable React components following the **Single Responsibility Principle**.

#### `components/ui/`
- **What goes here:** Basic, reusable UI elements
- **Examples:** `Button.tsx`, `Input.tsx`, `Card.tsx`, `Modal.tsx`
- **Usage:** Pure presentational components that don't manage state

#### `components/sections/`
- **What goes here:** Page sections as defined in `instructions.md`
- **Examples:** `HeroSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`
- **Usage:** Feature-specific components that represent complete page sections

#### `components/layout/`
- **What goes here:** Layout and navigation components
- **Examples:** `Header.tsx`, `Footer.tsx`, `Navigation.tsx`, `LayoutWrapper.tsx`
- **Usage:** Components that define the overall page structure

#### `components/animations/`
- **What goes here:** Animation-specific components
- **Examples:** `ParticleSystem.tsx`, `FadeIn.tsx`, `QuantumWave.tsx`
- **Usage:** Components that handle visual effects and animations

### 🪝 `hooks/`
**Purpose:** Custom React hooks following the **Open/Closed Principle** for reusable logic.

#### `hooks/useAnimations/`
- **What goes here:** Animation-related custom hooks
- **Examples:** `useFadeIn.ts`, `useParticleSystem.ts`
- **Usage:** Hooks that manage animation state and effects

#### `hooks/useScroll/`
- **What goes here:** Scroll and viewport detection hooks
- **Examples:** `useScrollPosition.ts`, `useInView.ts`
- **Usage:** Hooks for scroll-based interactions and lazy loading

### 🔧 `lib/`
**Purpose:** Utility libraries and business logic following the **Dependency Inversion Principle**.

#### `lib/animations/`
- **What goes here:** Animation configuration and helper functions
- **Examples:** `framerConfig.ts`, `animationVariants.ts`
- **Usage:** Non-React animation utilities and configurations

#### `lib/validation/`
- **What goes here:** Form validation logic
- **Examples:** `contactFormValidation.ts`, `emailValidation.ts`
- **Usage:** Validation schemas and helper functions

### 📝 `types/`
**Purpose:** TypeScript type definitions for type safety and **Interface Segregation Principle**.

- **What goes here:** All TypeScript interfaces, types, and enums
- **Examples:** `Company.ts`, `Service.ts`, `ContactForm.ts`
- **Usage:** Centralized type definitions used across the application

### 🎨 `styles/`
**Purpose:** Styling files organized by concern.

#### `styles/theme/`
- **What goes here:** Theme variables and design tokens
- **Examples:** `colors.ts`, `typography.ts`, `breakpoints.ts`
- **Usage:** Centralized design system values

#### `styles/animations/`
- **What goes here:** CSS animations and keyframes
- **Examples:** `pulse.css`, `fadeIn.css`, `quantumWave.css`
- **Usage:** Reusable CSS animations

### 📊 `constants/`
**Purpose:** Application constants following the **Single Responsibility Principle**.

- **What goes here:** Static data that doesn't change
- **Examples:** `companyInfo.ts`, `servicesData.ts`, `faqs.ts`
- **Usage:** Data constants used throughout the application

### 🛠️ `utils/`
**Purpose:** Pure utility functions following the **Open/Closed Principle**.

- **What goes here:** Helper functions with no side effects
- **Examples:** `formatDate.ts`, `scrollToSection.ts`, `debounce.ts`
- **Usage:** Reusable utility functions

### 📸 `assets/`
**Purpose:** Static assets organized by type.

#### `assets/images/`
- **What goes here:** Image files
- **Examples:** `qdc-logo.png`, `hero-background.jpg`
- **Usage:** Optimized images for the website

#### `assets/icons/`
- **What goes here:** Icon files and components
- **Examples:** `QuantumIcon.tsx`, `ArrowIcon.svg`
- **Usage:** SVG icons and icon components

## 🚀 Development Workflow

### 1. **Component Creation**
```
# Always start with types
src/types/ComponentName.ts

# Then create the component
src/components/ui/ComponentName.tsx

# Add styles if needed
src/styles/theme/componentName.ts

# Create hooks if stateful logic is needed
src/hooks/useComponentName.ts
```

### 2. **Section Development**
```
# Define section types
src/types/SectionName.ts

# Create the section component
src/components/sections/SectionName.tsx

# Add section-specific hooks
src/hooks/useSectionName/

# Add constants/data
src/constants/sectionNameData.ts
```

### 3. **Animation Implementation**
```
# Define animation variants
src/lib/animations/variants.ts

# Create animation hook
src/hooks/useAnimations/useAnimationName.ts

# Create animation component
src/components/animations/AnimationName.tsx
```

## 📋 File Naming Conventions

- **Components:** `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- **Hooks:** `camelCase.ts` (e.g., `useScrollPosition.ts`)
- **Types:** `PascalCase.ts` (e.g., `CompanyInfo.ts`)
- **Utils:** `camelCase.ts` (e.g., `formatCurrency.ts`)
- **Constants:** `camelCase.ts` (e.g., `companyData.ts`)

## 🔄 Import Organization

### Preferred Import Order:
```typescript
// 1. React imports
import React from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';

// 3. Local imports (organized by type)
import { CompanyInfo } from '@/types/Company';
import { Button } from '@/components/ui/Button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { formatDate } from '@/utils/formatDate';
import { companyData } from '@/constants/companyData';

// 4. Styles (at the end)
import styles from './Component.module.css';
```

## 🎯 SOLID Principles Application

### 1. **Single Responsibility Principle (SRP)**
- Each component has one reason to change
- Each hook manages one piece of state/logic
- Each utility function does one thing well

### 2. **Open/Closed Principle (OCP)**
- Components can be extended without modification
- Hooks can be reused across different contexts
- Utility functions are pure and composable

### 3. **Liskov Substitution Principle (LSP)**
- Interface implementations are interchangeable
- Component props follow consistent patterns

### 4. **Interface Segregation Principle (ISP)**
- Type definitions are specific to their use case
- Components only depend on interfaces they need

### 5. **Dependency Inversion Principle (DIP)**
- High-level modules don't depend on low-level modules
- Both depend on abstractions (types/interfaces)

## 🚀 Next Steps

1. **Start with types** - Define your data structures first
2. **Build UI components** - Create reusable building blocks
3. **Implement sections** - Use components to build page sections
4. **Add interactions** - Implement hooks for dynamic behavior
5. **Style and animate** - Apply the quantum aesthetic

This structure will scale with your project while keeping code maintainable and testable. Each folder has a clear purpose, making it easy for team members to find and modify code.
