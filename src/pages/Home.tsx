import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="bg-[url('https://wallpapers.com/images/featured/dark-and-blue-aesthetic-laptop-15hvaune8yxlqlss.jpg')] text-white min-h-screen bg-cover bg-center">
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
