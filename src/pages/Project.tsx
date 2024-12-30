// import React from "react";
// import Navbar from "../components/Navbar";
// import bookshelf from "../assets/bookshelf.png";

// const projects = [
//   {
//     id: 1,
//     title: "Book Shelf",
//     description:
//       "An e-commerce website designed to enhance user experience with features like a secure login and registration system, intuitive shopping cart, wishlist for saving favorite items, and a reliable payment gateway.",
//     link: "https://bookkshelf.netlify.app/",
//   },
//   {
//     id: 2,
//     title: "IMDB Clone",
//     description: `A clone of IMDb featuring a user-friendly interface that allows users to easily browse movies and shows. Key functionalities include "Add to Favorites" and "Add to Watchlist," enabling users to curate their viewing preferences seamlessly. The project showcases skills in front-end development and user experience design.`,
//     link: "https://yy6q43.csb.app/",
//   },
//   {
//     id: 3,
//     title: "Mind sage",
//     description:
//       "A meditation website that offers a comprehensive collection of links to various meditation techniques, promoting mindfulness and relaxation. The site features a built-in timer, allowing users to customize their meditation sessions effortlessly. This project highlights my focus on user experience and well-being.",
//     link: "https://qv8jw4.csb.app/",
//   },
//   {
//     id: 4,
//     title: "Facebook Login page clone",
//     description:
//       "A front-end project that replicates the Facebook login page, built using Tailwind CSS for a responsive and modern design. This project demonstrates my skills in creating intuitive user interfaces and applying utility-first styling to enhance visual appeal.",
//     link: "https://gwlw6q-5173.csb.app/",
//   },
//   // {
//   //   id: 5,
//   //   title: "Project Five",
//   //   description: "Description for project five.",
//   //   link: "#",
//   // },
//   // {
//   //   id: 6,
//   //   title: "Project Six",
//   //   description: "Description for project six.",
//   //   link: "#",
//   // },
// ];

// const Project: React.FC = () => {
//   return (
//     <div className="bg-[url('https://www.pixelstalk.net/wp-content/uploads/2016/03/Free-Dark-Blue-Wallpaper-High-Quality-download.png')] bg-cover bg-center text-white min-h-screen">
//       <Navbar />
//       <div className="container mx-auto p-6 md:p-8 lg:p-10 bg-black bg-opacity-50 rounded-lg">
//         <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-gray-800 rounded-lg p-5 transition-transform transform hover:scale-105 opacity-90 hover:opacity-100"
//             >
//               <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
//               <p className="mb-4">{project.description}</p>
//               <a href={project.link} className="text-blue-400 hover:underline">
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;
import React from "react";
import Navbar from "../components/Navbar";
import bookshelf from "../assets/bookshelf.png";
import imdb from "../assets/imdb.png";
import meditationImg from "../assets/meditationImg.png";
import fb from "../assets/fb.png";

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
    title: "IMDB Clone",
    description: `A clone of IMDb featuring a user-friendly interface that allows users to easily browse movies and shows. Key functionalities include "Add to Favorites" and "Add to Watchlist," enabling users to curate their viewing preferences seamlessly. The project showcases skills in front-end development and user experience design.`,
    link: "https://yy6q43.csb.app/",
    image: imdb,
  },
  {
    id: 3,
    title: "Mind sage",
    description:
      "A meditation website that offers a comprehensive collection of links to various meditation techniques, promoting mindfulness and relaxation. The site features a built-in timer, allowing users to customize their meditation sessions effortlessly. This project highlights my focus on user experience and well-being.",
    link: "https://qv8jw4.csb.app/",
    image: meditationImg,
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
    <div className="bg-[url('https://www.pixelstalk.net/wp-content/uploads/2016/03/Free-Dark-Blue-Wallpaper-High-Quality-download.png')] bg-cover bg-center text-white min-h-screen">
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
