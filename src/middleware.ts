import {  clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/settings(.*)"])

export default clerkMiddleware((auth,req)=>{
  if(isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!.*\\..*|_next).*)',
    // Always run for API routes
    "/",
    '/(api|trpc)(.*)',
  ],
};