import { useContext } from "react";
import Button from "../ui/Button";
import { FormContext } from "./Form";
import cn from "../../utils/cn";

export const FormSubmit = () => {
  const { double } = useContext(FormContext);
  return (
    <div
      className={cn("grid gap-5 grid-cols-1 my-8 justify-items-center", {
        "md:grid-cols-2": double,
      })}
    >
      <div
        className={cn(" w-full max-w-md flex justify-end items-center gap-5 ", {
          "md:col-start-2": double,
        })}
      >
        <Button
          type="reset"
          variant="reset"
          className={cn("w-full", { " md:w-1/4": double })}
        >
          Reset
        </Button>
        <Button
          type="submit"
          variant="submit"
          className={cn("w-full", { " md:w-1/4": double })}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
