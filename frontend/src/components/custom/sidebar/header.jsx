import { cn } from "@/utils";

export default function Header({ isToggled }) {
  return (
    <div className="flex  flex-col justify-center items-center">
      <div
        className={cn("mb-3 mt-3  transition-all   max-md:block ", {
          hidden: isToggled,
        })}
      >
        <h1 className="text-center font-bold"> RESOURCE HIVE</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div
          className={cn("w-20 rounded-full overflow-hidden max-md:w-20  ", {
            "w-11 mt-2": isToggled,
          })}
        >
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid"
            alt="avatar image"
          />
        </div>
        <div className={cn("max-md:block", { hidden: isToggled })}>
          <h2 className="text-center font-bold">Izma Shafqat</h2>
        </div>
      </div>
    </div>
  );
}
