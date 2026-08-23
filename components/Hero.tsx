
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

        <p className="text-sm md:text-sm text-[#666] mt-4 leading-5 text-justify">
  20 y.o. <b style={{ color: "#000" }}>fullstack eng</b> with design eyes. i build, break, and fix things people use. focused on solving <b style={{ color: "#000" }}>real problems</b> and making a <b style={{ color: "#000" }}>real impact</b>.<br />
  dms are open for <b style={{ color: "#000" }}>work/business</b>.
</p>

        <SocialLinks /> 
      </div>
    </div>
  );
}
