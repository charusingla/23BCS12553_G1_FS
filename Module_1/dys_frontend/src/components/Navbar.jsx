import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#4A90E2] text-white py-4 px-6 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">ReadEase</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/library" className="hover:underline">Library</Link>
          <Link to="/games" className="hover:underline">Games</Link>
          <Link to="/journal" className="hover:underline">Journal</Link>
          <Link to="/community" className="hover:underline">Community</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
        </div>
      </div>
    </nav>
  );
}