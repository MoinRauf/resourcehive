import { Button } from "..";

export default function ConfirmationDialogue({
  confirmationText,
  onCancelClick,
  onConfirmClick,
}) {
  return (
    <div>
      <div>
        <h1>{confirmationText}</h1>
      </div>
      <div className="flex justify-end gap-2  ">
        <Button
          onClick={onCancelClick}
          buttonText={"Cancel"}
          className="mt-3 b  text-sm  text-black bg-white  border-2 border-black block w-40 "
        />
        <Button
          onClick={onConfirmClick}
          buttonText={"Confirm"}
          className="mt-3 bg-black  text-sm  block w-40 "
        />
      </div>
    </div>
  );
}
