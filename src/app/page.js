
import Left from "./Components/Left";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Footer from "./Components/Footer";

export default function Profile() {
  return (
    <div className="flex  bg-gray-900 text-green-400">
      {/* Left Sidebar (Fixed) */}
      <Left />

      {/* Right Content (Scrollable) */}
      <div className=" ml-[25%] pl-16 pr-40">
        <About />
        <Skill />
        <Experience />
        <Education />
        <Project />
        <Footer/>
      </div>
    </div>

  );
}


