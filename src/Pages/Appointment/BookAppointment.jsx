import React from "react";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  return (
    <div className="w-11/12 mx-auto mt-8 p-4 md:p-8">
      <div className="bg-[url('/src/assets/annie-spratt-pKpipZVVEC0-unsplash.jpg')] bg-cover bg-center py-16 md:py-20 rounded-2xl text-center">
        <div className="bg-opacity-70 rounded-lg p-6 md:p-10">
          <h4 className="text-3xl md:text-5xl font-bold mb-6 text-blue-900">
            Make An Appointment
          </h4>
          <div className="flex justify-center">
            <button className="btn btn-primary rounded-full px-4 md:px-6 py-2 mt-4">
              <Link to="/">Home</Link> / Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10 ">
        {/* Info Section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-6 text-blue-900">
            Make An Appointment
          </h1>
          <p className="text-center md:text-left">
            Schedule your handyman service with ease. Choose a date and time
            that works best for you.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
            <img
              className="w-16 md:w-20 rounded-md"
              src="/src/assets/clipart (2).jpg"
              alt=""
            />
            <div>
              <p className="text-lg md:text-xl font-bold">Customer Services</p>
              <p className="text-md md:text-xl mt-2">+91 - 123 456 7890</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
            <img
              className="w-16 md:w-20 rounded-md"
              src="/src/assets/clipart (1).jpg"
              alt=""
            />
            <div>
              <p className="text-lg md:text-2xl font-bold">Opening Hours</p>
              <p className="text-md md:text-xl mt-2">
                Mon - Sat (09:00 - 21:00) <br /> Sunday (Closed)
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Full name"
              className="border p-2 rounded w-full"
            />
            <input
              placeholder="Email address"
              className="border p-2 rounded w-full"
            />
            <input
              placeholder="Phone: 123-456-7890"
              className="border p-2 rounded w-full"
            />
            <input type="date" className="border p-2 rounded w-full" />
            <textarea
              placeholder="Additional Message"
              className="border p-2 rounded w-full md:col-span-2"
            />
            <button className="btn btn-primary py-2 px-4 rounded w-full md:col-span-2">
              Book an appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
