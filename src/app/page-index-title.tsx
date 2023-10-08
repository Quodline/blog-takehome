import {useCallback} from 'react'

interface Props {
    page: number
    limit: number
    total: number
}

export default function PageIndexTitle({page, limit, total}: Props) {
    const pageIndexString = useCallback(() => {
        const startIndex = (page-1) * limit
        const endIndex = Math.min(total, startIndex+limit)

        return `Showing ${startIndex+1} to ${endIndex} of ${total} items`
    }, [page, limit, total])

    return (
        <h2 className="font-semibold text-2xl">{pageIndexString()}</h2>
    )
}
