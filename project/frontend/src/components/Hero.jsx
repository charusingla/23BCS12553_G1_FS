import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex w-l bg-amber-100 justify-center overflow-hidden rounded-4xl dark:bg-gray-900 dark:text-white transition text-gray-900">    
        <img src="1.png" />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Charu Singla</h1>
      <p className="text-xl md:text-2xl mb-8">
        Full Stack Developer & Competitive Programmer
      </p>
      <a
        href="#contact"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Connect with Me
      </a>
    </motion.section>
  );
}
