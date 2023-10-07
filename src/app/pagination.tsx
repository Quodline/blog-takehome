import Link from 'next/link'
import cn from 'classnames'
import {useCallback} from 'react'

interface Props {
    total: number
    limit: number
    page: number
}

export default function Pagination({total, limit, page}: Props) {
    const totalPages = useCallback(() => {
        return Math.ceil(total / limit)
    }, [total, limit])

    return (
        <div className="flex space-x-2 overflow-x-auto">
            {Array(totalPages()).fill(0).map((n, idx) => (
                <Link key={idx + 1}
                      href={`/?page=${idx + 1}`}
                      className={cn("btn btn-primary my-1 w-12 font-bold", {
                          'btn-accent': page === idx + 1
                      })}>{idx + 1}</Link>
            ))}
        </div>
    )
}