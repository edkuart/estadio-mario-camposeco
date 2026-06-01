import { type NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Let static assets and the access page through unconditionally
  if (
    pathname.startsWith("/acceso") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next()
  }

  const pin = process.env.VALLA_ACCESS_PIN
  const sessionSecret = process.env.VALLA_ACCESS_SESSION_SECRET ?? pin
  const cookie = request.cookies.get("valla_access")

  if (!pin || (sessionSecret && cookie?.value === sessionSecret)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = "/acceso"
  if (pathname !== "/") url.searchParams.set("next", pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}

