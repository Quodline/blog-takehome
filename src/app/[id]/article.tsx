'use client'

import {Post} from '@/types/post'
import {useGetPost} from '@/hooks/usePost'
import Banner from '@/components/banner/banner'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Options from '@/app/[id]/options'
import {usePostComments} from '@/hooks/useComment'
import Link from 'next/link'

dayjs.extend(relativeTime)

export default function Article({id}: { id: Post['id'] }) {
    const {data: post} = useGetPost(id)
    const {data: comments} = usePostComments(id)

    return (
        <>
            <Banner options={<Options id={id} />}>{post?.text}</Banner>
            <article className="flex flex-col p-10">
                <section className="flex space-x-4 items-end my-4">
                    <img src={post?.owner.picture} alt="Profile picture" className="w-20 h-20 rounded-full" />
                    <div>
                        <div className="font-bold">
                            {post?.owner.firstName} {post?.owner.lastName} ({post?.owner.title})
                        </div>
                        <div>{dayjs(post?.publishDate).fromNow()}</div>
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row">
                    <div className="lg:basis-3/4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac turpis id erat semper aliquet. Donec nec velit vel diam placerat interdum. Sed in semper turpis, pulvinar posuere arcu. Aenean a mattis nulla. Phasellus vulputate velit a turpis accumsan, non sodales ipsum imperdiet. Proin sodales metus in iaculis scelerisque. Nam sed magna mi. Ut lobortis mollis mollis.</p>
                        <p>Suspendisse eget diam at erat bibendum elementum eu luctus odio. Curabitur mollis molestie ornare. Maecenas bibendum ligula arcu. Cras quis vulputate felis, id condimentum mauris. Quisque facilisis vel ex sed mollis. Vivamus gravida purus ut sem interdum gravida. In sollicitudin efficitur quam, interdum consequat orci facilisis id. Vivamus ut auctor eros, id fringilla sapien. Fusce rutrum magna quam, vitae faucibus sem rhoncus a. Phasellus eget orci a sem ultricies tincidunt sit amet a lorem.</p>
                        <p>Etiam maximus, metus sed hendrerit luctus, mauris eros sollicitudin diam, nec malesuada dui lacus quis est. Pellentesque feugiat, metus a condimentum aliquet, enim elit gravida arcu, et sagittis ligula neque eget magna. Nulla eget purus at eros congue maximus. Vivamus id nibh bibendum, hendrerit erat sed, volutpat tortor. Phasellus volutpat porta leo, eget posuere ligula venenatis sit amet. Pellentesque tempor cursus tellus, at elementum dolor. Donec facilisis auctor dolor, ac facilisis ex aliquam sed. Nunc vitae porta lorem.</p>
                        <p>Curabitur quam magna, finibus tempus vehicula ut, placerat at sapien. Quisque fermentum metus lacus, at eleifend mi feugiat ut. Maecenas leo nibh, placerat eget nulla non, iaculis aliquam ipsum. Duis posuere bibendum molestie. Aenean quis vehicula tortor, sit amet porta ipsum. Nullam placerat, neque id sollicitudin commodo, felis turpis luctus orci, sit amet egestas eros libero at libero. Praesent vulputate ligula mi, eu posuere lorem faucibus id. Maecenas tristique semper libero, non efficitur dolor porttitor sed.</p>
                        <p>In vehicula diam ac erat tempor, a vulputate erat ornare. Curabitur vitae libero mollis sapien dictum imperdiet. Proin vel lacinia nibh. Aenean porta quis magna eget dapibus. Etiam consequat quam vitae metus commodo, sed eleifend augue bibendum. Nunc porttitor ligula enim, non feugiat purus dictum sit amet. Sed vel lacinia felis. Curabitur vel metus sodales, fermentum metus ultrices, venenatis libero. Sed mauris tellus, sagittis in maximus malesuada, porta a metus. Pellentesque eget tortor suscipit, varius augue sit amet, aliquam nunc.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut pharetra enim. Ut pretium ex ex, sit amet convallis velit consectetur quis. Quisque vulputate mauris ac ipsum finibus, eget convallis dolor molestie. Aliquam erat volutpat. Quisque vel nunc id tortor scelerisque porttitor. Proin placerat turpis sit amet posuere finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut porta pellentesque elit ac lobortis. Nam libero odio, posuere ut luctus a, accumsan quis nisl.</p>
                        <p>Pellentesque non sapien vitae leo tincidunt tincidunt non id mauris. Nulla vel tempus nisi, vitae congue eros. Integer id imperdiet erat, et congue magna. Donec lacinia, nisl a luctus aliquet, nisl felis suscipit odio, ac accumsan magna nisi mollis velit. Ut aliquam dapibus nisi non porttitor. Pellentesque faucibus ipsum et odio efficitur, luctus condimentum libero rhoncus. Pellentesque non nibh faucibus, semper massa quis, rutrum nunc. Duis vitae vestibulum nunc. Mauris semper pulvinar dui ut fringilla. Quisque porta tellus sagittis magna rutrum, et porta dolor rutrum. Aliquam aliquet porttitor pharetra. Fusce sagittis consectetur mauris, sed scelerisque ipsum viverra in. Mauris venenatis pretium molestie. Vestibulum non venenatis libero, at tempus odio. Sed quis fringilla lectus.</p>
                        <p>Nunc at est mauris. Integer rhoncus interdum augue, id scelerisque arcu lobortis id. Nunc posuere sit amet nulla id dapibus. Suspendisse lacus diam, euismod et neque sit amet, efficitur consectetur augue. Proin in consequat mi. Pellentesque egestas imperdiet vestibulum. Fusce mollis lectus auctor ante laoreet porttitor. Aenean libero magna, pretium vel urna sit amet, vulputate suscipit lorem.</p>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vitae augue nec purus dignissim pharetra. Donec tristique mauris nec tellus mattis tincidunt. Cras tincidunt neque vitae mollis rhoncus. Aliquam ut cursus nibh, id rhoncus odio. Integer blandit ligula sed tempor tincidunt. Sed vulputate ultrices turpis ac commodo. Nam id tortor at leo aliquam posuere sed facilisis lacus. Mauris vitae massa vitae dolor placerat pharetra eget in dolor. Cras nec dolor vel tellus tincidunt euismod et ac tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent at ex lacus. Donec porta, mi at aliquam condimentum, leo est consequat nunc, ultricies porta justo enim nec orci. Maecenas dui massa, hendrerit in eros non, venenatis vehicula purus. Suspendisse et mauris aliquet, gravida lacus non, lacinia libero.</p>
                        <p>Phasellus et dapibus ante. Sed porta urna eget suscipit vestibulum. Curabitur sagittis id velit non laoreet. Maecenas eget nisi quis nunc venenatis aliquet. Nulla facilisi. Nunc maximus odio ut vulputate posuere. Vivamus blandit tellus ante, vitae pharetra risus feugiat sed. Vivamus tellus magna, vehicula sit amet mollis in, lacinia vel arcu. Nullam nisl ante, maximus ut volutpat et, sodales non diam. Aliquam ac tincidunt tortor, nec maximus enim. Pellentesque posuere laoreet felis, non molestie orci vestibulum eget.</p>
                        <p>Proin mollis placerat eleifend. Nam sed dolor lectus. Nullam in luctus ex, vitae vestibulum odio. Fusce nec diam in orci congue porttitor. Sed scelerisque semper lacus, vel fermentum massa volutpat a. Praesent sed magna a leo blandit pellentesque. Praesent tincidunt eget mauris eget sodales. Suspendisse potenti. Nunc scelerisque nunc at ultrices finibus.</p>
                        <p>Ut vel augue urna. Cras nunc nisl, lacinia et aliquam eget, facilisis eget erat. Sed nec consectetur lacus. Sed est sapien, vehicula eu nisi in, auctor rutrum arcu. Donec sit amet erat in massa facilisis laoreet pulvinar sit amet enim. Aliquam laoreet imperdiet nibh, pellentesque dapibus urna fermentum nec. Morbi ultricies tempus consequat. Maecenas sodales felis a congue consectetur. Praesent ante dui, pharetra ut diam molestie, commodo blandit mauris. Integer sollicitudin massa sed velit tristique elementum.</p>
                        <p>Nam porttitor nulla sit amet metus condimentum, ut semper magna commodo. Duis pretium nulla ac lacus cursus vehicula. Donec luctus magna lectus, a sagittis mi vestibulum a. Etiam nec pellentesque arcu, in eleifend nunc. Sed accumsan ac tortor ut luctus. Donec augue urna, pellentesque ut porta eget, molestie eget ipsum. Nunc lobortis justo vel massa vestibulum, eget ultricies orci dictum. Fusce ac eros ultrices, aliquam odio et, accumsan dui. Nullam auctor urna sit amet lorem suscipit convallis. Nullam sagittis neque dictum turpis consectetur bibendum. Duis faucibus tempus dignissim. Fusce accumsan molestie semper. In a magna nec lorem volutpat tempor. In odio tellus, viverra in nulla ac, sagittis congue augue. Cras a sem non arcu ultrices tempus non ac felis. Sed rutrum urna ac mauris egestas, a condimentum massa vulputate.</p>
                        <p>Duis pretium imperdiet magna eu commodo. Nulla lacinia non tortor eget viverra. Aenean vitae interdum lectus, eget convallis dolor. Maecenas vitae pretium velit, sed condimentum elit. Nulla eros eros, facilisis ac justo in, pellentesque vestibulum urna. Donec sed mi id metus rhoncus maximus nec id arcu. Morbi orci ligula, consequat at facilisis in, volutpat a sapien. Quisque congue, arcu in facilisis ornare, tortor lacus tincidunt arcu, ut pulvinar enim augue at velit. Quisque ac facilisis nisl. Nullam molestie auctor arcu in fermentum.</p>
                        <p>In dui ante, posuere ac laoreet ut, volutpat vel ex. Integer sed ultricies mauris, sed commodo leo. Cras aliquam gravida sollicitudin. Vivamus vel nisl ac orci efficitur consectetur in id est. Aliquam ut mauris mattis, consequat sem lobortis, interdum lorem. Duis enim velit, mollis et enim in, pharetra ultricies tellus. Sed blandit leo vitae venenatis laoreet. Etiam porta euismod enim, vitae rutrum est feugiat pretium. Donec in neque risus. Sed varius turpis a odio commodo, nec lacinia est ultricies.</p>
                        <p>Praesent urna nibh, scelerisque nec dolor quis, gravida ultricies mi. Donec iaculis tellus id leo tempor, ut pulvinar eros volutpat. Praesent a elit turpis. Phasellus quis lectus sed turpis ullamcorper sodales. Nunc et bibendum sapien. Duis sit amet justo ut massa commodo viverra. Quisque vulputate diam lacus, quis consequat purus sollicitudin ut. Morbi consequat leo leo, vel accumsan nunc suscipit sed. Suspendisse et odio et lacus blandit porttitor. Sed tincidunt pulvinar nulla et semper. Nam vel enim vitae mauris facilisis tempus. Integer at turpis rhoncus, posuere nulla quis, venenatis eros.</p>
                        <p>Nullam consequat nulla non imperdiet suscipit. Quisque eu metus faucibus, iaculis mi eget, vestibulum nunc. Vestibulum ac pulvinar tellus, in posuere massa. Nam ante nunc, convallis ut velit nec, faucibus finibus dui. Aliquam cursus, nibh dictum imperdiet hendrerit, quam eros dictum tellus, et dapibus lorem est sed nisi. Quisque non leo vitae urna hendrerit consequat convallis eu quam. Proin volutpat, ipsum sed consequat ornare, erat nibh pulvinar mauris, sed venenatis nulla massa eu elit. Aenean est dui, pretium eget mi sit amet, fringilla placerat dolor. Praesent non ipsum massa.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui quis dolor bibendum semper. Sed consectetur vel nunc vel volutpat. Sed congue tincidunt quam sollicitudin finibus. In ut suscipit massa. Duis dui sapien, auctor eu molestie vitae, molestie nec tellus. Cras id ullamcorper nisi. Vestibulum laoreet erat quis aliquet faucibus. Curabitur sed ligula egestas, laoreet augue quis, sollicitudin urna. Maecenas posuere in nibh vitae consequat. Fusce suscipit ante felis, quis mattis orci malesuada vel. Sed turpis lacus, luctus non lorem vitae, pellentesque convallis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum vitae orci quis euismod.</p>
                        <p>Mauris arcu lorem, suscipit vel aliquam et, porttitor sit amet augue. Donec quis sagittis ligula. Nulla eget accumsan mauris. Morbi gravida eget sem condimentum suscipit. Duis at lacinia velit, porttitor mattis libero. Donec lobortis elit est, sit amet facilisis velit finibus blandit. Nam egestas purus dolor, eget dignissim lacus tincidunt vel. Aenean a justo a velit feugiat elementum vel non dui. Sed a augue sit amet dolor facilisis gravida. Donec pulvinar leo diam, id consequat mauris cursus ac. Sed at commodo augue, sit amet lacinia mi. Donec id orci ultrices, placerat nisl a, ornare diam. Mauris sit amet justo a nibh laoreet condimentum in quis ipsum. Nunc consequat lacus ante, dignissim euismod dui vestibulum eget. Donec mollis ipsum at nulla tincidunt, at pulvinar purus imperdiet. Fusce iaculis felis orci, at elementum diam ultricies sed.</p>
                    </div>
                    <aside>
                        <h1 className="text-2xl font-bold">Comments</h1>
                        {comments?.data.map(comment => (
                            <div key={comment.id} className="card my-2 lg:w-96 bg-base-100 shadow-xl p-4">
                                <div className="flex space-x-4 items-end">
                                    <img src={comment.owner.picture}
                                         alt="Profile picture"
                                         className="w-16 h-16 rounded-full"/>
                                    <h2>{comment.message}</h2>
                                </div>
                            </div>
                        ))
                        }
                    </aside>
                </section>
            </article>
        </>
    )
}
