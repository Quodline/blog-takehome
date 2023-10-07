import Banner from '@/components/banner/banner'
import Wrapper from '@/app/posts/[id]/edit/wrapper'

interface Props {
    params: {
        id: string
    }
}

export default function EditPost({params}: Props) {
    const {id} = params

    return (
        <>
            <Banner>
                <div>You fail only if you stop writing.</div>
                <em className="text-lg">Ray Bradbury</em>
            </Banner>
            <main>
                <Wrapper id={id}/>
            </main>
        </>
    )
}