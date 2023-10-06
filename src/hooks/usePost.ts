import {useMutation, useQuery} from '@tanstack/react-query'
import {deletePost, fetchAllPosts, fetchPost} from '@/lib/posts'
import {Post} from '@/types/post'

export const useAllPosts = (page = 1) => {
    return useQuery(['posts'], () => fetchAllPosts(page))
}

export const useGetPost = (id: Post['id']) => {
    return useQuery(['post'], () => fetchPost(id))
}

export const useDeletePost = () => {
    return useMutation(deletePost)
}

