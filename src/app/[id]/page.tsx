import Article from './article'
import {Post} from '@/types/post'
import Banner from '@/components/banner/banner'

interface Props {
    params: { id: Post['id'] }
}

export default function Post(props: Props) {
    return (
        <main>
            <Article id={props.params.id}/>
        </main>
    )
}
