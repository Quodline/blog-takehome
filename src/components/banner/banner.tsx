import styles from "./banner.module.css"
import {PropsWithChildren, ReactNode} from 'react'

export default function Banner({children, options}: PropsWithChildren<{ options?: ReactNode }>) {
    return (
        <header className={styles.banner}>
            <nav className="p-4 lg:pl-12">
                <h1 className="font-bold text-3xl">LoveHub</h1>
            </nav>
            <h2 className="p-4 lg:pl-12 flex items-end text-2xl lg:text-5xl flex-1">{children}</h2>
            {options && (
                <section>
                    {options}
                </section>
            )}
        </header>
    )
}
