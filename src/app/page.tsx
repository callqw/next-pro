import Image from "next/image";
import Link from "next/link";
import Content from "../components/Content";
// import { indexHtml } from "@/controllers/index"

export default async function Home() {
  const response = await fetch('/api/getIndex');
  console.log(response,'response');
  
  // const contentData = await indexHtml();

  return (
    <div>
      {/* <Content contentData={contentData}></Content> */}

    </div>
  );
}
