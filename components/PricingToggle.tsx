import { CheckIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  copy: Dictionary["pricing"];
};

export function PricingToggle({ copy }: Props) {
  return (
    <div className="pricing-block">
      <div className="tabs tabs-box mx-auto mt-8 w-max border border-base-300 bg-base-100 p-1 shadow-sm">
        <label className="tab gap-1.5">
          <input
            type="radio"
            name="billing"
            id="billing-monthly"
            defaultChecked
          />
          {copy.monthly}
        </label>
        <label className="tab gap-1.5">
          <input type="radio" name="billing" id="billing-annual" />
          {copy.annual}
          <span className="badge badge-success badge-sm">{copy.save}</span>
        </label>
      </div>

      <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
        {copy.plans.map((plan) => (
          <article
            key={plan.name}
            className={
              plan.featured
                ? "card relative border-0 bg-neutral text-neutral-content shadow-2xl"
                : "card relative border border-base-300 bg-base-100 shadow-sm"
            }
          >
            <div className="card-body p-6">
              {plan.featured ? (
                <span className="badge badge-primary absolute -top-3 end-5">
                  {copy.popular}
                </span>
              ) : null}
              <h3 className="card-title text-lg">{plan.name}</h3>
              <p
                className={
                  plan.featured
                    ? "text-sm text-neutral-content/70"
                    : "text-sm text-base-content/60"
                }
              >
                {plan.tagline}
              </p>
              <p className="mt-4 flex items-baseline gap-1" dir="ltr">
                <span className="text-lg font-bold">$</span>
                <span className="price-amount price-monthly text-4xl font-extrabold tracking-tight">
                  {plan.monthly}
                </span>
                <span className="price-amount price-annual text-4xl font-extrabold tracking-tight">
                  {plan.annual}
                </span>
                <span
                  className={
                    plan.featured
                      ? "text-sm font-medium text-neutral-content/70"
                      : "text-sm font-medium text-base-content/60"
                  }
                >
                  {copy.perMonth}
                </span>
              </p>
              <p
                className={
                  plan.featured
                    ? "price-note price-monthly mt-1.5 text-xs text-neutral-content/60"
                    : "price-note price-monthly mt-1.5 text-xs text-base-content/60"
                }
              >
                {copy.monthlyNote}
              </p>
              <p
                className={
                  plan.featured
                    ? "price-note price-annual mt-1.5 text-xs text-neutral-content/60"
                    : "price-note price-annual mt-1.5 text-xs text-base-content/60"
                }
              >
                {copy.annualNote}
              </p>
              <a
                className={
                  plan.featured
                    ? "btn btn-block mt-5 border-0 bg-white text-neutral hover:bg-base-200"
                    : "btn btn-outline btn-block mt-5"
                }
                href={`mailto:hello@loadlight.dev?subject=${encodeURIComponent(
                  `Loadlight: ${plan.name}`
                )}`}
              >
                {plan.cta}
              </a>
              <ul
                className={
                  plan.featured
                    ? "mt-5 flex flex-col gap-2 border-t border-white/15 pt-4"
                    : "mt-5 flex flex-col gap-2 border-t border-base-300 pt-4"
                }
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={
                      plan.featured
                        ? "flex items-start gap-2.5 text-sm text-neutral-content/90"
                        : "flex items-start gap-2.5 text-sm text-base-content/80"
                    }
                  >
                    <span
                      className={
                        plan.featured
                          ? "mt-0.5 flex-none text-secondary"
                          : "mt-0.5 flex-none text-success"
                      }
                    >
                      <CheckIcon />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
