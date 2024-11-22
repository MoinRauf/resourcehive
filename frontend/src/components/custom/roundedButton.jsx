import { cn } from "@/utils";

export default function RoundedButton({ icon, className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-black inline-block rounded-full p-3 cursor-pointer",
        className
      )}
    >
      <div>{icon}</div>
    </div>
  );
}
