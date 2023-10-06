import { useQuery } from '@tanstack/react-query'
import {fetchAllPosts, fetchPost} from '@/lib/posts'
import {Post} from '@/types/post'

const key = 'posts'

export const useAllPosts = (page = 1) => {
    return useQuery([key], () => fetchAllPosts(page))
}

export const useGetPost = (id: Post['id']) => {
    return useQuery([key], () => fetchPost(id))
}
