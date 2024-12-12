import React from 'react'

export default function PageLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>news layout
            <br />
            {children}
        </div>
    )
}
