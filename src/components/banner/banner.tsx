import Link from "next/link"
import styles from "./banner.module.css"
import {PropsWithChildren, ReactNode} from 'react'

export default function Banner({children, options}: PropsWithChildren<{ options?: ReactNode }>) {
    return (
        <header className={styles.banner}>
            <nav className="pb-4">
                <h1 className="font-bold text-3xl">
                    <Link href="/">LoveHub</Link>
                </h1>
            </nav>
            <h2 className="py-4 flex flex-col justify-end text-2xl lg:text-5xl flex-1">{children}</h2>
            {options && (
                <section className="flex py-4 space-x-4 justify-end">{options}</section>
            )}
        </header>
    )
}
