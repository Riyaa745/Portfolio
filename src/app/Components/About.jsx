export default function About() {
  return (
    <div id="about" className=" bg-gray-900 text-white border-b-1 border-gray-600 py-10 ">
      {/* <h2 className="text-3xl font-bold text-gray-200 mb-8">About Me</h2> */}
      <div className="mt-4 mb-6 sm:mb-8">
        <h2 className="text-white text-3xl font-bold mb-2">About Me</h2>
        <div className="flex items-center">
          <div className="w-2 h-2 border-2 border-white rounded-full"></div>
          <div className="ml-2 w-12 border-t-2 border-white"></div>
        </div>
      </div>

      <p className="text-md text-gray-300 leading-relaxed">
        Hi! I'm Riya Sainwal, a passionate Front-End Developer with a keen eye for design and a love for crafting seamless user experiences. I specialize in building responsive, dynamic, and visually appealing web applications using modern technologies like HTML, CSS, JavaScript, and React.
        With a strong foundation in UI/UX principles, I strive to create interfaces that are not only functional but also aesthetically pleasing. I enjoy turning ideas into interactive digital experiences and constantly stay updated with the latest industry trends.
      </p>
    </div>
  );
}
