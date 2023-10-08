import Link from 'next/link'
import cn from 'classnames'
import {useCallback} from 'react'
import { motion } from 'framer-motion'
import {pageLinkProps} from '@/app/framer-props'

interface Props {
    total: number
    limit: number
    page: number
}

export default function Pagination({total, limit, page}: Props) {
    const totalPages = useCallback(() => {
        return Math.ceil(total / limit)
    }, [total, limit])

    return (
        <div className="flex space-x-2 overflow-x-auto lg:flex-wrap lg:justify-center p-4 lg:p-10">
            {Array(totalPages()).fill(0).map((n, idx) => (
                <motion.div key={idx + 1} {...pageLinkProps}>
                    <Link href={`/?page=${idx + 1}`}
                          className={cn("btn my-1 w-12 font-bold shadow-2xl", {
                              'btn-primary': page === idx + 1
                          })}>{idx + 1}</Link>
                </motion.div>
            ))}
        </div>
    )
}