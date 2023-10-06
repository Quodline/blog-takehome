'use client'

import {useQuery} from '@tanstack/react-query'
import {fetchAllPosts} from '@/lib/posts'
import Link from 'next/link'
import {useCallback} from 'react'
import {useSearchParams} from 'next/navigation'
import cn from 'classnames'
import {useAllPosts} from '@/hooks/usePost'

export default function Posts() {
    const searchParams = useSearchParams()
    const page = parseInt(searchParams.get('page') || '0')

    const {data} = useAllPosts(page)

    const pageIndexString = useCallback(() => {
        if (data) {
            const { page, limit, total } = data
            const startIndex = page * limit
            return `Showing ${startIndex+1} to ${startIndex+limit} of ${total} items`
        }
    }, [data])

    const totalPages = useCallback(() => {
        if (data) {
            const {total, limit} = data;
            return Math.ceil(total / limit)
        }

        return 1
    }, [data])

    return (
        <div className="p-4 bg-gray-200">
            <h2 className="font-semibold text-2xl">{pageIndexString()}</h2>
            <div className="grid grid-cols-4 space-x-2 justify-center">
                {data?.data.map(post => (
                    <div key={post.id} className="card my-2 w-96 bg-base-100 shadow-xl p-4">
                        <div className="flex space-x-4">
                            <img src={post.owner.picture}
                                 alt="Profile picture"
                                 className="w-16 h-16 rounded-full"/>
                            <h2>{post.text}</h2>
                        </div>
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <Link href={`${post.id}`} className="btn btn-primary">
                                    Read article
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-2 flex-wrap">
                {Array(totalPages()).fill(0).map((n, idx) => (
                    <Link key={idx+1}
                          href={`/?page=${idx+1}`}
                          className={cn("btn btn-primary my-1 w-12 font-bold", {
                              'btn-accent': page === idx+1
                          })}>{idx + 1}</Link>
                ))}
            </div>
        </div>
    )
}
