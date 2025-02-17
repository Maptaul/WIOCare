import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import React from "react";

const AboutUs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10  mt-8">
      <div>
        <h4 className="text-primary text-3xl font-medium flex items-center gap-2">
          <span className="text-42xl">⚕️</span> About Us
        </h4>
        <h1 className="text-6xl font-bold mt-2">
          Professionals dedicated to your health
        </h1>
        <p className="text-gray-600 text-2xl mt-4">
          Our team of skilled professionals is committed to <br /> providing
          personalized, compassionate care.
        </p>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <div>
              <img
                src="/src//assets/icon (3).png"
                alt=""
                className="rounded-md w-32 h-32 hover:scale-110 hover:shadow-md"
              />
            </div>
            <div>
              <h3 className="font-semibold text-2xl">Patient-Centered Care</h3>
              <p className="text-gray-500 text-xl">
                Putting you at the heart of everything we do.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img
                src="/src//assets/icon (1).png"
                alt=""
                className="rounded-md w-32 h-32 hover:scale-110 hover:shadow-md"
              />
            </div>
            <div>
              <h3 className="font-semibold text-2xl">Specialist Doctors</h3>
              <p className="text-gray-500 text-xl">
                Expert care from specialized professionals.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img
                src="/src//assets/icon (2).png"
                alt=""
                className="rounded-md w-32 h-32 hover:scale-110 hover:shadow-md"
              />
            </div>
            <div>
              <h3 className="font-semibold text-2xl">24 Hours Service</h3>
              <p className="text-gray-500 text-xl">
                We are here for you anytime you need.
              </p>
            </div>
          </div>
        </div>
        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark">
          View More About Us
        </button>
      </div>
      <div className="relative">
        <img
          src="/src/assets/ban (2).jpg"
          alt="Healthcare"
          className="rounded-xl h-[800px] w-[600px] shadow-lg"
        />
        <motion.div
          className="absolute top-5 -left-10 bg-white p-2 rounded-xl shadow-md"
          animate={{ x: [50, 5, 50] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <img
            src="/src/assets/ban (1).jpg"
            alt="Video Call"
            className="rounded-lg h-[300px] w-[300px]"
          />
          <p className="text-center text-white bg-primary mt-2 p-1 rounded-b-xl">
            VIDEO CALL SUPPORT
          </p>
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 bg-primary text-white p-4 rounded-xl flex items-center gap-4"
          animate={{ x: [50, 100, 50] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div className="space-y-5 sm:text-sm md:text-xl p-2">
            <h4 className="font-semibold">Opening Hours</h4>
            <p>Mon-Fri: 09:30 - 07:30</p>
            <p>Saturday: 10:30 - 5:00</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="top">
            <Clock className="" size={80} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
