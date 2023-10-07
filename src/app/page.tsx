import Posts from '@/app/posts'
import Banner from '@/components/banner/banner'
import Link from 'next/link'

export default async function Home() {
    return (
        <>
            <Banner options={
                <Link href="/write" className="btn btn-outline btn-accent">New Post</Link>
            }>
                The #1 relationship blog for Africans
            </Banner>
            <main>
                <Posts/>
            </main>
        </>
    )
}
