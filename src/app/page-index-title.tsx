import {useCallback} from 'react'

interface Props {
    page: number
    limit: number
    total: number
}

export default function PageIndexTitle({page, limit, total}: Props) {
    const pageIndexString = useCallback(() => {
        const startIndex = page * limit
        return `Showing ${startIndex + 1} to ${startIndex + limit} of ${total} items`
    }, [page, limit, total])

    return (
        <h2 className="font-semibold text-2xl">{pageIndexString()}</h2>
    )
}
