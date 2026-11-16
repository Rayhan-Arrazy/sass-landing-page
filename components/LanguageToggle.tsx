import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  label: string;
  ariaLabel: string;
};

export function LanguageToggle({ locale, label, ariaLabel }: Props) {
  const next: Locale = locale === "ar" ? "en" : "ar";

  return (
    <a
      className="btn btn-ghost btn-sm gap-2"
      href={`/set-locale?locale=${next}`}
      hrefLang={next}
      lang={next}
      aria-label={`${label}. ${ariaLabel}`}
    >
      <svg
        className="size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
