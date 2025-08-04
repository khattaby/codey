import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Check if user is trying to access admin routes
    if (req.nextUrl.pathname.startsWith("/admin")) {
      // Check if user has admin role
      if (req.nextauth.token?.role !== "ADMIN") {
        // Redirect to home page
        return NextResponse.redirect(new URL("/", req.url))
      }
    }
    
    // Check if admin user is trying to access home page
    if (req.nextUrl.pathname === "/" && req.nextauth.token?.role === "ADMIN") {
      // Redirect admin back to dashboard
      return NextResponse.redirect(new URL("/admin", req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: ["/admin/:path*", "/"]
}