import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoCall, IoCallOutline } from "react-icons/io5";
import { PiNotebookLight } from "react-icons/pi";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const FooterContact = ({ name }) => {
  const phone = "7026038499";
  const message = `I'm interested in Save Max, Pune`;
  const encodedMessage = encodeURIComponent(message);
  const link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  return (
    <>
      <div className="flex justify-between md:justify-around py-2  px-6 border-2 sticky bottom-0 right-0 left-0 bg-white lg:hidden">
        <a href={`tel:${phone}`} className="flex  flex-col w-16 items-center">
          <BsThreeDots className="text-2xl" />
          <p className="text-sm ">Menu</p>
        </a>
        <div
          className="flex  text-white gap-4 w-40 justify-center rounded-sm items-center bg-[#ed2127]"
          onClick={() => {
            setIsOpen(true);
            setHeading("Contact Us");
          }}
        >
            <a href="tel:+91-7026038499" className="flex items-center gap-4">
          <IoCall />
          <p>Call Now</p>
          </a>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col w-16 items-center"
        >
          <FaWhatsapp className="text-2xl" />
          <p className="text-sm ">WHATSAPP</p>
        </a>
      </div>
    </>
  );
};

export default FooterContact;
