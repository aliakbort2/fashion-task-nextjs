"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
  const { _id, image, title, price, rating, discount, category } =
    product || {};

  return (
    <div className="bg-white p-2 rounded-2xl hover:shadow-md hover:tra">
      <div className="h-[260px] bg-[#F6F5FD] rounded-lg mb-4 flex justify-center items-center relative">
        {image?.[0] && (
          <Image
            src={image[0]}
            width={100}
            height={100}
            alt={title || "product image"}
            // className="h-full w-full"
          />
        )}

        <span className="absolute top-0 right-4 bg-primary text-white text-[13px] font-bold px-[7px] pb-[7px] pt-[2px] rounded-b-full text-center">
          Up <br /> to <br /> {discount}
        </span>
      </div>
      <div>
        <h2 className="mb-2 flex items-center pa-1">
          <Rating
            emptySymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[13.33px] h-[13.33px] text-[#FFC700]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            }
            fullSymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[13.33px] h-[13.33px] text-[#FFC700]"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            }
            initialRating={rating}
            readonly
          />
          <span className="text-sm">(50)</span>
        </h2>

        <div className="flex items-center justify-between mb-4">
          <p>{title}</p>
          <h4 className="text-[19px] font-semibold">BDT {Math.round(price)}</h4>
        </div>
        <Link href={`/products/${_id}`}>
          <button className="border border-primary text-primary py-[9.5px] w-full rounded hover:bg-primary hover:text-white hover:transition-all">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
