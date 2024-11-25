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
import { IMAGE_BOOK_URL } from "@/config/env";

const MyGallery = ({ image, images }) => {
  image = image || "";
  images = images || [];
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
    <div className="max-w-[500px] mx-auto flex flex-col  gap-4">
      <a
        href={IMAGE_BOOK_URL + image}
        className="glightbox"
        data-gallery="gallery"
      >
        <Image
          width={600}
          height={600}
          className="w-full transition-transform duration-500 rounded-md cursor-pointer hover:scale-105"
          src={IMAGE_BOOK_URL + image}
          alt="Book Cover"
        />
      </a>
      {images?.length > 0 && (
        <Carousel>
          <CarouselContent>
            {images?.map((src, index) => (
              <CarouselItem className="basis-1/4" key={index}>
                <a href={IMAGE_BOOK_URL + src} className="glightbox" data-gallery="gallery">
                  <Image
                    width={50}
                    height={50}
                    className="w-full aspect-[1/1] hover:scale-95 transition-transform duration-500 ease-in-out object-contain p-0.5 rounded-md cursor-pointer"
                    src={IMAGE_BOOK_URL + src}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <MyCarouselButton />
        </Carousel>
      )}
    </div>
  );
};

export default MyGallery;
