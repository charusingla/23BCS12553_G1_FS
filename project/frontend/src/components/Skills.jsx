const skills = [
  { name: "C++", color: "bg-orange-500" },
  { name: "Express", color: "bg-green-500" },
  { name: "MongoDB", color: "bg-green-700" },
  { name: "React", color: "bg-blue-500" },
  { name: "Tailwind CSS", color: "bg-teal-400" },
  { name: "Node.js", color: "bg-green-600" },
];

export default function Skills() {
  return (
    <section className="flex  flex-col items-center justify-center py-16 bg-gray-50 text-center dark:bg-gray-900 dark:text-white transition text-gray-900 h-screen">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`${skill.color} text-white px-4 py-2 rounded-lg shadow`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
