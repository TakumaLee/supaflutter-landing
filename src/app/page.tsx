/* ── SupaFlutter Kit Landing Page ── */

const GITHUB_URL = "https://github.com/TakumaLee/SupaFlutter-Kit";

/* ─────────────── SVG Icons (inline, no deps) ─────────────── */

function IconShield() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconCreditCard() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  );
}

function IconPalette() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.024a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.25 8.82" />
    </svg>
  );
}

function IconWifi() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconX() {
  return (
    <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconArrowDown() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m6 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84L12 2" />
    </svg>
  );
}

/* ─────────────── Data ─────────────── */

const features = [
  {
    icon: <IconShield />,
    title: "Auth Ready",
    description: "Email, Google, Apple sign-in with Supabase Auth. Session management and token refresh out of the box.",
  },
  {
    icon: <IconCreditCard />,
    title: "Payments Integrated",
    description: "RevenueCat + Stripe for subscriptions and one-time purchases. Paywall UI included.",
  },
  {
    icon: <IconBell />,
    title: "Push Notifications",
    description: "Firebase Cloud Messaging setup with token management and notification handling.",
  },
  {
    icon: <IconPalette />,
    title: "Theme System",
    description: "Light, Dark, and System themes with smooth transitions. Fully customizable color tokens.",
  },
  {
    icon: <IconGlobe />,
    title: "Multi-Language",
    description: "i18n support for English, Japanese, and Traditional Chinese. Easy to add more locales.",
  },
  {
    icon: <IconLink />,
    title: "Deep Links",
    description: "App Links (Android) + Universal Links (iOS) configured and ready for navigation.",
  },
  {
    icon: <IconWifi />,
    title: "Offline Detection",
    description: "Built-in connectivity monitoring with graceful offline states and auto-recovery.",
  },
  {
    icon: <IconRocket />,
    title: "Onboarding Flow",
    description: "Beautiful onboarding screens with customizable steps. Skip-able for returning users.",
  },
];

const archLayers = [
  { label: "UI Layer", desc: "Widgets & Pages", color: "from-violet-500/20 to-violet-500/5" },
  { label: "ViewModel", desc: "Riverpod Providers", color: "from-purple-500/20 to-purple-500/5" },
  { label: "Use Cases", desc: "Business Logic", color: "from-indigo-500/20 to-indigo-500/5" },
  { label: "Repository", desc: "Data Abstraction", color: "from-blue-500/20 to-blue-500/5" },
  { label: "Data Sources", desc: "Supabase / Local", color: "from-cyan-500/20 to-cyan-500/5" },
];

