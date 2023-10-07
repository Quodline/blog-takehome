import {PartialUser} from '@/types/user'
import {Post} from '@/types/post'

interface Comment {
    "id": string
    "message": string
    "owner": PartialUser
    "post": Post['id']
    "publishDate": string
}

interface CommentResponse {
    data: Comment[]
    total: number
    page: number
    limit: number
}

interface CreateCommentRequest {
    postId: string
    message: string
}
