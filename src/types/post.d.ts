import {PartialUser, User} from '@/types/user'

interface PostServer {
    id: string
    image: string
    likes: number
    link?: string,
    tags: string[]
    text: string
    publishDate: string
    owner: PartialUser
}

interface Post {
    id: string
    content: string[]
    title: string
    publishDate: string
    owner: PartialUser
}

interface CreatePostRequest {
    title: string
    content: string[]
}

interface UpdatePostRequest {
    id: User['id']
    title: string
    content: string[]
}

interface PostResponse {
    data: Post[]
    total: number
    page: number
    limit: number
}
