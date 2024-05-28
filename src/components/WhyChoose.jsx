import Home from "../assets/icons/home.png";
import Check from "../assets/icons/check.png";
import Earth from "../assets/icons/earth.png";

const WhyChoose = () => {
  return (
    <div className="bg-[#f7f9fc] my-10 p-3 py-10 ">
      <div className="text-center mb-12">
        <p className="text-3xl font-semibold">Why Choose Save Max?</p>
        <p className="text-style  ">
          {" "}
          We make your Real Estate dreams come true! Get hassle-free deals at
          the best prices.
        </p>
      </div>
      <div className="flex justify-evenly flex-wrap gap-3 md:gap-10">
        <div className="flex flex-col text-center w-80 items-center">
          <div className="border-4 flex justify-center items-center rounded-full border-white shadow-md h-28 w-28 bg-gray-50 relative">
            <p className="bg-[#f33066] text-white absolute top-0 px-2 py-[5px] rounded-full right-0">01</p>

            <img  className='w-8' src={Home} alt="..." />
          </div>
          <div>
            <p className="font-semibold">Only Handpicked Verified Properties</p>
            <p>RERA registered Properties from the Top Builders</p>
          </div>
        </div>
        <div className="flex flex-col text-center w-80 items-center">
          <div className="border-4 flex justify-center items-center rounded-full border-white shadow-md h-28 w-28 bg-gray-50 relative">
            <p className="bg-[#32b44a] text-white absolute top-0 px-2 py-[5px] rounded-full right-0">01</p>

            <img  className='w-8' src={Check} alt="..." />
          </div>
          <div>
            <p className="font-semibold">Honesty, Integrity and Trust</p>
            <p>Our HIT formula for fully verified hassle-free Real Estate.</p>
          </div>
        </div>
        <div className="flex flex-col text-center w-80 items-center">
          <div className="border-4 flex justify-center items-center rounded-full border-white shadow-md h-28 w-28 bg-gray-50 relative">
            <p className="bg-[#2a4fa3] text-white absolute top-0 px-2 py-[5px] rounded-full right-0">01</p>

            <img  className='w-8' src={Earth} alt="..." />
          </div>
          <div>
            <p className="font-semibold">International Investments</p>
            <p>Choose Premium Indian and International properties from leading developers.</p>
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default WhyChoose;
