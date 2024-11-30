"use client";
import ArrivalsCard from "@/components/card/ArrivalsCard";
import Container from "@/components/ui/Container";
import React, { useEffect, useState } from "react";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

const ProductDetailsPage = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});

  const loadData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/${params.id}`
      );
      setProductDetails(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching product details:", error);
      setIsLoading(false);
    }
  };

  console.log(productDetails);

  //All products
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/get-all`
      );
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    fetchProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mb-[147px]">
      <Container>
        <p className="font-semibold mt-4 md:mt-8 mb-4 md:mb-6">
          Feature Product /{" "}
          <span className="text-primary">New {productDetails?.category}</span>
        </p>

        {/* swiper and details */}
        <div className="md:flex mt-10">
          <div className="border w-full p-5"></div>
          <div className="border w-full p-5">
            <button className="bg-primary text-white px-4 py-2 rounded mb-2 md:mb-4">
              New {productDetails?.category}
            </button>
            <h5 className="font-semibold">{productDetails?.title}</h5>
          </div>
        </div>

        <div>
          {/* top part */}
          <div className="relative flex justify-between items-center mb-4 md:mb-6">
            <div>
              <h4 className="text-[19px] md:text-[28px] font-bold">
                Related Products
              </h4>
            </div>
            <div className="">
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
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            {/* Small Devices: Show 1 product per slide */}
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="lg:hidden">
                  <ArrivalsCard product={product} />
                </div>

                {/* Large Devices: Show 8 products per row */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.slice(index, index + 4).map((product, idx) => (
                      <ArrivalsCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="bg-primary text-white py-2 mt-6 px-6 md:px-0 md:w-full rounded-lg flex justify-center mx-auto">
            See more
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
