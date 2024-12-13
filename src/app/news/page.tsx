import React from 'react'
import { newsHtml } from "@/controllers/news.ts";
import Client from "./client";
export default async function Page() {

    let res: BASIC.NewsData = await newsHtml({
        query: {
            page: '0'
        }
    })
    console.log(res, 'res');

    return (
        <div>
            <Client news={res.data}></Client>
        </div>
    )
}
