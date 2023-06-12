// "use client";
import { NextResponse } from "next/server"; 

// const data = localStorage.getItem("isUserLogIn");

export function middleware(NextRequest) {
  let cookie = NextRequest.cookies.get("isUserLogIn")?.value;
  if (!cookie && NextRequest.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/login", NextRequest.url));
  }
  if (cookie && NextRequest.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.rewrite(new URL("/", NextRequest.url));
  }
}
