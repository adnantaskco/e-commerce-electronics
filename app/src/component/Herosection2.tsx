"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import CountdownTimer from "./timer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin2() {
  const plugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
  });

  const banners = [
    {
      id: 1,
      image:
        "https://transcom-storage.s3.amazonaws.com/2eb459e3-036e-4c2f-ac2a-2a2039c4a351/ddd04b35-531a-4fe0-bc10-d4103d6bf2a6/images/ea05170d-3533-4f32-82a9-90e3a120dcb6",
    },
    {
      id: 2,
      image:
        "https://transcom-storage.s3.amazonaws.com/2eb459e3-036e-4c2f-ac2a-2a2039c4a351/ddd04b35-531a-4fe0-bc10-d4103d6bf2a6/images/ea05170d-3708-4359-b24a-f87b11d2d65d",
    },
    {
      id: 3,
      image:
        "https://transcom-storage.s3.amazonaws.com/2eb459e3-036e-4c2f-ac2a-2a2039c4a351/ddd04b35-531a-4fe0-bc10-d4103d6bf2a6/images/ea04050a-2c39-4a01-8ecf-2a18af24494d",
    },
    {
      id: 4,
      image:
        "https://transcom-storage.s3.amazonaws.com/2eb459e3-036e-4c2f-ac2a-2a2039c4a351/ddd04b35-531a-4fe0-bc10-d4103d6bf2a6/images/ea051104-3634-4fae-90ee-b6c8c9c7cac1",
    },
  ];

  return (
 <section className="w-full">
      <Carousel
        plugins={[plugin]}
        className="w-full"
        onMouseEnter={plugin.stop}
        onMouseLeave={plugin.reset}
      >
        <CarouselContent>
          {banners.map((item) => (
            <CarouselItem key={item.id} className="flex justify-center">
              
              {/* NO fixed height wrapper */}
              <div className="w-full">
                <Image
                  src={item.image}
                  alt="Hero Banner"
                  width={1920}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 z-10" />
        <CarouselNext className="right-4 z-10" />
      </Carousel>
    </section>
  );
}