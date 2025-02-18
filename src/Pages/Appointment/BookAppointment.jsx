import React from "react";

const BookAppointment = () => {
  return (
    <div>
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
