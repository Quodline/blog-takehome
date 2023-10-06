import styles from "./banner.module.css"
import {PropsWithChildren} from 'react'

export default function Banner({children}: PropsWithChildren) {
    return (
        <header className={styles.banner}>
            <nav className="pl-12 py-4">
                <h1 className="font-bold text-3xl">LoveHub</h1>
            </nav>
            <h2 className="pl-12 flex items-center text-5xl h-full">{children}</h2>
        </header>
    )
}
