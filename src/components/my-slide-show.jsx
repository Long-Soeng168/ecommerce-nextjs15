import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const MySlideShow = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
                <Image className="w-full aspect-[21/6] object-cover" width={1050} height={300} src="/images/slides/image0.png" alt="" />
          </CarouselItem>
          <CarouselItem>
                <Image className="w-full aspect-[21/6] object-cover" width={1050} height={300} src="/images/slides/image2.webp" alt="" />
          </CarouselItem>
          <CarouselItem>
                <Image className="w-full aspect-[21/6] object-cover" width={1050} height={300} src="/images/slides/image3.webp" alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Carousel className='mt-2 lg:mt-4'>
        <CarouselContent>
          <CarouselItem className='pl-2 lg:pl-4 basis-1/2 lg:basis-1/3'>
                <Image className="w-full aspect-[16/9] object-cover" width={1050} height={300} src="/images/slides/image8.png" alt="" />
          </CarouselItem>
          <CarouselItem className='pl-2 lg:pl-4 basis-1/2 lg:basis-1/3'>
                <Image className="w-full aspect-[16/9] object-cover" width={1050} height={300} src="/images/slides/image4.png" alt="" />
          </CarouselItem>
          <CarouselItem className='pl-2 lg:pl-4 basis-1/2 lg:basis-1/3'>
                <Image className="w-full aspect-[16/9] object-cover" width={1050} height={300} src="/images/slides/image9.png" alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default MySlideShow;
