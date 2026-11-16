import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { DashboardMockup } from "@/components/DashboardMockup";
import {
  ActivityIcon,
  BellIcon,
  CheckIcon,
  GitBranchIcon,
  GlobeIcon,
  ImageIcon,
  UsersIcon,
} from "@/components/Icons";
import { LanguageToggle } from "@/components/LanguageToggle";
import { PricingToggle } from "@/components/PricingToggle";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  getDictionary,
  getLocaleFromCookie,
  LOCALE_COOKIE,
} from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

const containerClass = "mx-auto w-full max-w-[1140px] px-4 sm:px-6";
const sectionClass = `${containerClass} section-cv py-[clamp(60px,7.5vw,96px)]`;

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get(LOCALE_COOKIE)?.value);
  const t = getDictionary(locale);

  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    keywords: [
      "Core Web Vitals",
      "real user monitoring",
      "performance monitoring",
      "LCP",
      "INP",
      "CLS",
      "web performance",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "ar" ? "ar_AR" : "en_US",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: t.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/og.png"],
    },
  };
}

const featureIcons = [
  <ActivityIcon key="rum" />,
  <BellIcon key="alerts" />,
  <ImageIcon key="assets" />,
  <GlobeIcon key="intl" />,
  <GitBranchIcon key="ci" />,
  <UsersIcon key="team" />,
];

