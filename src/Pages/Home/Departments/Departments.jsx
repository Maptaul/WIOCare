import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaBone,
  FaBrain,
  FaEarListen,
  FaEye,
  FaHeart,
  FaLungs,
} from "react-icons/fa6";

const Departments = () => {
  return (
    <section className="py-10 text-center ">
      <h2 className="text-5xl font-bold mb-8 text-blue-900 relative">
        OUR DEPARTMENTS
      </h2>
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex items-center  gap-10">
          <div className="flex flex-col items-center p-4">
            <FaBrain size={100} className="text-gray-500" />
            <p className="mt-2 text-xl text-gray-500">Neurology</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <FaEye size={100} className="text-gray-500" />
            <p className="mt-2 text-xl text-gray-500">Eye care</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <FaLungs size={100} className="text-gray-500" />
            <p className="mt-2 text-xl text-gray-500">Cardiac care</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <FaHeart size={100} className="text-gray-500" />
            <p className="mt-2 text-xl text-gray-500">Heart care</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <FaBone size={100} className="text-gray-500" />
            <p className="mt-2 text-xl text-gray-500">Osteoporosis</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <FaEarListen size={100} className="text-gray-500" />
            <p className="mt-2 text-xl text-gray-500">ENT</p>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default Departments;
