'use client'

import {useSearchParams} from 'next/navigation'
import {useQuery} from '@tanstack/react-query'
import {fetchAllPosts} from '@/lib/posts'
import Pagination from '@/app/pagination'
import PageIndexTitle from '@/app/page-index-title'
import {cardListProps} from '@/app/framer-props'
import {motion} from 'framer-motion'
import PostCard from '@/app/post-card'

export default function Posts() {
    const page = parseInt(useSearchParams().get('page') || '1')

    const {data} = useQuery(['posts', page], () => fetchAllPosts(page))

    return (
        <div className="p-4 bg-purple-400">
            {data && (
                <>
                    <PageIndexTitle page={page} limit={data.limit} total={data.total}/>
                    <motion.div id="home-posts" className="grid lg:grid-cols-4 xl:grid-cols-5" {...cardListProps}>
                        {data?.data.map(post => (
                            <PostCard key={post.id} post={post}/>
                        ))}
                    </motion.div>
                    <Pagination total={data.total} limit={data.limit} page={page}/>
                </>
            )}
        </div>
    )
}
