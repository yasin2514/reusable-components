import { useContext } from "react";
import cn from "../../utils/cn";
import { FormContext } from "./Form";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormContext);
  return (
    <div
      className={cn("grid grid-cols-1 gap-5 justify-items-center", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
