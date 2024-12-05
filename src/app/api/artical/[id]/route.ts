import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const serchParams = req.nextUrl.searchParams.get("query");

  console.log("ininin123",serchParams);
  // const data = await fetch('https://api.vercel.app/blog')
  // const posts = await data.json()

  return Response.json({ msg: "success" });
}
