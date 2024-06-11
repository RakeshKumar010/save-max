import React, { useContext } from "react";
import { data } from "../data";
import { FaBed, FaCheckCircle } from "react-icons/fa";
import { TbTextResize } from "react-icons/tb";
import { MyContext } from "../App";

const NewProject = () => {
  const { setPopUpShow } = useContext(MyContext);
  return (
    <div className="">
      <div className="text-center my-12">
        <p className="text-3xl font-semibold">New Projects in Pune</p>
        <p className="text-style">Handpicked projects for you.</p>
      </div>
      <div className="flex justify-center gap-10 flex-wrap px-3">
        {data.map((value) => {
          return (
            <div className="shadow-xl rounded-lg md:w-96 w-full">
              <div
                onClick={() => {
                  if (value.link == null) {
                    setPopUpShow(true);
                  } else {
                    window.open(value.link, "_blank");
                  }
                }}
                style={{
                  background: `url(${value.img}) center`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  boxShadow: "0 -50px 20px #21212db8 inset",
                }}
                className="md:w-96 w-full h-52 p-3 flex flex-col justify-between  rounded-t-lg"
              >
                <div className="flex justify-end">
                  <p className="bg-white text-black p-1 px-2 text-sm rounded-full border-[3px] border-gray-300/80">
                    {value.launch}
                  </p>
                </div>
                <div className="flex justify-between items-center text-white">
                  <p className="">{value.price}</p>
                  <div className="flex items-center bg-indigo-700/50 p-[2px] rounded-full px-4 gap-1  border-[3px] border-gray-300/80">
                    <FaCheckCircle />
                    <p>Rera</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="p-3">
                  <p className="text-blue-500 font-semibold">{value.title}</p>
                  <p>{value.location}</p>
                </div>
                <div className="flex gap-10 p-3 border-t text-gray-400">
                  <div className="flex items-center gap-2 ">
                    <FaBed className="text-xl" />
                    {value.size}
                  </div>
                  <div className="flex items-center gap-2 ">
                    <TbTextResize className="text-lg" /> {value.sqrt}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProject;
