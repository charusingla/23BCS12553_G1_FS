import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50 flex justify-between items-center px-8 py-4">
      <div className="text-xl font-bold">Vishal</div>
      <ul className="flex gap-6">
        <li>
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">Home</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
        </li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
}
