// src/ProductCard.js
import React from 'react';
import { Button } from './button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-lg p-2">
            <Image
                width={600}
                height={600}
                className="w-full aspect-square object-cover rounded-md mb-4"
                src={product.image}
                alt={product.title}
            />
            <h3 className="text-lg font-semibold line-clamp-2">{product.title}</h3>
            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <div className='flex justify-between items-center'>
                <p className="text-xl font-bold text-red-500">{product.price}</p>
                <span className='flex'>
                    <Star className='text-yellow-400 h-4 fill-yellow-400' />
                    <Star className='text-yellow-400 h-4 fill-yellow-400' />
                    <Star className='text-yellow-400 h-4 fill-yellow-400' />
                    <Star className='text-yellow-400 h-4 fill-yellow-400' />
                    <Star className='text-gray-400 h-4' />
                </span>
            </div>
            <div className='flex justify-between'>
                <Button variant='outline' size='icon' className='mt-2'>
                    <Heart />
                </Button>
                <Button className='mt-2'>
                    <ShoppingCart />
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
