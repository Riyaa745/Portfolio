
import Left from "./Components/Left";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

export default function Profile() {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-900 overflow-hidden">
      {/* Left Sidebar (Fixed) */}
      <div>
        <Left />
      </div>

      {/* Right Content (Scrollable) */}
      <div className=" ml-3 sm:ml-[25%]  sm:pl-16 pr-1 sm:pr-30">
        <About />
        <Skill />
        <Experience />
        <Education />
        <Project />
        <Contact/>
        <Footer />
      </div>
    </div>

  );
}


