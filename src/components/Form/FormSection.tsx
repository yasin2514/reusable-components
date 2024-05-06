import { useContext } from "react";
import cn from "../../utils/cn";
import { FormContext } from "./Form";
import { TFormContextProps, TFormSectionProps } from "../../types/types";

export const FormSection = ({ children }:TFormSectionProps) => {
  const { double } = useContext(FormContext) as TFormContextProps;
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