const techStack = [
  { name: "Flutter", color: "#027DFD" },
  { name: "Supabase", color: "#3FCF8E" },
  { name: "Riverpod", color: "#00569E" },
  { name: "GoRouter", color: "#13B9FD" },
  { name: "RevenueCat", color: "#F25C54" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Dart", color: "#0175C2" },
];

interface PricingFeature {
  name: string;
  starter: boolean;
  pro: boolean;
  team: boolean;
}

const pricingFeatures: PricingFeature[] = [
  { name: "Auth (Email, Google, Apple)", starter: true, pro: true, team: true },
  { name: "GoRouter Navigation", starter: true, pro: true, team: true },
  { name: "Theme System (Light/Dark)", starter: true, pro: true, team: true },
  { name: "Multi-language (EN/JA/ZH_TW)", starter: true, pro: true, team: true },
  { name: "CI/CD Templates", starter: true, pro: true, team: true },
  { name: "Onboarding Flow", starter: true, pro: true, team: true },
  { name: "MVVM + Clean Architecture", starter: true, pro: true, team: true },
  { name: "RevenueCat + Stripe Payments", starter: false, pro: true, team: true },
  { name: "Push Notifications (FCM)", starter: false, pro: true, team: true },
  { name: "Analytics Integration", starter: false, pro: true, team: true },
  { name: "Deep Links Setup", starter: false, pro: true, team: true },
  { name: "Offline Detection", starter: false, pro: true, team: true },
  { name: "Team License (up to 5 devs)", starter: false, pro: false, team: true },
  { name: "Priority Support", starter: false, pro: false, team: true },
  { name: "Custom Branding Removal", starter: false, pro: false, team: true },
];

const faqs = [
  {
    q: "What do I get after purchase?",
    a: "You get full access to the private GitHub repository with the complete source code, documentation, and all future updates. One purchase, lifetime access.",
  },
  {
    q: "Is this a template or a full app?",
    a: "It's a production-ready starter kit. Think of it as the foundation — auth, payments, routing, and architecture are all wired up. You focus on building your unique features on top.",
  },
  {
    q: "What Flutter version is supported?",
    a: "SupaFlutter Kit targets the latest stable Flutter release and is kept up-to-date. The kit includes 86 passing tests to ensure stability across updates.",
  },
  {
    q: "Can I use it for multiple projects?",
    a: "Yes! Your license allows you to use the kit in unlimited personal and commercial projects. No per-project fees.",
  },
  {
    q: "Who is Ruri? 🐈‍⬛",
    a: "Ruri (琉璃) is the AI Maid Developer behind SupaFlutter Kit. She handles the boring boilerplate so you can focus on what matters. Part of the RuriKit family.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "We offer a 30-day money-back guarantee, no questions asked. If the kit doesn't meet your expectations, you get a full refund.",
  },
];

/* ─────────────── Components ─────────────── */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          <span className="gradient-text">SupaFlutter Kit</span>
          <span className="text-sm">🐈‍⬛</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-muted sm:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#architecture" className="transition-colors hover:text-foreground">Architecture</a>
          <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="hero-gradient relative flex min-h-screen flex-col items-center justify-center px-4 pt-16 text-center">
      <div className="animate-fade-in mx-auto max-w-4xl">
        <div className="badge mb-6">
          <span className="mr-1.5">🐈‍⬛</span> Built by Ruri — AI Maid Developer
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Ship Flutter Apps{" "}
          <span className="gradient-text">10x Faster</span>
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-lg text-muted sm:text-xl">
          Your AI Maid already built the boring parts.
        </p>
        <p className="mx-auto mb-10 max-w-xl text-sm text-muted/70">
          Production-ready Flutter + Supabase starter kit with Auth, Payments, Push Notifications, Clean Architecture, and 86 passing tests.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white"
          >
            Get Started — $59
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-card"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            View on GitHub
          </a>
        </div>
        {/* Product screenshot placeholder */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
          <div className="flex h-64 items-center justify-center rounded-xl border border-border/30 bg-gradient-to-br from-violet-500/5 to-blue-500/5 sm:h-80 md:h-96">
            <div className="text-center">
              <p className="mb-2 text-4xl">🐈‍⬛</p>
              <p className="text-sm text-muted">Product Screenshot</p>
              <p className="text-xs text-muted/50">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted/40">
        <IconArrowDown />
      </div>
    </section>
  );
}

