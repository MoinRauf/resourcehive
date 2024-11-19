import { Hamburger } from "@/components";
export default function PageHeader({ headerText }) {
  return (
    <div className=" flex items-center gap-3 px-3 py-3 shadow-[-3px_14px_30px_-7px_rgba(88,_85,_85,_0.1)] ">
      <Hamburger />
      <h1 className="font-bold text-xl">{headerText}</h1>
    </div>
  );
}
