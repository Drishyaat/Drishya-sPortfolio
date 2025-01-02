import React from "react";
import Navbar from "../components/Navbar";
import bookshelf from "../assets/bookshelf.png";
import imdb from "../assets/imdb.png";
import wellnestImg from "../assets/wellnest.png";
import fb from "../assets/fb.png";
import projectBg from "../assets/projectBg.png";

const projects = [
  {
    id: 1,
    title: "Book Shelf",
    description:
      "An e-commerce website designed to enhance user experience with features like a secure login and registration system, intuitive shopping cart, wishlist for saving favorite items, and a reliable payment gateway.",
    link: "https://bookkshelf.netlify.app/",
    image: bookshelf,
  },
  {
    id: 2,
    title: "Wellnest",
    description:
      "Developed a user-friendly fitness and wellness platform with dedicated pages for meditation, nutrition, and workout routines. Key features include user profile management, a workout journal to track progress, a BMI calculator for health insights, and secure login/sign-up functionality for personalized access. ",
    link: "https://wellnest04.netlify.app/",
    image: wellnestImg,
  },
  {
    id: 3,
    title: "IMDB Clone",
    description: `A clone of IMDb featuring a user-friendly interface that allows users to easily browse movies and shows. Key functionalities include "Add to Favorites" and "Add to Watchlist," enabling users to curate their viewing preferences seamlessly. The project showcases skills in front-end development and user experience design.`,
    link: "https://imdbclone24.netlify.app/",
    image: imdb,
  },
  {
    id: 4,
    title: "Facebook Login page clone",
    description:
      "A front-end project that replicates the Facebook login page, built using Tailwind CSS for a responsive and modern design. This project demonstrates my skills in creating intuitive user interfaces and applying utility-first styling to enhance visual appeal.",
    link: "https://gwlw6q-5173.csb.app/",
    image: fb,
  },
];

const Project: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center text-white min-h-screen"
      style={{
        backgroundImage: `url(${projectBg})`,
      }}
    >
      <Navbar />
      <div className="container mx-auto p-6 md:p-8 lg:p-10 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg p-5 transition-transform transform hover:scale-105 opacity-90 hover:opacity-100 relative"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${project.image})`,
                  zIndex: -1,
                  opacity: 0.3, // Reduced opacity for better readability
                }}
              ></div>
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-cyan-400 font-semibold hover:text-cyan-500 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
