import Link from 'next/link'
import styles from './banner.module.css'
import {PropsWithChildren, ReactNode} from 'react'
import AnimatedTitle from '@/components/banner/animated-title'

interface Props extends PropsWithChildren {
    /**
     * Menu buttons to be displayed at the bottom of the banner
     */
    options?: ReactNode
}

export default function Banner({children, options}: Props) {
    return (
        <header className={styles.banner}>
            <nav className="flex justify-between pb-4">
                <h1 className="font-bold text-3xl">
                    <Link href="/">LoveHub</Link>
                </h1>
                <form></form>
            </nav>
            <AnimatedTitle>{children}</AnimatedTitle>
            {options && (
                <section className="flex py-4 space-x-4 justify-end">{options}</section>
            )}
        </header>
    )
}
