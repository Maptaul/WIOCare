import React from "react";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  return (
    <div className="w-11/12 mx-auto mt-8 p-8">
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
      <div className="md:flex p-10">
        <div className=" p-8 w-6/12 mx-auto">
          <h1 className="text-center text-5xl font-bold mb-8 text-blue-900">
            Make An Appointment
          </h1>
          <p>
            Schedule your handyman service with ease. Choose a date and time
            that works best for you.
          </p>
          <div className="flex items-center gap-5 mt-4">
            <img
              className="w-20 rounded-md"
              src="/src/assets/clipart (2).jpg"
              alt=""
            />
            <div>
              <p className="text-2xl font-bold">Customer Services</p>
              <p className="text-xl mt-2">+91 - 123 456 7890</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <img
              className="w-20 rounded-md"
              src="/src/assets/clipart (1).jpg"
              alt=""
            />
            <div>
              <p className="text-2xl font-bold">Opening Hours</p>
              <p className="text-xl mt-2">
                Mon - Sat (09:00 - 21:00 Sunday (Closed))
              </p>
            </div>
          </div>
        </div>
        <div className=" p-8 w-6/12 mx-auto">
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
            <button className="btn btn-primary py-2 px-4 rounded col-span-2">
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
