import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale, LOCALE_COOKIE } from "@/lib/i18n";

export function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale");
  const target = request.nextUrl.searchParams.get("next");
  const safeTarget =
    target && /^\/(?![/\\])/.test(target) ? target : "/";

  const response = NextResponse.redirect(new URL(safeTarget, request.url));
  if (isLocale(locale ?? undefined)) {
    response.cookies.set(LOCALE_COOKIE, locale as string, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      httpOnly: true,
      secure: request.nextUrl.protocol === "https:",
    });
  }
  return response;
}
