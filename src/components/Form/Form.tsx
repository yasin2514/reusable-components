import { createContext } from "react";
import cn from "../../utils/cn";
import { TFormContextProps, TFromProps } from "../../types/types";

export const FormContext = createContext<TFormContextProps|null>(null);
export const Form = ({ children, double, onSubmit }: TFromProps) => {
  return (
    <FormContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "border border-gray-400 rounded-md shadow-sm p-5 mx-auto",
          {
            "max-w-5xl": double,
            "max-w-lg ": !double,
          }
        )}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};
