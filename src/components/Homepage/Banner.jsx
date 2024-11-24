import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import Container from "../ui/Container";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      {/* banner hero */}
      <div className="bg-hero-pattern bg-cover bg-center h-[350px] md:h-[500px] m-0 p-0">
        <div className="flex justify-center items-center h-full">
          <div>
            <h1 className="text-[23px] md:text-5xl font-bold text-white mb-2 text-center">
              Elevate Your Everyday Style
            </h1>
            <p className="text-[13px] md:text-[19px] text-[#F5F3FF] mb-6 text-center">
              Discover the Latest Trends in Sustainable Fashion
            </p>
            <div className="flex justify-center gap-0.5">
              <button className="bg-[#8F71E1] text-[#F4F8FF] py-[11.5px] px-[30.5px] rounded-full text-[19px]">
                Shop Now
              </button>
              <button className="bg-[#8F71E1] text-[#F4F8FF] h-12 w-12 rounded-full flex justify-center items-center">
                <LiaLongArrowAltUpSolid className="rotate-45 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* banner down part */}
      <div className="bg-hero-option bg-center bg-cover md:bg-auto">
        <div className="h-[236px] md:h-[82px] flex items-center">
          <Container>
            <div className="md:flex justify-between">
              {/* part-1 */}
              <div className="flex gap-4">
                <Image
                  src={"/assets/icons/truck-delivery.png"}
                  height={36}
                  width={36}
                  alt="icon"
                  className="h-8 w-8 md:h-9 md:w-9"
                />
                <div className="text-white">
                  <h5 className="text-base md:text-[19px] font-semibold mb-2">
                    FREE SHIPPING
                  </h5>
                  <p className="text-[13px]">
                    BUY BDT 3000+ & GET FREE DELIVERY
                  </p>
                </div>
              </div>
              {/* part-2 */}
              <div className="flex gap-4 my-4 md:my-0">
                <Image
                  src={"/assets/icons/exchange.png"}
                  height={36}
                  width={36}
                  alt="icon"
                  className="h-8 w-8 md:h-9 md:w-9"
                />
                <div className="text-white">
                  <h5 className="text-base md:text-[19px] font-semibold mb-2">
                    7 DAYS EXCHANGE
                  </h5>
                  <p className="text-[13px]">
                    EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
                  </p>
                </div>
              </div>
              {/* part-3 */}
              <div className="flex gap-4">
                <Image
                  src={"/assets/icons/payment.png"}
                  height={36}
                  width={36}
                  alt="icon"
                  className="h-8 w-8 md:h-9 md:w-9"
                />
                <div className="text-white">
                  <h5 className="text-base md:text-[19px] font-semibold mb-2">
                    100% PAYMENT SECURE
                  </h5>
                  <p className="text-[13px]">
                    CASH ON DELIVERY AND SECURED ONLINE PAYMENT
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
