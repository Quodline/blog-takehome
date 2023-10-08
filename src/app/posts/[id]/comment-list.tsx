import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {createComment, fetchComments} from '@/lib/comments'
import Comment from '@/app/posts/[id]/comment'
import {Post} from '@/types/post'
import {FormEvent, useState} from 'react'

interface Props {
    postId: Post['id']
}

export default function CommentList({postId}: Props) {
    const queryClient = useQueryClient()

    const [message, setMessage] = useState('')
    const {data: comments} = useQuery(['comments'], () => fetchComments(postId))

    const createCommentMutation = useMutation(createComment, {
        onSuccess() {
            setMessage('')

            // trigger a refresh of comments
            queryClient.invalidateQueries({queryKey: ['comments']})
        }
    })

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault()
        await createCommentMutation.mutateAsync({postId, message})
    }

    return (
        <aside>
            <section>
                <h3 className="text-2xl font-bold">Comments</h3>
                {comments?.data.map(comment => (
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </section>
            <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
                <h3 className="text-xl font-bold">New comment</h3>
                <textarea className="textarea textarea-bordered w-full"
                          value={message}
                          onChange={event => setMessage(event.target.value)}/>
                <button className="btn btn-primary">Post</button>
            </form>
        </aside>
    )
}
