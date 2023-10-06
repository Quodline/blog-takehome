import {User} from '@/types/user'

interface Post {
    id: string
    image: string
    likes: number
    tags: string[]
    text: string
    publishDate: string
    owner: Pick<User, 'id' | 'title' | 'firstName' | 'lastName' | 'picture'>
}

interface PostResponse {
    data: Post[]
    total: number
    page: number
    limit: number
}
