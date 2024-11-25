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

const ProductDetailsPage = ({ params }) => {
  // Unwrap the params Promise using React.use()
  const [id, setId] = useState(null); // Updated state for `id`

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params; // Resolve the promise
      setId(resolvedParams.id); // Set the id after resolving
    };
    resolveParams();
  }, [params]); // Dependency on `params`

  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/${id}`
        );
        const data = await res.json();
        setProductDetails(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  //   console.log(productDetails);

  //All products
  useEffect(() => {
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
    fetchProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mb-[147px]">
      <p>Product Details Page</p>

      <div>
        <Container>
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
        </Container>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
