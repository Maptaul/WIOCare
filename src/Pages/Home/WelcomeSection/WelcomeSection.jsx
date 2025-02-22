import { motion } from "framer-motion";
import React from "react";
import { FaBalanceScale, FaClipboardList, FaStethoscope } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <section className="text-center py-16 ">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to <span className="text-black">WIO</span>
        <span className="text-blue-500">CARE</span>
        <span className="text-orange-500">AGENCY</span>
      </motion.h1>
      <motion.p
        className="text-gray-500 text-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Our medical specialists care about you & your family’s health
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: (
              <FaStethoscope className="text-blue-500 text-5xl mx-auto mb-4" />
            ),
            title: "HealthCare Professionals",
          },
          {
            icon: (
              <FaBalanceScale className="text-blue-500 text-5xl mx-auto mb-4" />
            ),
            title: "Medical Excellence",
          },
          {
            icon: (
              <FaClipboardList className="text-blue-500 text-5xl mx-auto mb-4" />
            ),
            title: "Latest Technologies",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="text-center hover:bg-blue-200 hover:rounded-lg py-4 space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {item.icon}
            <h3 className="font-semibold text-xl text-gray-800">
              {item.title}
            </h3>
            <div className="text-blue-500 text-xl">--⚡--</div>
            <p className="text-gray-500 max-w-xs mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              sequi quas voluptatibus maxime dolorum quia, debitis libero totam
              autem labore.
            </p>
            <button className="btn btn-outline btn-primary rounded-full px-6 py-2 mt-4">
              LEARN MORE
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WelcomeSection;
