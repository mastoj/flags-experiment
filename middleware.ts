import { precompute } from "flags/next";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { precomputeFlags } from "./libs/flags";

const getUrl = (request: NextRequest, code: string, pathOverride?: string) =>
  new URL(
    `/${code}${pathOverride ?? request.nextUrl.pathname}${
      request.nextUrl.search
    }`,
    request.url
  );

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const code = await precompute(precomputeFlags);
  console.log("==> code", code, request.nextUrl.pathname);
  const url = getUrl(request, code);
  return NextResponse.rewrite(url, { request });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known|.*\\.svg$).*)",
};
