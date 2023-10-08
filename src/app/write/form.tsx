'use client'

import TextEditor from '@/components/text-editor'
import {useImmer} from 'use-immer'
import {FormEvent, useState} from 'react'
import {useRouter} from 'next/navigation'
import {useMutation} from '@tanstack/react-query'
import {createPost} from '@/lib/posts'

export default function NewPostForm() {
    const router = useRouter()
    const createPostMutation = useMutation(createPost, {
        onSuccess(data) {
            router.push(`/posts/${data.id}`)
        }
    })
    const [title, setTitle] = useState('')
    const [paragraphs, updateParagraphs] = useImmer<string[]>([''])

    const publish = async (event: FormEvent) => {
        event.preventDefault()
        await createPostMutation.mutateAsync({
            title,
            content: paragraphs,
        })
    }

    return (
        <>
            <form className="flex flex-col max-w-4xl mx-auto p-4" onSubmit={publish}>
                <button className="btn btn-primary self-end my-4">Publish</button>
                <h3 className="text-lg font-bold">Create new post</h3>
                <div className="form-control">
                    <label className="label">Title</label>
                    <input type="text"
                           placeholder="Article title"
                           required
                           className="input input-bordered"
                           value={title}
                           onChange={event => setTitle(event.target.value)}/>
                </div>
                <div className="form-control">
                    <label className="label">Content</label>
                    <TextEditor paragraphs={paragraphs} updateParagraph={updateParagraphs}/>
                </div>
                <button type="submit" className="btn btn-primary my-4">Publish</button>
            </form>
        </>
    )
}