"use client";

import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MyCarouselButton from "./my-carousel-button";

const MyGallery = () => {
  const images = [
    "/images/books/book1.png",
    "/images/books/book2.png",
    "/images/books/book3.png",
    "/images/books/book4.png",
    "/images/books/book2.png",
    "/images/books/book3.png",
  ];

  useEffect(() => {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: false,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="max-w-[500px] mx-auto flex flex-col gap-4">
      <a href={images[0]} className="glightbox" data-gallery="gallery">
        <Image
          width={600}
          height={600}
          className="w-full transition-transform duration-500 rounded-md cursor-pointer hover:scale-105"
          src={images[0]}
          alt="Book Cover"
        />
      </a>

      <Carousel>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem className="basis-1/4" key={index}>
              <a href={src} className="glightbox" data-gallery="gallery">
                <Image
                  width={50}
                  height={50}
                  className="w-full aspect-[1/1] hover:scale-110 transition-transform duration-500 ease-in-out object-contain p-0.5 rounded-md cursor-pointer"
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <MyCarouselButton />
      </Carousel>
    </div>
  );
};

export default MyGallery;
