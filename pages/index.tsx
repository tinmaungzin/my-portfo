import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  
  return (
    <div className="font-poppins">
      <Header />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}
