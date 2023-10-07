import {Post} from '@/types/post'
import {baseURL, headers} from '@/lib/fetch'
import {CommentResponse, CreateCommentRequest} from '@/types/comments'

export async function fetchComments(postId: Post['id']): Promise<CommentResponse> {
    const res = await fetch(`${baseURL}/post/${postId}/comment`, {headers})
    return res.json()
}

export async function createComment(req: CreateCommentRequest): Promise<Comment> {
    const method = 'POST'
    const body = JSON.stringify({
        post: req.postId,
        message: req.message,
        owner: '60d0fe4f5311236168a10a0b',
    })

    const res = await fetch(`${baseURL}/comment/create`, {body, method, headers})

    return res.json()
}
