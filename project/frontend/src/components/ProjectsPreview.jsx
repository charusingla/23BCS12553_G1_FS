// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ProjectsPreview() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/projects").then(res => setProjects(res.data));
//   }, []);

//   return (
//     <section className="py-16 bg-white text-center px-4">
//       <h2 className="text-3xl font-bold mb-8">My Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.slice(0, 6).map(p => (
//           <div key={p.id} className="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition">
//             <img src={p.imageUrl} alt={p.title} className="rounded mb-4 w-full h-40 object-cover"/>
//             <h3 className="text-xl font-bold mb-2">{p.title}</h3>
//             <p className="mb-2">{p.description}</p>
//             <a href={p.projectUrl} target="_blank" className="text-blue-600 hover:underline">
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function ProjectsPreview() {

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio built with React, Tailwind, and Java backend.",
      imageUrl: "/2.png",
      projectUrl: "https://github.com/charusingla/My_PortFolio"
    },
    {
      id: 2,
      title: "Timer Challenge",
      description: "A simple game to test your response time.",
      imageUrl: "3.png",
      projectUrl: "https://github.com/charusingla/Timer-Challenge"
    },
    {
      id: 3,
      title: "Employee Management System",
      description: "Spring Boot + MongoDB REST API for tasks and scheduling.",
      imageUrl: "4.png",
      projectUrl: "https://github.com/charusingla/Employee_Management_System"
    },
  ];

  return (
    <section className="py-20 bg-white text-center px-4 dark:bg-gray-800 dark:text-white transition text-gray-900 h-screen">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white">
        🚀 My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 6).map(p => (
          <div
            key={p.id}
            className="group bg-gray-100 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03]"
          >
            <img
              src={p.imageUrl}
              alt={p.title}
              className="rounded-lg mb-4 w-full h-48 object-cover shadow-md group-hover:opacity-90 transition"
            />

            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              {p.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {p.description}
            </p>

            <a
              href={p.projectUrl}
              target="_blank"
              className="inline-block px-4 py-2 mt-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
