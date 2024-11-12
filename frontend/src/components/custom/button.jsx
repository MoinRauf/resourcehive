import { cn } from "@/utils";
import { Button as HeadLessButton } from "@headlessui/react";

export default function Button({ buttonText, onClick, buttonType, className }) {
  return (
    <HeadLessButton
      onClick={onClick}
      type={buttonType}
      className={cn(
        `w-full bg-blue-500 h-8 rounded-md text-white ${className}`
      )}
    >
      {buttonText}
    </HeadLessButton>
  );
}
