'use client'

import styles from '@/components/banner/banner.module.css'
import {motion} from 'framer-motion'
import {PropsWithChildren} from 'react'

export default function AnimatedTitle({children}: PropsWithChildren) {
    return (
        <motion.h2 className={styles.bannerTitle}
                   initial={{x: 3000}}
                   animate={{x: 0}}
                   transition={{duration: 1}}>{children}</motion.h2>
    )
}