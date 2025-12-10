import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
export function Portfolio() {
  return (
    <div className="min-h-screen bg-white ">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p>
            © 2024 Rodrigo Marure Sánchez. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
