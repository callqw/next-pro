import { NextResponse } from "next/server";

export async function GET() {
  const fetchImage = (
    await fetch("https://dog.ceo/api/breeds/image/random", { method: "GET" })
  ).json();

  return NextResponse.json(await fetchImage);
}
