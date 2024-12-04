"use client"
import React from 'react'
import Image from "next/image"
import "./index.css"
import { useRouter } from 'next/navigation';
export default function Page({ params }: { params: { id: string } }) {

    console.log(params, 'pp');
    const router = useRouter();
    return (
        <div className='photos' onClick={router.back}>
            路由拦截
            <Image alt='123' onClick={(e) => e.stopPropagation()} className='rounded-lg' src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg" width={400} height={400}></Image>
        </div>
    )
}
