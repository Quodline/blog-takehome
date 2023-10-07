import type {Comment} from '@/types/comments'

interface Props {
    comment: Comment
}

export default function Comment({comment}: Props) {
    return (
        <div key={comment.id} className="card my-2 lg:w-96 bg-base-100 shadow-xl p-4">
            <div className="flex space-x-4 items-end">
                <img src={comment.owner.picture}
                     alt="Profile picture"
                     className="w-16 h-16 rounded-full"/>
                <h2>{comment.message}</h2>
            </div>
        </div>
    )
}
