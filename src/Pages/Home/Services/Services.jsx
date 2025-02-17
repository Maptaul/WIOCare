import { motion } from "framer-motion";
import React from "react";
import { FaHome } from "react-icons/fa";
import { TbEyeCancel, TbTransactionEuro } from "react-icons/tb";

const Services = () => {
  return (
    <section className="p-10 rounded-md text-center">
      <h4 className="text-primary text-3xl  font-medium mb-2 flex justify-center items-center gap-2">
        <span>🩺</span> Our Services
      </h4>
      <h1 className="text-4xl font-bold mb-6">
        Comprehensive services for your health
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-center">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1 * 0.2,
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 hover:bg-blue-400 p-2 rounded-full">
                <FaHome className="text-4xl" />
              </div>
              <h2 className="text-4xl font-semibold text-gray-800">Urology</h2>
            </div>
            <button className="text-gray-500 text-4xl hover:text-gray-900">
              →
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Our neurology department provides expert care for conditions
            affecting the brain, spine, and nervous system.
          </p>
          <figure className="rounded-xl overflow-hidden">
            <img
              src="/src/assets/docror (1).jpg"
              alt="Urology"
              className="w-full h-48 "
            />
          </figure>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1 * 0.2,
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 hover:bg-blue-400 p-2 rounded-full">
                <TbTransactionEuro className="text-4xl" />
              </div>
              <h2 className="text-4xl font-semibold text-gray-800">
                Neurology
              </h2>
            </div>
            <button className="text-gray-500 text-4xl hover:text-gray-900">
              →
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Special care focuses on providing tailored attention to address
            unique health needs, ensuring optimal well-being and comfort.
          </p>
          <figure className="rounded-xl overflow-hidden">
            <img
              src="/src/assets/docror (2).jpg"
              alt="Urology"
              className="w-full h-48 "
            />
          </figure>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1 * 0.2,
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 hover:bg-blue-400 p-2 rounded-full">
                <TbEyeCancel className="text-4xl" />
              </div>
              <h2 className="text-4xl font-semibold text-gray-800">Eye Care</h2>
            </div>
            <button className="text-gray-500 text-4xl hover:text-gray-900">
              →
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Lab testing is vital for accurately monitoring your health and
            identifying potential issues early for effective treatment.
          </p>
          <figure className="rounded-xl overflow-hidden">
            <img
              src="/src/assets/docror (3).jpg"
              alt="Urology"
              className="w-full h-48 "
            />
          </figure>
        </motion.div>
      </div>
      <p className="text-gray-700 mb-4">
        From preventive care to specialized treatments, we support your health
        at every stage.
      </p>
      <motion.button
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Services
      </motion.button>
    </section>
  );
};

export default Services;
