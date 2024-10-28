import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const partners = [
    {
      id: 1,
      name: "ABC Corp",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
    {
      id: 2,
      name: "XYZ Inc.",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
    {
      id: 3,
      name: "Tech Innovators",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
    {
      id: 4,
      name: "Green Solutions",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
    {
      id: 5,
      name: "Creative Minds",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
    {
      id: 6,
      name: "Digital Dreams",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
    {
      id: 7,
      name: "Future Tech",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
    {
      id: 8,
      name: "Eco Warriors",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
    {
      id: 9,
      name: "Visionary Designs",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
    {
      id: 10,
      name: "Global Ventures",
      image: "/images/logos/logo1.png", // Placeholder logo
    },
  ];
  

const MyPartnerList = () => {
  return (
    <Carousel>
      <CarouselContent className="justify-center">
        {partners.map((partner) => (
          <CarouselItem className="ml-8 basis-1/1" key={partner.id}>
            <div
              key={partner.id}
              className="flex flex-col items-center transition-all duration-500 rounded-lg cursor-pointer hover:scale-105"
            >
              <Image
                width={100}
                height={100}
                className="object-cover rounded-md aspect-square"
                src={partner.image}
                alt={partner.name}
              />
              {/* <h3 className="mb-1 text-xl font-semibold text-gray-800 dark:text-gray-100">
                {partner.name}
              </h3> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MyPartnerList;
