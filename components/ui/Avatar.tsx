import Image from "next/image";

export default function Avatar() {
  return (
    <div
      className="
        w-24 h-24      
        md:w-36 md:h-36  
        rounded-full overflow-hidden shrink-0
      "
    >
      <Image
        src="/mebw.png"
        alt="avatar"
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
