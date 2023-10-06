import {Post, PostResponse} from '@/types/post'
import api from '@/lib/api'

export async function fetchAllPosts(page = 1): Promise<PostResponse> {
    const {data} = await api.get(`/post?page=${page - 1}`)
    return data
}

export async function fetchPost(id: Post['id']): Promise<Post> {
    const {data} = await api.get(`/post/${id}`)
    return data
}
