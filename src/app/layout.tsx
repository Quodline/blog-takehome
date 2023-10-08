import './globals.css'
import type {Metadata} from 'next'
import {Mulish} from 'next/font/google'
import {PropsWithChildren} from 'react'
import Providers from '@/app/providers'

const mulish = Mulish({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'LoveHub: The #1 relationship blog for Africans',
    description: 'The #1 relationship blog for Africans. Find answers to many questions you have about love,' +
        ' relationship and marriages.',
    metadataBase: new URL(process.env.APP_URL || 'https://blog-takehome.vercel.app'),
}

export default function RootLayout(props: PropsWithChildren) {
    return (
        <html lang="en">
        <body className={mulish.className}>
        <Providers>{props.children}</Providers>
        </body>
        </html>
    )
}
