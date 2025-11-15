import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectsPreview from "../components/ProjectsPreview";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white transition text-gray-900">
      <div className="fixed left-4 top-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <Skills />
      <ProjectsPreview />
      <section id="contact" className="flex flex-col items-center justify-center w-full py-16 bg-gray-50 dark:bg-gray-900 dark:text-white transition text-gray-900 h-screen">
        <div className="w-full"><h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <ContactForm /></div>

      </section>
      <Footer />
    </div>
  );
}
