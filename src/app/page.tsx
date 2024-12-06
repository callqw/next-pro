import { cookies } from "next/headers";
import Image from "next/image";
import antd from 'antd'
import Link from "next/link";
import { config } from "@/src/config";
export const dynamic = 'force-dynamic'
export default async function Home() {
  const mainData = await fetch(`http://127.0.0.1:3000/api/cache`, { method: "GET" });
  const res = await mainData.json();
  const data: DefaultProps = { id: "12", name: '123' }
  return (
    <div>
      home
      {new Date().toLocaleString()}
      <Image src={res.message} alt="asdf" width={50} height={50}></Image>
    </div>
  );
}
