import {useQuery} from '@tanstack/react-query'
import {Post} from '@/types/post'
import {fetchPostComments} from '@/lib/comments'

export const usePostComments = (postId: Post['id']) => {
    return useQuery(['comments'], () => fetchPostComments(postId))
}
