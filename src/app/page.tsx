import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const fetchImage =(await fetch("http:127.0.0.1:3000/api/cache", { method: "GET" })).json();
 

  const res = await fetchImage;
  return (
    <div>
      home
      {new Date().toLocaleString()}
      <Image src={res.message} alt="asdf" width={50} height={50}></Image>
    </div>
  );
}
