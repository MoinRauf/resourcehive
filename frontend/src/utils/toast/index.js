import { toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

export function showToast(toastType, message, toastId) {
  switch (toastType) {
    case "success":
      toast.success(message, { toastId: toastId ?? null, autoClose: 2000 });
      break;
    case "error":
      toast.error(message, { toastId: toastId ?? null, autoClose: 2000 });
      break;
    default:
      return null;
  }
}
