import {cardProps} from '@/app/framer-props'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {Post} from '@/types/post'

interface Props {
    post: Post,
}

export default function PostCard({post}: Props) {
    return (
        <motion.div className="card m-4 bg-base-100 shadow-xl p-4" {...cardProps}>
            <div className="flex space-x-4">
                <img src={post.owner.picture}
                     alt="Profile picture"
                     className="w-16 h-16 rounded-full"/>
                <h2 className="font-semibold">{post.title}</h2>
            </div>
            <div className="flex justify-end">
                <Link href={`/posts/${post.id}`} className="btn btn-primary">
                    Read article
                </Link>
            </div>
        </motion.div>
    )
}
