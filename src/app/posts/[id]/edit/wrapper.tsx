'use client'

import {useQuery} from '@tanstack/react-query'
import {fetchPost} from '@/lib/posts'
import EditPostForm from '@/app/posts/[id]/edit/form'
import Loading from '@/app/loading'

interface Props {
    id: string
}

export default function Wrapper({id}: Props) {
    const {data} = useQuery(['post', id], () => fetchPost(id))

    return data ? <EditPostForm post={data}/> : <Loading/>
}