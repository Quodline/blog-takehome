import {useRef} from 'react'
import {Post} from '@/types/post'
import {useRouter} from 'next/navigation'
import {useMutation} from '@tanstack/react-query'
import {deletePost} from '@/lib/posts'
import Link from 'next/link'

export default function Options({id}: { id: Post['id'] }) {
    const deletePostMutation = useMutation(deletePost)
    const deleteModalRef = useRef<HTMLDialogElement>(null)
    const router = useRouter()

    const onDelete = async () => {
        await deletePostMutation.mutateAsync(id)
        router.push('/')
    }

    return (
        <>
            <Link href={`/posts/${id}/edit`} className="btn btn-outline btn-accent">Edit</Link>
            <button className="btn btn-outline btn-error"
                    onClick={() => deleteModalRef.current?.showModal()}>
                Delete
            </button>
            <dialog ref={deleteModalRef} className="modal text-black">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure?</h3>
                    <p className="py-4">This post will be permanently deleted.</p>
                    <div className="modal-action">
                        <form method="dialog" className="grid grid-cols-2 w-full space-x-4">
                            <button className="btn">Close</button>
                            <button className="btn btn-error" onClick={onDelete}>Delete</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
