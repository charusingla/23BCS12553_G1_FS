export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <img src={project.imageUrl} alt={project.title} className="rounded" />
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.projectUrl} target="_blank" className="text-blue-500">View Project</a>
    </div>
  );
}
