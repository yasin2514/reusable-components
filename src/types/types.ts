import { z } from "zod";
import { SignUpSchema } from "../validator/form.validator";
import { UseFormRegisterReturn } from "react-hook-form";

export type TSignUpSchema = z.infer<typeof SignUpSchema>;

export type TInputProps = {
  type?: string;
  label?: string;
  register: UseFormRegisterReturn;
  errors: any;
  placeholder?: string;
};
