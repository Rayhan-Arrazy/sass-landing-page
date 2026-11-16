const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? vercelUrl ?? "http://localhost:3000";

export const SITE_NAME = "Loadlight";

export const CONTACT_EMAIL = "hello@loadlight.dev";
