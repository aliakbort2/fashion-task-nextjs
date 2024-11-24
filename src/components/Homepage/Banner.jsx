import { LiaLongArrowAltUpSolid } from "react-icons/lia";

const Banner = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-[350px] md:h-[500px]">
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
  );
};

export default Banner;
