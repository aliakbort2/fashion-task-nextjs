"use client";
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import ArrivalsCard from "../card/ArrivalsCard";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Arrivals = () => {
  const [arrivals, setArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/get-all`
        );
        const data = await res.json();
        setArrivals(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredArrivals = arrivals.filter(
    (product) => product.category && product.category === "arrivals"
  );

  //console.log(filteredProducts);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-8 md:mt-10 mb-8 md:mb-12">
      <Container>
        {/* top part */}
        <div className="relative flex justify-between items-center mb-4 md:mb-6">
          <div>
            <h5 className="text-base md:text-[19px] mb-1 text-primary">
              FEATURED PRODUCT
            </h5>
            <h4 className="text-[19px] md:text-[28px] font-bold">
              New Arrivals
            </h4>
          </div>
          <div>
            <div className="button-next-slide absolute bottom-2 right-0 z-10  text-white grid place-items-center cursor-pointer">
              <p className="button-next-slide border-2 border-primary rounded-full">
                <LiaLongArrowAltRightSolid className="text-primary text-2xl" />
              </p>
            </div>
            <div className="button-prev-slide absolute z-10 bottom-2 right-8 text-white grid place-items-center cursor-pointer">
              <p className="button-prev-slid border-2 border-primary rounded-full">
                <LiaLongArrowAltLeftSolid className="text-primary text-2xl" />
              </p>
            </div>
          </div>
        </div>

        {/* Show All Products */}
        <Swiper
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          loop={true}
          modules={[Navigation]}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 1, // Small devices: Show 1 product per slide
            },
            1024: {
              slidesPerView: 1, // Large devices: Use grid for 8 products per slide
            },
          }}
          className="mySwiper"
        >
          {/* Small Devices: Show 1 product per slide */}
          {filteredArrivals.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="lg:hidden">
                <ArrivalsCard product={product} />
              </div>

              {/* Large Devices: Show 8 products per row */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {filteredArrivals.slice(index, index + 4).map((item, idx) => (
                    <ArrivalsCard key={idx} product={item} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="bg-primary text-white py-2 mt-6 px-6 rounded-lg flex justify-center mx-auto">
          See more
        </button>
      </Container>
    </div>
  );
};

export default Arrivals;
