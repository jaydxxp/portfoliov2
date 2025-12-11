
import EduTab from "./ui/Edu";


export default function Technologies() {
  return (
    <div
      className="
      flex flex-col md:flex-row
      items-center md:items-center
      gap-8 md:gap-12
      px-6 md:px-12 py-6
      justify-center

    "
    >
      
      <div className="flex flex-col items-start md:items-start font-satoshi text-[#666] max-w-lg md:max-w-xl w-full">
        <span className="font-satoshi font-bold text-2xl text-center md:text-left mb-4">
          Education
        </span>
        <EduTab
          title="MET Institute of Technology"
          subtitle="BTech in Computer Science and Design"
          year="2023-Present"
          description="Actively involved in campus activities, including participation in technical and cultural clubs. Engaged in various competitions and collaborative projects, contributing both individually and as part of a team. Frequently involved in organizing events and student-led initiatives, demonstrating leadership, coordination, and communication skills."
          coursework={[
            "DSA",
            "OOP",
            "Database Systems",
            "Computer Architecture",
          ]}
        />
      </div>
    </div>
  );
}
