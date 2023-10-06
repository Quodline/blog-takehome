import Posts from '@/app/posts'
import Banner from '@/components/banner/banner'

export default async function Home() {
    return (
        <main>
            <Banner>The #1 relationship blog for Africans</Banner>
            <Posts/>
        </main>
    )
}
