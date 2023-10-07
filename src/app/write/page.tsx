import Banner from '@/components/banner/banner'
import NewPostForm from '@/app/write/form'

export default function NewPost() {
    return (
        <>
            <Banner>
                <div>You fail only if you stop writing.</div>
                <em className="text-lg">Ray Bradbury</em>
            </Banner>
            <main>
                <NewPostForm/>
            </main>
        </>
    )
}