import Link from "next/link";

interface Tab_Inputs{
    icon?:React.ReactNode,
    label:string
    href?:string;
}
export default function SkillTab({ icon, label,href }:Tab_Inputs) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      className="inline-flex items-center text-sm bg-blue-200 font-satoshi border-dashed border-black border py-1 px-2 rounded-lg skill-inner-shadow self-end text-black"
    >
      <div className="size-4 shrink-0">{icon}</div>
      <p className="ml-1 text-sm font-bold">{label}</p>
    </Link>
  );
}
