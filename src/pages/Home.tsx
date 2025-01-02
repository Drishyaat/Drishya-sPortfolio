import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import mainBg from "../assets/mainBg.jpg";

const Home: React.FC = () => {
  return (
    <div
      className="text-white min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${mainBg})`,
      }}
    >
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-black bg-opacity-60 rounded-lg p-12 sm:p-16 lg:p-20 max-w-2xl w-full mx-4 text-center">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
