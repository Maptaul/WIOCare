import { motion } from "framer-motion";

const AppointmentBanner = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-4 md:px-8 rounded-3xl flex flex-col md:flex-row items-center relative justify-between">
      <div className="  md:w-1/2">
        <img
          className="absolute top-[70px] left-0 rounded-3xl w-"
          src="/src/assets/Appointment/sdd.png"
          alt=""
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center  mb-8 md:mb-0"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Take the first step to better health
        </h1>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 text-lg rounded-full shadow-lg hover:scale-105 transition">
          Book A Appointment Now
        </button>
        <p className="mt-4 text-gray-300 text-sm">
          It only <span className="font-semibold">takes 2 minutes</span> to
          complete
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src="/src/assets/Appointment/appointments.png"
          alt="Doctor"
          className="w-64 md:w-80 rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default AppointmentBanner;
