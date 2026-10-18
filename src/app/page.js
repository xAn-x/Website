import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Profile />
      <Experience />
      <Projects />
      <Skills />
      <Socials />
      <footer className="site-footer site-shell">
        <span>© {new Date().getFullYear()} Deepanshu Bhatt</span>
        <span>Built with curiosity and a little too much coffee.</span>
      </footer>
    </main>
  );
}
