import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import FooterLogo from "../assets/whiteLogo.png";
import Workeefy from "../assets/workeefy.png";
import { IoCall, IoLogoGooglePlaystore, IoMail } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#414658] ">
      <div className="px-10 lg:px-44 text-gray-400 text-sm py-8 flex  justify-center md:text-start text-center  md:justify-between md:flex-row flex-col gap-y-14">
        <div className="md:w-60 flex flex-col items-center md:items-start gap-4">
          <img src={FooterLogo} alt="..." className="w-40" />
          <p>
            Save Max Real Estate Brokerage Pvt. Ltd. 23rd Floor, M3M IFC <br />{" "}
            Sector 66, Gurugram, Haryana 122002
          </p>
          <div className="flex items-center gap-2">
            <IoCall className="text-[#00ba74]" />
            <p> +91 70260 38499</p>
          </div>
          <div className="flex items-center gap-2">
            <IoMail className="text-[#00ba74]" />
            <p> india@savemax.com</p>
          </div>
        </div>
        <div className="md:w-60 flex flex-col gap-4">
          <p className="font-bold text-white text-base">Discover</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="md:w-60 flex flex-col gap-4 items-center md:items-start">
          <p className="font-bold text-white text-base">Download Apps</p>
          <div className="flex gap-2 border border-gray-500 rounded-md px-4 pt-1 pb-[2px] w-44 ">
            <IoLogoGooglePlaystore className="text-2xl text-[#00ba74]" />
            <div>
              <p className="text-sm">Get it on</p>
              <p className="text-white font-semibold text-base">Google Play</p>
            </div>
          </div>
          <div className="flex gap-2 border border-gray-500 rounded-md px-4 pt-1 pb-[2px] w-44">
            <IoLogoGooglePlaystore className="text-2xl text-[#00ba74]" />
            <div>
              <p className="text-sm">Download on the</p>
              <p className="text-white font-semibold text-base"> App Store</p>
            </div>
          </div>
        </div>
        <div className="md:w-60 flex flex-col items-center  gap-4">
          <div className="flex text-base gap-1 text-white items-center">
            <RiGlobalLine />
            <p className="font-bold ">
              Our Trusted Partner
            </p>
          </div>
          <img src={Workeefy} alt="..." className="w-1/2" />
        </div>
      </div>

      <div className="flex items-center md:justify-between justify-center text-center flex-wrap py-1 px-10 lg:px-44  text-gray-400 bg-[#1b2132]">
        <p>SaveMax Rera: A08600036081</p>
        <p >MAHA Rera Website: https://maharera.mahaonline.gov.in</p>
        <div className="flex items-center gap-5 justify-center my-4">
          <FaFacebookF />
          <TfiInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