export default async function HomePage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get(LOCALE_COOKIE)?.value);
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        email: t.footer.email,
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description: t.meta.description,
        inLanguage: locale,
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: t.pricing.plans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: String(plan.monthly),
          priceCurrency: "USD",
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-neutral focus:px-4 focus:py-2 focus:font-semibold focus:text-neutral-content"
        href="#main"
      >
        {t.a11y.skip}
      </a>

      <header className="sticky top-0 z-50 border-b border-base-300/80 bg-base-100/80 backdrop-blur-md">
        <div className={`navbar min-h-14 gap-2 py-2 ${containerClass}`}>
          <div className="navbar-start">
            <a
              className="text-lg font-bold tracking-tight"
              href="/"
              aria-label={SITE_NAME}
            >
              Loadlight
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <nav
              className="flex items-center gap-7 text-sm font-medium text-base-content/70"
              aria-label={t.nav.primaryAria}
            >
              <a className="transition-colors hover:text-base-content" href="#features">
                {t.nav.product}
              </a>
              <a className="transition-colors hover:text-base-content" href="#pricing">
                {t.nav.pricing}
              </a>
              <a className="transition-colors hover:text-base-content" href="#faq">
                {t.nav.faq}
              </a>
            </nav>
          </div>

          <div className="navbar-end gap-2">
            <div className="hidden lg:block">
              <LanguageToggle
                locale={locale}
                label={t.lang.switch}
                ariaLabel={t.lang.switchAria}
              />
            </div>
            <ThemeToggle label={t.theme.toggle} />
            <a className="btn btn-primary btn-sm hidden sm:inline-flex" href="#pricing">
              {t.nav.cta}
            </a>
            <details className="dropdown dropdown-end lg:hidden">
              <summary className="btn btn-ghost btn-sm list-none [&::-webkit-details-marker]:hidden">
                {t.nav.menu}
              </summary>
              <nav aria-label={t.nav.mobileAria}>
                <ul className="menu dropdown-content z-[60] mt-3 w-60 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl">
                  <li>
                    <a href="#features">{t.nav.product}</a>
                  </li>
                  <li>
                    <a href="#pricing">{t.nav.pricing}</a>
                  </li>
                  <li>
                    <a href="#faq">{t.nav.faq}</a>
                  </li>
                  <li className="sm:hidden">
                    <a className="btn btn-primary btn-sm mt-1 justify-center" href="#pricing">
                      {t.nav.cta}
                    </a>
                  </li>
                  <li className="lg:hidden">
                    <LanguageToggle
                      locale={locale}
                      label={t.lang.switch}
                      ariaLabel={t.lang.switchAria}
                    />
                  </li>
                </ul>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="main">
        <section className={`${containerClass} grid items-center gap-10 pb-10 pt-12 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:pb-16 lg:pt-20`}>
          <Reveal className="min-w-0" fade={false}>
            <h1 className="max-w-[17ch] text-[clamp(2.5rem,4.7vw,4rem)] font-[750] leading-[1.06] tracking-[-0.035em]">
              {t.hero.titleLead}{" "}
              <span className="text-gradient">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-4 max-w-[52ch] text-base text-base-content/70 sm:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#pricing">
                {t.hero.primaryCta}
              </a>
              <a className="btn btn-ghost" href="#preview">
                {t.hero.secondaryCta}
              </a>
            </div>
            <p className="mt-4 text-xs text-base-content/60 sm:text-sm">
              {t.hero.note}
            </p>
          </Reveal>

          <Reveal className="min-w-0" delay={0.1} fade={false}>
            <DashboardMockup copy={t.mockup} />
          </Reveal>
        </section>

        <section className={`${containerClass} pb-2 pt-7 text-center`}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.09em] text-base-content/60">
            {t.trust.label}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-base font-bold text-base-content/60">
            {t.trust.logos.map((logo) => (
              <li key={logo}>{logo}</li>
            ))}
          </ul>
        </section>

        <section className={`${containerClass} pt-9`} aria-label={t.trust.label}>
          <div className="stats stats-vertical w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm md:stats-horizontal">
            {t.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong className="stat-value text-[clamp(1.6rem,2.6vw,2.1rem)] tracking-tight">
                  {stat.value}
                </strong>
                <span className="stat-title text-sm text-base-content/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className={sectionClass}>
          <Reveal className="mx-auto max-w-[660px] text-center">
            <h2 className="text-[clamp(1.9rem,3.1vw,2.65rem)] font-bold leading-[1.15] tracking-[-0.022em]">
              {t.how.title}
            </h2>
            <p className="mt-3 text-base text-base-content/70">{t.how.subtitle}</p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.how.steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.07}
                className="card border border-base-300 bg-base-100 shadow-sm"
              >
                <div className="card-body p-6">
                  <span className="inline-grid size-9 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                  <p className="text-sm text-base-content/70">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="features" className={sectionClass}>
          <Reveal className="mx-auto max-w-[660px] text-center">
            <h2 className="text-[clamp(1.9rem,3.1vw,2.65rem)] font-bold leading-[1.15] tracking-[-0.022em]">
              {t.features.title}
            </h2>
            <p className="mt-3 text-base text-base-content/70">
              {t.features.subtitle}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={index * 0.06}
                className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="card-body p-6">
                  <span className="grid size-10 place-items-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                    {featureIcons[index]}
                  </span>
                  <h3 className="mt-4 text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-base-content/70">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="preview" className={sectionClass}>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <Reveal>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-primary">
                {t.preview.eyebrow}
              </span>
              <h2 className="mt-3 text-[clamp(1.9rem,3vw,2.55rem)] font-bold leading-[1.16] tracking-[-0.022em]">
                {t.preview.title}
              </h2>
              <p className="mt-3 text-base text-base-content/70">
                {t.preview.subtitle}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {t.preview.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-base-content/80"
                  >
                    <span className="grid size-6 flex-none place-items-center rounded-full bg-success/10 text-success">
                      <CheckIcon />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a className="btn btn-primary mt-7" href="#pricing">
                {t.nav.cta}
              </a>
            </Reveal>

            <Reveal className="min-w-0" delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-2xl">
                <Image
                  className="block h-auto w-full"
                  src="/product-preview.png"
                  alt={t.preview.imageAlt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) calc(100vw - 32px), 540px"
                />
              </div>
              <p className="mt-3 text-center text-xs text-base-content/60">
                {t.preview.caption}
              </p>
            </Reveal>
          </div>
        </section>

        <section id="pricing" className={sectionClass}>
          <Reveal className="mx-auto max-w-[660px] text-center">
            <h2 className="text-[clamp(1.9rem,3.1vw,2.65rem)] font-bold leading-[1.15] tracking-[-0.022em]">
              {t.pricing.title}
            </h2>
            <p className="mt-3 text-base text-base-content/70">
              {t.pricing.subtitle}
            </p>
          </Reveal>

          <PricingToggle copy={t.pricing} />

          <p className="mx-auto mt-6 max-w-[66ch] text-center text-xs text-base-content/60">
            {t.pricing.note}
          </p>
        </section>

        <section
          className={sectionClass}
          aria-label={t.testimonials.title}
        >
          <Reveal className="mx-auto max-w-[660px] text-center">
            <h2 className="text-[clamp(1.9rem,3.1vw,2.65rem)] font-bold leading-[1.15] tracking-[-0.022em]">
              {t.testimonials.title}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.testimonials.items.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 0.08}
                className="card border border-base-300 bg-base-100 shadow-sm"
              >
                <div className="card-body justify-between gap-6 p-7">
                  <blockquote className="text-lg leading-relaxed tracking-[-0.005em] text-base-content/90">
                    <span
                      className="mb-2 block text-3xl leading-none text-primary"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    {item.quote}
                  </blockquote>
                  <footer className="flex items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="w-10 rounded-full bg-primary/10 text-primary">
                        <span>{item.initials}</span>
                      </div>
                    </div>
                    <span className="flex flex-col leading-tight">
                      <strong className="text-sm">{item.name}</strong>
                      <span className="text-xs text-base-content/60">
                        {item.role}
                      </span>
                    </span>
                  </footer>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="faq" className={sectionClass}>
          <Reveal className="mx-auto max-w-[660px] text-center">
            <h2 className="text-[clamp(1.9rem,3.1vw,2.65rem)] font-bold leading-[1.15] tracking-[-0.022em]">
              {t.faq.title}
            </h2>
            <p className="mt-3 text-base text-base-content/70">{t.faq.subtitle}</p>
          </Reveal>

          <div className="mx-auto mt-9 flex max-w-[780px] flex-col gap-2.5">
            {t.faq.items.map((item, index) => (
              <details
                className="collapse collapse-plus border border-base-300 bg-base-100 shadow-sm"
                key={item.question}
                open={index === 0}
              >
                <summary className="collapse-title text-base font-semibold">
                  {item.question}
                </summary>
                <div className="collapse-content text-sm text-base-content/70">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="cta" className={sectionClass}>
          <Reveal className="relative overflow-hidden rounded-[28px] bg-[radial-gradient(110%_160%_at_50%_0%,rgba(124,58,237,0.5),rgba(11,16,32,0.2)_55%),linear-gradient(160deg,#151b33,#0b1020)] px-6 py-12 text-center text-white shadow-2xl sm:px-10 lg:py-16">
            <h2 className="mx-auto max-w-[22ch] text-[clamp(1.9rem,3.3vw,2.7rem)] font-bold leading-[1.15] tracking-[-0.022em]">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-3 max-w-[58ch] text-base text-white/70">
              {t.cta.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                className="btn border-0 bg-white text-neutral hover:bg-base-200"
                href={`mailto:${t.footer.email}?subject=${encodeURIComponent(
                  "Loadlight free trial"
                )}`}
              >
                {t.cta.primary}
              </a>
              <a
                className="btn btn-outline border-white/30 text-white hover:border-white/60 hover:bg-white/10"
                href={`mailto:${t.footer.email}?subject=${encodeURIComponent(
                  "Loadlight demo"
                )}`}
              >
                {t.cta.secondary}
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">{t.cta.note}</p>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#070b16] pb-6 pt-14 text-[#9aa3b8]">
        <div
          className={`footer grid gap-8 ${containerClass} md:grid-cols-[1.7fr_0.8fr_0.8fr]`}
        >
          <div>
            <a
              className="text-lg font-bold tracking-tight text-white"
              href="/"
              aria-label={SITE_NAME}
            >
              Loadlight
            </a>
            <p className="mt-3.5 max-w-[38ch] text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <a
              className="link link-hover mt-3 inline-block text-sm text-[#d3d9ea]"
              href={`mailto:${t.footer.email}`}
            >
              {t.footer.email}
            </a>
            <p className="mt-4 flex items-center gap-2 text-sm text-[#8de0bb]">
              <span className="status status-success" aria-hidden="true" />
              {t.footer.status}
            </p>
          </div>

          <nav
            className="flex flex-col gap-2"
            aria-label={t.footer.productTitle}
          >
            <p className="mb-1 text-sm font-bold text-white">
              {t.footer.productTitle}
            </p>
            {t.footer.productLinks.map((link) => (
              <a
                className="link link-hover w-fit text-sm"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav
            className="flex flex-col gap-2"
            aria-label={t.footer.companyTitle}
          >
            <p className="mb-1 text-sm font-bold text-white">
              {t.footer.companyTitle}
            </p>
            {t.footer.companyLinks.map((link) => (
              <a
                className="link link-hover w-fit text-sm"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          className={`${containerClass} mt-11 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5`}
        >
          <p className="text-xs">
            &copy; {year} Loadlight. {t.footer.rights}
          </p>
          <p className="text-xs tabular-nums text-[#8f99b0]">
            LCP 0.8s, CLS 0.01, INP 42ms
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
