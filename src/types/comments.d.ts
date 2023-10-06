import {User} from '@/types/user'
import {Post} from '@/types/post'

interface Comment {
    "id": string
    "message": string
    "owner": Pick<User, 'id' | 'title' | 'firstName' | 'lastName' | 'picture'>
    "post": Post['id']
    "publishDate": string
}

interface CommentResponse {
    data: Comment[]
    total: number
    page: number
    limit: number
}
