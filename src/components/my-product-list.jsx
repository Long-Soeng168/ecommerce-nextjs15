// src/Products.js
import React from 'react';
import ProductCard from './ui/my-product-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

// Sample product data
const products = [
    {
        id: 1,
        title: 'Premium High-Quality',
        description: 'Experience superior sound quality and block out distractions with these state-of-the-art wireless earbuds.',
        price: '$59999999999.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
    {
        id: 2,
        title: 'Sleek and Stylish Smartwatch for Comprehensive Fitness Tracking and Instant Notifications',
        description: 'Stay connected and monitor your health metrics effortlessly with this elegant smartwatch designed for modern lifestyles.',
        price: '$149.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
    {
        id: 3,
        title: 'Compact and Portable Bluetooth Speaker for Exceptional Sound Quality Anywhere You Go',
        description: 'Take your music with you on all your adventures with this lightweight Bluetooth speaker that delivers powerful sound.',
        price: '$79.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
    {
        id: 4,
        title: 'State-of-the-Art 4K Ultra HD TV with Smart Features and Stunning Picture Quality',
        description: 'Transform your living room into a cinematic experience with this impressive 4K Ultra HD TV, featuring the latest smart technology.',
        price: '$499.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
    {
        id: 5,
        title: 'High-Precision Gaming Mouse Designed for Competitive Play with Customizable Features',
        description: 'Elevate your gaming performance with this ergonomic gaming mouse, engineered for speed and accuracy.',
        price: '$39.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
    {
        id: 6,
        title: 'Versatile 2-in-1 Laptop with Touchscreen and Ultra-Fast Performance',
        description: 'Experience the best of both worlds with this powerful 2-in-1 laptop that combines productivity and entertainment.',
        price: '$899.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
    {
        id: 7,
        title: 'All-Natural Organic Skincare Set for Radiant and Healthy Skin',
        description: 'Pamper your skin with this luxurious skincare set made from 100% organic ingredients for a natural glow.',
        price: '$89.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
    {
        id: 8,
        title: 'High-Quality DSLR Camera for Professional Photography and Videography',
        description: 'Capture stunning images and videos with this high-performance DSLR camera featuring advanced settings and features.',
        price: '$1,299.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
    {
        id: 9,
        title: 'Durable and Lightweight Hiking Backpack with Multiple Compartments',
        description: 'Embark on your next adventure with this rugged hiking backpack, designed for comfort and convenience on the trail.',
        price: '$59.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
    {
        id: 10,
        title: 'Elegant Bluetooth Headphones with Superior Sound Quality and Long Battery Life',
        description: 'Enjoy your music wirelessly with these stylish Bluetooth headphones that provide exceptional audio performance.',
        price: '$79.99',
        image: '/images/products/book4.png', // Your specified image URL
    },
];




const MyProductsList = () => {
    return (
        <>
            <Carousel>
                <CarouselContent>
                    {products.map(product => (
                        <CarouselItem className="basis-1/2 md:basis-1/3 xl:basis-1/5" key={product.id}>
                            <ProductCard product={product}  />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
};

export default MyProductsList;
