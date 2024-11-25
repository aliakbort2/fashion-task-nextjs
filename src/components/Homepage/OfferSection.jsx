import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";

const OfferSection = () => {
  return (
    <Container>
      <div className="relative bg-[#EEECFB] h-[600px] md:h-[505px] md:flex py-5 md:py-0 px-5 md:px-16 mb-10">
        <div className="flex md:items-center h-full md:w-3/4">
          <div>
            <h4 className="text-2xl text-primary mb-2 italic md:font-normal md:font-mono">
              Big Deal
            </h4>
            <h2 className="text-[28px] md:text-5xl font-semibold mb-6">
              <span className="text-primary">30%</span> Off for New Customers
            </h2>
            <Button text={"justify-start"} />
          </div>
        </div>
        <div className="md:flex-grow absolute bottom-0 right-0">
          <Image
            src={"/assets/offer.png"}
            height={450}
            width={427}
            alt="offer image"
            className="w-[328px] md:w-[427px] h-[369px]  md:h-[495px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default OfferSection;
