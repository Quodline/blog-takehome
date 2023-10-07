import dayjs from 'dayjs'
import {PartialUser} from '@/types/user'

interface Props {
    owner?: PartialUser,
    publishDate?: string | null
}

export default function OwnerDetails({owner, publishDate}: Props) {
    return (
        <section className="flex space-x-4 items-end my-4">
            <img src={owner?.picture} alt="Profile picture" className="w-20 h-20 rounded-full" />
            <div>
                <div className="font-bold">
                    {owner?.firstName} {owner?.lastName} ({owner?.title})
                </div>
                <div>{dayjs(publishDate).fromNow()}</div>
            </div>
        </section>
    )
}
