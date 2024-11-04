"use client"

import { ICat } from "@/interfaces/cat.interface"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function CatsPage() {
    const [cats, setCats] = useState<ICat[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=20&api_key=${process.env.NEXT_PUBLIC_CAT_API}`);
                const data = await res.json();
                setCats(data);
            } catch (error) {
                console.error("Error fetching cats:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchCats();
    }, []);


    return (
        <div className="flex w-[800px] m-auto flex-wrap">
            {loading ? (
                <p>Loading...</p>
            ) : (
                cats.map(({ id, url }) => (
                    <div key={id} className="w-56 h-64 relative m-2">
                        <Image
                            src={url}
                            alt="Cat Image"
                            fill={true}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={true}
                        />
                    </div>
                ))
            )}
        </div>
    )
}