"use client";
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import "./MenCollection.css";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Button from "../ui/Button";

const MenCollection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const res = await fetch("/menCollection.json");
        const data = await res.json();
        setSlides(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    loadSlides();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Swiper
        className="relative testimonial-slide"
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination]}
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide._id}>
            <Container>
              <div className="md:flex gap-10">
                {/* Image */}
                <div className="md:flex-1 relative">
                  <div className="bg-[#EEECFB] h-[302.82px] md:h-[481px] relative z-0"></div>
                  <Image
                    src={slide.image}
                    height={566}
                    width={468}
                    alt="men collection image"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                  />
                </div>

                {/* Content */}
                <div className="md:flex-1 mt-[8px] md:mt-0 w-full">
                  <div className="flex items-center justify-center h-full w-full">
                    <div>
                      <h2 className="text-[23px] md:text-5xl font-semibold mb-4 md:mb-6">
                        {slide.title}
                      </h2>
                      <Button />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenCollection;
