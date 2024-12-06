import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
//   console.log(req.nextUrl.pathname, "in about111");
  const validataLogin = req.nextUrl;
//   console.log(validataLogin,'vaa');
  
  if (validataLogin.pathname === "/dashboard") {
    console.log(validataLogin.pathname,"dashboard");
    
  } else {

    console.log(validataLogin.pathname,"els11");
  }
  // return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  // matcher: '/',
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"], //过滤的条件不显示
};
