import { ICat } from '@/interfaces/cat.interface';
import { getCats } from '@/services/getCats';
import Image from 'next/image';
import React from 'react';

//INTERFACE
interface CatPageProps {
    params: Promise<{ id: string }>;
}

//STATIC
export async function generateStaticParams() {
    const cats: ICat[] = await getCats();

    return cats.map((cat: ICat) => ({
        id: cat.id.toString()
    }));
}

//FETCHING
const fetchCat = async (id: string) => {
    const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
    return res.json();
};

export default async function CatPage({ params }: CatPageProps) {
    const { id } = await params;
    const cat: ICat = await fetchCat(id);
    
    return (
        <div key={cat.id} className="w-56 h-64 relative m-2">
            <Image
                src={cat.url}
                alt={cat.url}
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={true}
            />
        </div>
    );
}