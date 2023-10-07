import {CreatePostRequest, Post, PostResponse, UpdatePostRequest} from '@/types/post'
import {baseURL, headers} from '@/lib/fetch'

export async function fetchAllPosts(page = 1): Promise<PostResponse> {
    const res = await fetch(`${baseURL}/post?page=${page - 1}`, {headers})
    return res.json()
}

export async function fetchPost(id: Post['id']): Promise<Post> {
    const res = await fetch(`${baseURL}/post/${id}`, {headers})
    return res.json()
}

export async function createPost(req: CreatePostRequest): Promise<Post> {
    const method = 'POST'
    const body = JSON.stringify({
        text: req.title,
        image: 'https://randomuser.me/api/portraits/med/women/5.jpg',
        owner: '60d0fe4f5311236168a10a0b',
        tags: req.content,
    })

    const res = await fetch(`${baseURL}/post/create`, {body, method, headers})

    return res.json()
}

export async function updatePost(req: UpdatePostRequest): Promise<Post> {
    const method = 'PUT'
    const body = JSON.stringify({
        text: req.title,
        image: 'https://randomuser.me/api/portraits/med/women/5.jpg',
        tags: req.content,
    })

    const res = await fetch(`${baseURL}/post/${req.id}`, {body, method, headers})

    return res.json()
}

export async function deletePost(id: Post['id']): Promise<string> {
    await fetch(`${baseURL}/post/${id}`, {headers})
    return id
}
