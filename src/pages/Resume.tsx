//import React from "react";
import Navbar from "../components/Navbar";

const Resume: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6 md:p-10 flex flex-col items-center mt-10">
        {" "}
        {/* Adds margin to push the content below the navbar */}
        <h1 className="text-3xl font-bold mb-6 animate-fadeIn">My Resume</h1>
        <p className="text-center mb-4 animate-slideIn">
          You can view my resume using the link below.
        </p>
        <a
          href="https://drive.google.com/file/d/12m-Kw4DvQidMVDo6Qq871GCCiP0vf3Ks/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-full text-lg hover:bg-teal-500 transition animate-bounce"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
