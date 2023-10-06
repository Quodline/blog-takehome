import {useRef} from 'react'
import {useDeletePost} from '@/hooks/usePost'
import {Post} from '@/types/post'
import {useRouter} from 'next/navigation'

export default function Options({id}: {id: Post['id']}) {
    const deletePost = useDeletePost()
    const deleteModalRef = useRef<HTMLDialogElement>(null)
    const router = useRouter()

    const onDelete = async () => {
        await deletePost.mutateAsync(id)
        router.push('/')
    }

    return (
        <section className="flex p-4 space-x-4 justify-end">
            <button className="btn btn-outline btn-accent">Edit</button>
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
        </section>
    )
}
