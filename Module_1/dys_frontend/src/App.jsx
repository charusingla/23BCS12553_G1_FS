import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Library from './pages/Library';
import Games from './pages/Games';
import Journal from './pages/Journal';
import Community from './pages/Community';
import Profile from './pages/Profile';

export default function App() {
  return (
    <div className="font-dyslexic bg-[#fdfaf6] min-h-screen">
      <Navbar />
      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/games" element={<Games />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
