import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";

export default function Modal({ isOpen = false, onClose, children, heading }) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => {}}
        as="div"
        className=" z-10 fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
        transition
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50  " />
        <div className="fixed inset-0 z-20 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4  z-20">
            <DialogPanel
              transition
              className=" z-20 w-full max-w-xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 "
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black flex justify-between items-center"
              >
                <div className="font-bold text-lg">{heading}</div>

                <div className="cursor-pointer" onClick={onClose}>
                  <RxCross2 className="text-lg" />
                </div>
              </DialogTitle>
              <div className="mt-3">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