function FeaturesGrid() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="badge mb-4">Features</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to <span className="gradient-text">launch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Stop wasting weeks on boilerplate. SupaFlutter Kit gives you a production-grade foundation so you can focus on what makes your app unique.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-glow rounded-2xl border border-border p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                {f.icon}
              </div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section id="architecture" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="badge mb-4">Architecture</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Clean <span className="gradient-text">MVVM</span> Architecture
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Built with separation of concerns in mind. Each layer has a clear responsibility, making your code testable, maintainable, and scalable.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {archLayers.map((layer, i) => (
            <div
              key={layer.label}
              className="group flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:border-accent/30 hover:bg-card"
              style={{ marginLeft: `${i * 24}px`, marginRight: `${(archLayers.length - 1 - i) * 24}px` }}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${layer.color} text-sm font-bold text-accent`}>
                {i + 1}
              </div>
              <div>
                <p className="font-semibold">{layer.label}</p>
                <p className="text-sm text-muted">{layer.desc}</p>
              </div>
              {i < archLayers.length - 1 && (
                <div className="ml-auto text-muted/30 transition-colors group-hover:text-accent/50">
                  <svg className="w-5 h-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-border bg-card p-6 text-center">
          <p className="text-sm text-muted">
            <span className="font-mono text-accent">86 tests</span> passing — Clean architecture makes testing a breeze.
          </p>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="badge mb-4">Tech Stack</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Powered by the <span className="gradient-text">best tools</span>
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="card-glow flex items-center gap-2.5 rounded-full border border-border px-5 py-2.5"
            >
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="badge mb-4">Pricing</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            One-time purchase. <span className="gradient-text">Lifetime updates.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Pay once, own it forever. 30-day money-back guarantee, no questions asked.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="rounded-2xl border border-border p-6 sm:p-8 flex flex-col">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-muted">Everything to get started</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">$29</span>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl border border-border py-3 text-center font-semibold transition-colors hover:border-accent hover:bg-card"
            >
              Buy Starter
            </a>
            <div className="mt-8 space-y-3 flex-1">
              {pricingFeatures.map((f) => (
                <div key={`starter-${f.name}`} className="flex items-center gap-3 text-sm">
                  {f.starter ? <IconCheck /> : <IconX />}
                  <span className={f.starter ? "text-foreground" : "text-zinc-600"}>{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro — Recommended */}
          <div className="pricing-popular rounded-2xl border border-accent/50 p-6 sm:p-8 flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="badge text-xs font-semibold">⭐ Recommended</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="mt-1 text-sm text-muted">The complete toolkit</p>
              </div>
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold gradient-text">$59</span>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 block w-full rounded-xl py-3 text-center font-semibold text-white"
            >
              Buy Pro
            </a>
            <div className="mt-8 space-y-3 flex-1">
              {pricingFeatures.map((f) => (
                <div key={`pro-${f.name}`} className="flex items-center gap-3 text-sm">
                  {f.pro ? <IconCheck /> : <IconX />}
                  <span className={f.pro ? "text-foreground" : "text-zinc-600"}>{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="rounded-2xl border border-border p-6 sm:p-8 flex flex-col">
            <h3 className="text-lg font-semibold">Team</h3>
            <p className="mt-1 text-sm text-muted">For teams & agencies</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">$129</span>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl border border-border py-3 text-center font-semibold transition-colors hover:border-accent hover:bg-card"
            >
              Buy Team
            </a>
            <div className="mt-8 space-y-3 flex-1">
              {pricingFeatures.map((f) => (
                <div key={`team-${f.name}`} className="flex items-center gap-3 text-sm">
                  {f.team ? <IconCheck /> : <IconX />}
                  <span className={f.team ? "text-foreground" : "text-zinc-600"}>{f.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted/60">
          30-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="rounded-2xl border border-border bg-card/50 px-6 py-16 backdrop-blur-sm">
          <p className="mb-6 text-5xl">🐈‍⬛</p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Built by <span className="gradient-text">AI</span>, trusted by developers.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            SupaFlutter Kit is maintained by Ruri (琉璃), an AI Maid Developer who obsesses over clean code, proper architecture, and developer experience.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-muted">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">86</p>
              <p className="text-xs">Tests Passing</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">MVVM</p>
              <p className="text-xs">Clean Architecture</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-xs">Languages</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-xs">Open Source Friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <span className="badge mb-4">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-border transition-colors hover:border-accent/30 [&_summary]:list-none"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 font-medium">
                {faq.q}
                <span className="ml-4 shrink-0 text-muted transition-transform group-open:rotate-180">
                  <IconArrowDown />
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold gradient-text">SupaFlutter Kit</span>
            <span>🐈‍⬛</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              GitHub
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted/60 sm:flex-row">
          <p>
            A <span className="font-semibold text-muted">RuriKit</span> product. Made with love by 琉璃 🐈‍⬛
          </p>
          <p>One purchase. Lifetime updates. Zero regrets.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── Page ─────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <ArchitectureSection />
      <TechStackSection />
      <PricingSection />
      <SocialProofSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
