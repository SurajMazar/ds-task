import type { Metadata } from 'next'
import localFont from 'next/font/local'
import AppLayout from '@/containers/layouts/appLayout'
import React from 'react'
import ReduxContainer from '@/containers/hoc/Redux'
import './globals.scss'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
})

export const metadata: Metadata = {
    title: 'Review Screen page',
    description: 'Review Screen page'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ReduxContainer>
            <AppLayout
                bodyClasses={`${geistSans.variable} ${geistMono.variable}`}
            >
                {children}
            </AppLayout>
        </ReduxContainer>
    )
}
