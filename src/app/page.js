"use client";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Navbar from "@/components/Navbar"; // Ensure Navbar is imported if it wasn't already in layout

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neonPink selection:text-black">
      {/* Background Stars/Grid Animation */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80"></div>
        <div className="stars absolute inset-0"></div>
      </div>

      <div className="max-w-5xl mx-auto pt-4">
        <Navbar />
        <Profile />
        <Skills />
        <Projects />
        <Socials />

        <footer className="text-center text-gray-500 text-xs font-mono py-8">
          <p>
            © {new Date().getFullYear()} Deepanshu Bhatt. All systems
            operational.
          </p>
        </footer>
      </div>
    </main>
  );
}
