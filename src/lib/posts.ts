import {CreatePostRequest, Post, PostResponse, PostServer, UpdatePostRequest} from '@/types/post'
import {baseURL, headers} from '@/lib/fetch'

function postTransformer(post: PostServer): Post {
    const {id, text: title, tags: content, publishDate, owner} = post

    return {id, title, content, publishDate, owner}
}

export async function fetchAllPosts(page = 1): Promise<PostResponse> {
    const res = await fetch(`${baseURL}/post?page=${page - 1}`, {headers})
    const jsonRes = await res.json()

    return {
        ...jsonRes,
        data: jsonRes.data.map(postTransformer),
    }
}

export async function fetchPost(id: Post['id']): Promise<Post> {
    const res = await fetch(`${baseURL}/post/${id}`, {headers})

    return postTransformer(await res.json())
}

export async function createPost(req: CreatePostRequest): Promise<Post> {
    const method = 'POST'
    const body = JSON.stringify({
        text: req.title,
        owner: '60d0fe4f5311236168a10a0b',
        tags: req.content,
    })

    const res = await fetch(`${baseURL}/post/create`, {body, method, headers})

    return postTransformer(await res.json())
}

export async function updatePost(req: UpdatePostRequest): Promise<Post> {
    const method = 'PUT'
    const body = JSON.stringify({
        text: req.title,
        tags: req.content,
    })

    const res = await fetch(`${baseURL}/post/${req.id}`, {body, method, headers})

    return postTransformer(await res.json())
}

export async function deletePost(id: Post['id']): Promise<string> {
    const method = 'DELETE'

    await fetch(`${baseURL}/post/${id}`, {method, headers})

    return id
}
