import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../../../Components/Loading";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/teamMembers.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setTeamMembers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="py-12 text-center">
      <h4 className="text-primary text-3xl font-medium mb-2 flex justify-center items-center gap-2">
        <span>🩺</span> Team Members
      </h4>
      <motion.h2
        className="text-3xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Compassionate experts you can trust
      </motion.h2>
      <p className="mt-2 text-gray-600">
        Our team brings together a wealth of experience, passion, and a
        dedication to excellence in patient care.
      </p>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        className="mt-10 container mx-auto px-6"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="shadow-lg rounded-lg overflow-hidden bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 "
                />
                <div className="text-center p-4">
                  <div className="flex justify-center gap-3 text-gray-500 mb-2">
                    <FaInstagram className="cursor-pointer hover:text-red-500" />
                    <FaFacebook className="cursor-pointer hover:text-blue-500" />
                    <FaDribbble className="cursor-pointer hover:text-pink-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-500">{member.specialty}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
