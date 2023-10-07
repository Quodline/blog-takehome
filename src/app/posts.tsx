'use client'

import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import {useQuery} from '@tanstack/react-query'
import {fetchAllPosts} from '@/lib/posts'
import Pagination from '@/app/pagination'
import PageIndexTitle from '@/app/page-index-title'

export default function Posts() {
    const searchParams = useSearchParams()
    const page = parseInt(searchParams.get('page') || '0')

    const {data} = useQuery(['posts', page], () => fetchAllPosts(page))

    return (
        <div className="p-4 bg-gray-200">
            {data && (
                <>
                    <PageIndexTitle page={page} limit={data.limit} total={data.total}/>
                    <div className="grid lg:grid-cols-4 space-x-2 justify-center">
                        {data?.data.map(post => (
                            <div key={post.id} className="card my-2 bg-base-100 shadow-xl p-4">
                                <div className="flex space-x-4">
                                    <img src={post.owner.picture}
                                         alt="Profile picture"
                                         className="w-16 h-16 rounded-full"/>
                                    <h2>{post.text}</h2>
                                </div>
                                <div className="card-body">
                                    <div className="card-actions justify-end">
                                        <Link href={`/posts/${post.id}`} className="btn btn-primary">
                                            Read article
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination total={data.total} limit={data.limit} page={page}/>
                </>
            )}
        </div>
    )
}
