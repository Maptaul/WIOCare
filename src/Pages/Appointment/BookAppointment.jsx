import React from "react";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  return (
    <div className="w-11/12 mx-auto mt-8">
      <div className=" bg-[url('/src/assets/annie-spratt-pKpipZVVEC0-unsplash.jpg')] bg-transparent bg-cover bg-center py-20 rounded-2xl ">
        <div className="bg-opacity-70 rounded-lg p-10">
          <h4 className="text-center text-5xl font-bold mb-8 text-blue-900">
            Make An Appointment
          </h4>
          <div className="items-center justify-center text-center">
            <button className="btn  btn-primary rounded-full px-6 py-2 mt-4 ">
              <Link to="/">Home</Link> /Appointment
            </button>
          </div>
        </div>
      </div>
      <div className=" p-8 w-6/12 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Book an appointment</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Full name" className="border p-2 rounded" />
          <input placeholder="Email address" className="border p-2 rounded" />
          <input
            placeholder="Phone: 123-456-7890"
            className="border p-2 rounded"
          />
          <input type="date" className="border p-2 rounded" />
          <textarea
            placeholder="Additional Message"
            className="border p-2 rounded col-span-2"
          />
          <button className="bg-black text-white py-2 px-4 rounded col-span-2">
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
