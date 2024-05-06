import { TInputProps } from "../../types/types";

export const Input = ({
  label,
  register,
  errors,
  type,
  ...rest
}: TInputProps) => {
  const { name } = register;
  const { placeholder } = rest;
  return (
    <div className=" w-full max-w-md">
      <label htmlFor={name} className="block mb-0.5">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        id={name}
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
