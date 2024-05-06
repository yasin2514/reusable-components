import { createContext, useContext } from "react";
import {
  TInnerInputProps,
  TInnerSectionContextProps,
  TInnerSectionProps,
  TInputProps,
  TTextAreaProps,
} from "../../types/types";

// for the Input component
export const Input = ({
  label,
  register,
  errors,
  type,
  ...rest
}: TInputProps) => {
  const { name } = register;
  const { placeholder } = rest;
  const random = Math.random().toString(36).substring(7);
  const id = name?.concat(random).toLowerCase();
  return (
    <div className=" w-full max-w-md">
      <label htmlFor={id} className="block mb-0.5">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        id={id}
        {...register}
        placeholder={
          placeholder || (label ? `Enter Your ${label}` : `Enter your ${name}`)
        }
        {...rest}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">{errors[name]?.message}</span>
      )}
    </div>
  );
};

// for the radio button and checkbox component
const InnerSectionContext = createContext<TInnerSectionContextProps | null>(
  null
);
export const InnerSection = ({
  register,
  errors,
  children,
  type,
  label,
}: TInnerSectionProps) => {
  const { name } = register;
  return (
    <InnerSectionContext.Provider value={{ register, type }}>
      <div className="w-full max-w-md">
        <label className="block mb-0.5">{label}</label>
        <div className="grid grid-cols-2 md:flex justify-between items-center">
          {children}
        </div>
        {errors[name] && (
          <span className="text-red-500 text-xs">{errors[name]?.message}</span>
        )}
      </div>
    </InnerSectionContext.Provider>
  );
};
Input.InnerSection = InnerSection;

// for the radio button and checkbox  component
export const InnerInput = ({ value }: TInnerInputProps) => {
  const { register, type } = useContext(
    InnerSectionContext
  ) as TInnerSectionContextProps;
  const random = Math.random().toString(36).substring(7);
  const id = value.concat(random).toLowerCase();
  return (
    <div className="space-x-2 flex items-center">
      <input type={type} id={id} value={value} {...register} />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};
InnerSection.Input = InnerInput;

// for the text area component
export const TextArea = ({ label, register, ...rest }:TTextAreaProps) => {
  const { name } = register;
  const random = Math.random().toString(36).substring(7);
  const id = name?.concat(random).toLowerCase();
  return (
    <div className="w-full max-w-md">
      <label htmlFor={id} className="block mb-0.5">
        {label}
      </label>
      <textarea
        id={id}
        {...register}
        {...rest}
      ></textarea>
    </div>
  );
};
