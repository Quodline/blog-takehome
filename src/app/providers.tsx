'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {PropsWithChildren, useState} from 'react'

export default function Providers(props: PropsWithChildren) {
    /**
     * Singleton QueryClient to wrap the entire app
     */
    const [client] = useState(new QueryClient())

    return (
        <QueryClientProvider client={client}>
            {props.children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}
