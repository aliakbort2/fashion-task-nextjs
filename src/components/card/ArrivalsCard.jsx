import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArrivalsCard = ({ product }) => {
  const { _id, image, title, price } = product || {};
  return (
    <div className="bg-white p-2 rounded-2xl hover:shadow-md hover:tra">
      <div className="h-[260px] bg-[#F6F5FD] rounded-lg mb-4 flex justify-center items-center relative">
        {image?.[0] && (
          <Image
            src={image[0]}
            width={100}
            height={100}
            alt={title || "product image"}
          />
        )}
      </div>
      <div>
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

export default ArrivalsCard;
