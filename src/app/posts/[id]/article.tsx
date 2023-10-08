'use client'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {Post} from '@/types/post'
import Banner from '@/components/banner/banner'
import Options from '@/app/posts/[id]/options'
import OwnerDetails from '@/app/posts/[id]/owner-details'
import {useQuery} from '@tanstack/react-query'
import {fetchPost} from '@/lib/posts'
import CommentList from '@/app/posts/[id]/edit/comment-list'

interface Props {
    id: Post['id']
}

dayjs.extend(relativeTime)

export default function Article({id}: Props) {
    const {data: post} = useQuery(['post', id], () => fetchPost(id))

    return (
        <>
            <Banner options={<Options id={id}/>}>{post?.text}</Banner>
            {post && (
                <article className="flex flex-col p-10">
                    <OwnerDetails owner={post?.owner} publishDate={post?.publishDate}/>
                    <section className="flex flex-col lg:flex-row">
                        <div className="lg:basis-3/4">
                            {post?.tags.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <CommentList postId={id}/>
                    </section>
                </article>
            )}
        </>
    )
}
