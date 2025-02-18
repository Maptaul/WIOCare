import React from "react";
import AppointmentBanner from "../Appointment/AppointmentBanner";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Departments from "./Departments/Departments";
import Services from "./Services/Services";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import Team from "./teamMembers/teamMembers";

const Home = () => {
  return (
    <div className="min-h-screen w-11/12 mx-auto">
      <Banner />
      <Departments />
      <AboutUs />
      <AppointmentBanner />
      <Services />
      <WelcomeSection />
      <Team />
    </div>
  );
};

export default Home;
