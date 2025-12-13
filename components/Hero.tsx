
import SocialLinks from "./ui/SocialLinks"; 

export default function Hero() {
  return (
    <div className="
      flex flex-col md:flex-row
      items-start md:items-start
      gap-8 md:gap-12
      justify-center
      px-6 md:px-12
      py-6 text-white
    ">
      

      <div className="max-w-lg md:max-w-xl text-start md:text-left font-satoshi">
        <h2 className="text-3xl text-[#006EC9] md:text-4xl font-instrument font-bold ">
          Jaydeep Wagaskar
        </h2>

        <p className="text-black text-md md:text-lg font-bold mt-4">
          Full Stack Developer
        </p>

        <p className="text-sm md:text-sm text-[#666] mt-4 leading-5 text-justify">
          Hi there, I’m Jaydeep, a CS student who loves building things on the web. I enjoy creating 
          <b style={{ color: "#000" }}> full-stack applications</b>, exploring new technologies, and solving 
          <b style={{ color: "#000" }}> real-world problems</b> through code. In my spare time, I work on personal projects,
          experiment with new tools, and keep sharpening my development skills.
        </p>

        <SocialLinks /> 
      </div>
    </div>
  );
}
