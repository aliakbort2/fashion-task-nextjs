"use client";
import React, { useEffect, useState } from "react";
import {
  LiaLongArrowAltRightSolid,
  LiaLongArrowAltLeftSolid,
} from "react-icons/lia";
import Container from "../ui/Container";
import ProductCard from "../card/ProductCard";

const BigDeal = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* top part */}
      <Container>
        <div className="flex justify-between items-center mt-16 mb-4 md:mb-6">
          <div>
            <h5 className="text-base md:text-[19px] mb-1 text-primary">
              SUMMER
            </h5>
            <h4 className="text-[19px] md:text-[28px] font-bold">Big DEAL</h4>
          </div>
          <div className="flex gap-5">
            <p className="border-2 border-primary rounded-full">
              <LiaLongArrowAltRightSolid className="text-primary text-2xl" />
            </p>
            <p className="border-2 border-primary rounded-full">
              <LiaLongArrowAltLeftSolid className="text-primary text-2xl" />
            </p>
          </div>
        </div>

        {/* Show All Products */}
        <div className="grid grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BigDeal;
