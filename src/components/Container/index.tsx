"use client"
import React from 'react'
/* 插槽组件，为每个调用这个组件生成container样式，媒体查询 */
export default function index({ children }: any) {
    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {children}
        </div>
    )
}
