import { motion } from "framer-motion";
import React from "react";

const Services = () => {
  return (
    <section className="p-10 rounded-md text-center">
      <h4 className="text-primary text-3xl  font-medium mb-2 flex justify-center items-center gap-2">
        <span>🩺</span> Our Services
      </h4>
      <h1 className="text-4xl font-bold mb-6">
        Comprehensive services for your health
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 rounded-md ">
        <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-2xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-full"></div>
              <h2 className="text-xl font-semibold text-gray-800">Urology</h2>
            </div>
            <button className="text-gray-500 hover:text-gray-700">→</button>
          </div>
          <p className="text-gray-600 mb-4">
            Our neurology department provides expert care for conditions
            affecting the brain, spine, and nervous system.
          </p>
          <figure className="rounded-xl overflow-hidden">
            <img
              src="/src/assets/docror (1).jpg"
              alt="Urology"
              className="w-full h-48 object-cover"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-2xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Urology</h2>
            </div>
            <button className="text-gray-500 hover:text-gray-700">→</button>
          </div>
          <p className="text-gray-600 mb-4">
            Our neurology department provides expert care for conditions
            affecting the brain, spine, and nervous system.
          </p>
          <figure className="rounded-xl overflow-hidden">
            <img
              src="/src/assets/docror (1).jpg"
              alt="Urology"
              className="w-full h-48 object-cover"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-2xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Urology</h2>
            </div>
            <button className="text-gray-500 hover:text-gray-700">→</button>
          </div>
          <p className="text-gray-600 mb-4">
            Our neurology department provides expert care for conditions
            affecting the brain, spine, and nervous system.
          </p>
          <figure className="rounded-xl overflow-hidden">
            <img
              src="/src/assets/docror (1).jpg"
              alt="Urology"
              className="w-full h-48 object-cover"
            />
          </figure>
        </div>
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
