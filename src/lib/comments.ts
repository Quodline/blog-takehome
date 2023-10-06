import {Post} from '@/types/post'
import api from '@/lib/api'
import {CommentResponse} from '@/types/comments'

export async function fetchPostComments(postId: Post['id']): Promise<CommentResponse> {
    const {data} = await api.get(`/post/${postId}/comment`)
    return data
}