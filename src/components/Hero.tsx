import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col items-center p-6 sm:p-10 bg-gray-900 text-white">
      <h2 className="text-2xl sm:text-3xl font-semibold">Hello, I'm</h2>
      <h1 className="text-3xl sm:text-4xl font-bold text-teal-400">
        Drishya Thekkumbad
      </h1>
      <p className="text-center mt-4 text-gray-400 text-lg sm:text-xl">
        Frontend Developer
      </p>
      <p className="text-center mt-2 text-gray-300 max-w-md text-sm sm:text-base">
        I have a strong foundation in HTML, CSS, and JavaScript, and proficiency
        in frameworks like ReactJS. I'm passionate about crafting beautiful and
        responsive user interfaces that enhance user experience and make web
        interactions seamless. I enjoy tackling challenges and continuously
        learning new technologies to expand my skill set. As a collaborative
        team player with strong communication skills, I thrive in environments
        where I can share ideas and learn from others. Outside of coding, I love
        being out in the nature, which inspires my creative approach to web
        development.
      </p>

      {/* Skills Section */}
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold">My Skills</h2>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <li className="bg-gray-800 p-4 rounded-lg text-center">HTML</li>
          <li className="bg-gray-800 p-4 rounded-lg text-center">CSS</li>
          <li className="bg-gray-800 p-4 rounded-lg text-center">JavaScript</li>
          <li className="bg-gray-800 p-4 rounded-lg text-center">React.js</li>
          <li className="bg-gray-800 p-4 rounded-lg text-center">
            Tailwind CSS
          </li>
          <li className="bg-gray-800 p-4 rounded-lg text-center">MongoDB</li>
        </ul>
      </div>
      <a href="mailto:your-drishyat2307@gmail.com">
        <button className="mt-6 px-6 sm:px-8 py-3 bg-teal-400 text-gray-900 font-semibold rounded-full text-sm sm:text-base">
          Let's Talk
        </button>
      </a>
      {/* Social Icons */}
      <div className="flex mt-6 space-x-4">
        <a
          href="https://www.linkedin.com/in/drishya-thekkumbad-26101424b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Drishyaat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 transition"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
