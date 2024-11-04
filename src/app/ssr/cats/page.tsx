import { ICat } from '@/interfaces/cat.interface'
import { getCats } from '@/services/getCats'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const revalidate = 30

export default async function CatsPage() {
    const cats: ICat[] = await getCats()

    return (
        <div className="flex w-[800px] m-auto flex-wrap">
        {cats.map(({id, url}) => (
            <Link href={`/ssr/cats/${id}`} key={id}>
                <div className="w-56 h-64 relative m-2">
                    <Image
                        src={url}
                        alt={url}
                        fill={true}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={true}
                    />
                </div>
            </Link>
        ))}
    </div>
    )
}
