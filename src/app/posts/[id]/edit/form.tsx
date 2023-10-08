import TextEditor from '@/components/text-editor'
import {useImmer} from 'use-immer'
import {FormEvent, useState} from 'react'
import {Post} from '@/types/post'
import {useMutation} from '@tanstack/react-query'
import {updatePost} from '@/lib/posts'
import {useRouter} from 'next/navigation'

interface Props {
    post: Post
}

export default function EditPostForm({post}: Props) {
    const router = useRouter()
    const [title, setTitle] = useState(post.title || '')
    const [paragraphs, updateParagraphs] = useImmer<string[]>(post.content || [])

    const updatePostMutation = useMutation(updatePost, {
        onSuccess(data) {
            router.push(`/posts/${data.id}`)
        }
    })

    const publish = async (event: FormEvent) => {
        event.preventDefault()
        await updatePostMutation.mutateAsync({
            id: post.id,
            title,
            content: paragraphs,
        })
    }

    return (
        <>
            <form className="flex flex-col max-w-4xl mx-auto p-4" onSubmit={publish}>
                <button className="btn btn-primary self-end my-4">Publish</button>
                <h3 className="text-lg font-bold">Edit post</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text"
                           placeholder="Article title"
                           className="input input-bordered"
                           value={title}
                           onChange={event => setTitle(event.target.value)} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Content</span>
                    </label>
                    <TextEditor paragraphs={paragraphs} updateParagraph={updateParagraphs}/>
                </div>
                <button className="btn btn-primary w-full my-4">Publish update</button>
            </form>
        </>
    )
}
