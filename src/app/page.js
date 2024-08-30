import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";


export default function Home() {
  return (
   <main className={""}>
    <Profile/>
    <Skills/>
    <Projects/>
    <Socials/>
   </main>
  );
}
