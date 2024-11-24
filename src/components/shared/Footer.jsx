import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1D1D1D]">
        <Container>
          <div className="pt-5 pb-12 md:pt-16 md:pb-16">
            <div className="lg:flex gap-5 mb-4 lg:mb-[67px]">
              <div className="w-full">
                <Link href={"/"}>
                  <Image
                    src="/assets/footer-logo.png"
                    width={197}
                    height={49}
                    alt="footer Logo"
                    className="w-24 lg:w-[197px] h-6 lg:h-[49px]"
                  />
                </Link>
                <p className="text-white mt-4 lg:mt-[27px] w-[405px] text-[13px] lg:text-base">
                  Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                  Laboriosam unde quae qui quasi mollitia tenetur. Dicta
                  explicabo est consectetur maxime quos fugit velit assumenda
                  est.
                </p>
              </div>
              <div className="w-full text-white mt-6 lg:mt-0">
                <h3 className="text-[19px] lg:text-[23px] font-bold mb-2">
                  Sign Up For Our Newsletter!
                </h3>
                <p className="text-[13px] lg:text-base">
                  Get notified about updates and be the first to get early
                  access to new Podcast episodes.
                </p>
                <div className="mt-4 lg:mt-[30px] w-full flex items-center h-10 lg:h-[53px]">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full h-full rounded-l-lg pl-4 outline-none placeholder:text-[#1D1D1D]"
                  />
                  <button className="bg-primary h-full w-[101px] lg:w-[193px] rounded-r-lg text-[#F4F8FF] px-[13px] lg:px-0 py-[9.5px] lg:py-0">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              <div className="text-white">
                <h4 className="font-bold mb-2 lg:mb-4 text-[13px] lg:text-base">
                  Contact Us
                </h4>
                <p className="text-[13px] lg:text-base">support@we5ive.com</p>
              </div>
              <div className="text-white">
                <h4 className="font-bold mb-2 lg:mb-4 text-[13px] lg:text-base">
                  About Us
                </h4>
                <p className="text-[13px] lg:text-base">Contact Us</p>
              </div>
              <div className="text-white">
                <h4 className="font-bold mb-2 lg:mb-4 text-[13px] lg:text-base">
                  Privacy policy
                </h4>
                <p className="text-[13px] lg:text-base">Terms & Condition</p>
              </div>
              <div className="text-white">
                <h4 className="font-bold mb-2 lg:mb-4 text-[13px] lg:text-base">
                  Social Link
                </h4>
                <div className="flex gap-6">
                  <p className="bg-blue-700 h-6 w-6 rounded-full flex items-center justify-center">
                    <FaFacebookF />
                  </p>
                  <p className="bg-black h-6 w-6 rounded-full flex items-center justify-center">
                    <FaXTwitter />
                  </p>
                  <p className="bg-blue-500 h-6 w-6 rounded-full flex items-center justify-center">
                    <FaLinkedinIn />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <footer className="h-[58px] bg-primary flex justify-center items-center">
        <p className="text-white">© 2024 | We5ive</p>
      </footer>
    </div>
  );
};

export default Footer;
