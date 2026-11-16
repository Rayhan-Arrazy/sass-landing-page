import type { Dictionary } from "@/lib/i18n";

const barHeights = [
  34, 48, 40, 56, 44, 62, 70, 54, 78, 86, 66, 74, 58, 50, 68, 82, 61, 45,
];

export function DashboardMockup({ copy }: { copy: Dictionary["mockup"] }) {
  const metrics = [
    { label: copy.lcp, value: copy.lcpValue },
    { label: copy.inp, value: copy.inpValue },
    { label: copy.cls, value: copy.clsValue },
  ];

  return (
    <div
      className="card w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 text-base-content shadow-2xl"
      role="img"
      aria-label={copy.label}
      dir="ltr"
    >
      <div className="flex items-center gap-3 border-b border-base-300 bg-base-200/60 px-3.5 py-2.5">
        <span className="flex flex-none gap-1.5" aria-hidden="true">
          <i className="size-2 rounded-full bg-error/40" />
          <i className="size-2 rounded-full bg-warning/40" />
          <i className="size-2 rounded-full bg-success/40" />
        </span>
        <span className="hidden min-[480px]:block flex-1 truncate rounded-md border border-base-300 bg-base-100 px-2.5 py-1 text-center text-[10.5px] text-base-content/70">
          app.loadlight.dev/overview
        </span>
        <span className="badge badge-soft badge-success badge-sm ms-auto gap-1 whitespace-nowrap">
          <span className="size-1.5 rounded-full bg-success" />
          {copy.live}
        </span>
      </div>

      <div className="p-3 sm:p-4">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-bold">{copy.project}</p>
            <p className="mt-0.5 text-[10.5px] text-base-content/70">
              {copy.period}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-success/25 bg-success/10 px-2.5 py-1.5">
            <strong className="text-lg leading-none text-success">
              {copy.score}
            </strong>
            <span className="max-w-[62px] text-[9px] leading-tight text-success max-[560px]:hidden">
              {copy.scoreLabel}
            </span>
          </div>
        </div>

        <div className="mb-2.5 grid grid-cols-3 gap-2">
          {metrics.map((metric) => (
            <div
              className="flex flex-col gap-0.5 rounded-lg border border-base-300 bg-base-200/60 px-2.5 py-2"
              key={metric.label}
            >
              <span className="text-[9.5px] font-bold tracking-wide text-base-content/70">
                {metric.label}
              </span>
              <strong className="text-[17px] font-bold leading-tight text-success max-[560px]:text-[15px]">
                {metric.value}
              </strong>
              <span className="text-[8.5px] text-base-content/70">p75</span>
            </div>
          ))}
        </div>

        <div className="mb-2.5 grid gap-2 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-lg border border-base-300 bg-base-200/60 p-2.5">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-[9.5px] font-bold tracking-wide text-base-content/70">
                {copy.chartLabel}
              </span>
              <span className="badge badge-soft badge-success badge-xs gap-1 whitespace-nowrap">
                <span className="size-1 rounded-full bg-success" />
                {copy.healthy}
              </span>
            </div>
            <div className="flex h-[78px] items-end gap-[3px] max-[560px]:h-[68px]">
              {barHeights.map((height, index) => (
                <span
                  key={index}
                  className={
                    height > 80
                      ? "min-h-1 flex-1 rounded-t-[3px] bg-gradient-to-t from-primary to-secondary"
                      : "min-h-1 flex-1 rounded-t-[3px] bg-primary/25"
                  }
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="mt-1.5 flex justify-between text-[8px] text-base-content/70">
              <span>00:00</span>
              <span>12:00</span>
              <span>24:00</span>
            </div>
          </div>

          <div className="rounded-lg border border-base-300 bg-base-200/60 p-2.5">
            <p className="text-[9.5px] font-bold tracking-wide text-base-content/70">
              {copy.pagesTitle}
            </p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {copy.pages.map((page) => (
                <li
                  key={page.path}
                  className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-1.5 text-[9.5px]"
                >
                  <span className="truncate text-base-content/70">
                    {page.path}
                  </span>
                  <span className="font-bold">{page.lcp}</span>
                  <span
                    className={
                      page.trend.startsWith("-")
                        ? "badge badge-success badge-xs font-bold"
                        : "badge badge-warning badge-xs font-bold"
                    }
                  >
                    {page.trend}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-warning/30 bg-warning/10 px-2.5 py-2 text-[9.5px] text-base-content/80">
          <span className="size-1.5 flex-none rounded-full bg-warning" />
          <span>{copy.alert}</span>
          <span className="badge badge-warning badge-xs ms-auto whitespace-nowrap font-bold">
            {copy.review}
          </span>
        </div>
      </div>
    </div>
  );
}

