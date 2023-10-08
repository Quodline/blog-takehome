'use client'

import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import {useQuery} from '@tanstack/react-query'
import {fetchAllPosts} from '@/lib/posts'
import Pagination from '@/app/pagination'
import PageIndexTitle from '@/app/page-index-title'
import {cardListProps, cardProps} from '@/app/framer-props'
import { motion } from 'framer-motion'

export default function Posts() {
    const page = parseInt(useSearchParams().get('page') || '1')

    const {data} = useQuery(['posts', page], () => fetchAllPosts(page))

    return (
        <div className="p-4 bg-purple-400">
            {data && (
                <>
                    <PageIndexTitle page={page} limit={data.limit} total={data.total}/>
                    <motion.div className="grid lg:grid-cols-4 xl:grid-cols-5" {...cardListProps}>
                        {data?.data.map(post => (
                            <motion.div key={post.id} className="card m-4 bg-base-100 shadow-xl p-4" {...cardProps}>
                                <div className="flex space-x-4">
                                    <img src={post.owner.picture}
                                         alt="Profile picture"
                                         className="w-16 h-16 rounded-full"/>
                                    <h2>{post.text}</h2>
                                </div>
                                <div className="flex justify-end">
                                    <Link href={`/posts/${post.id}`} className="btn btn-primary">
                                        Read article
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <Pagination total={data.total} limit={data.limit} page={page}/>
                </>
            )}
        </div>
    )
}
