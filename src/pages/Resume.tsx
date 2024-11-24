// import React from "react";
// import Navbar from "../components/Navbar";

// const Resume: React.FC = () => {
//   return (
//     <div className="bg-gray-800 text-white min-h-screen">
//       <Navbar />
//       <div className="container mx-auto p-6 md:p-10">
//         <h1 className="text-3xl font-bold mb-6 text-center">My Resume</h1>
//         <p className="text-center mb-4">
//           You can download my resume using the link below.
//         </p>
//         <a
//           href="https://drive.google.com/file/d/1igViae8CFYz8Q-S7r0bHEeGKSvjWMlPa/view?usp=sharing" // Replace with the actual path to your resume
//           download
//           className="mt-4 inline-block px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-full text-lg hover:bg-teal-500 transition"
//         >
//           View Resume
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Resume;
//new
// import React from "react";
// import Navbar from "../components/Navbar";
// const Resume: React.FC = () => {
//   return (
//     <div className="bg-gray-800 text-white min-h-screen">
//       <Navbar />
//       <div className="container mx-auto p-6 md:p-10">
//         <h1 className="text-3xl font-bold mb-6 text-center animate-fadeIn">
//           My Resume
//         </h1>
//         <p className="text-center mb-4 animate-slideIn">
//           You can download my resume using the link below.
//         </p>
//         <a
//           href="https://drive.google.com/file/d/1igViae8CFYz8Q-S7r0bHEeGKSvjWMlPa/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-4 inline-block px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-full text-lg hover:bg-teal-500 transition animate-bounce"
//         >
//           View Resume
//         </a>
//       </div>
//     </div>
//   );
// };
// export default Resume;
import React from "react";
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
          href="https://drive.google.com/file/d/1igViae8CFYz8Q-S7r0bHEeGKSvjWMlPa/view?usp=sharing"
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
