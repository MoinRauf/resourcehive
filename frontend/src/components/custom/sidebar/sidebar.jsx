import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import { cn } from "@/utils";
import { VscClose } from "react-icons/vsc";

export default function SideBar() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          alert("clicked");
        }}
        id="sidebar_wrapper "
        className={cn(
          "  h-full   max-md:absolute max-md:top-0  relative  bg-black/30 max-md:w-full max-md:animate-opacity"
        )}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          id="sidebar_container "
          className={cn(
            "flex flex-col  w-[12rem] h-screen transition-all bg-white shadow-[12px_-3px_25px_-14px_rgba(142,_137,_144,_0.4)] max-md:w-[12rem]  max-md:-translate-x-[100%]  ",
            { "w-[4rem]": isToggled }
          )}
        >
          <Header isToggled={isToggled} />

          <Menu isToggled={isToggled} />
          <Footer isToggled={isToggled} setIsToggled={setIsToggled} />
        </div>
        <div className="hidden max-md:block absolute top-3 right-3">
          <VscClose className="text-[2rem]" />
        </div>
      </div>
    </>
  );
}
