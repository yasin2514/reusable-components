import { z } from "zod";
import { SignUpSchema } from "../validator/form.validator";
import {
  FieldValues,
  SubmitHandler,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ReactNode } from "react";

export type TSignUpSchema = z.infer<typeof SignUpSchema>;

export type TFromProps = {
  children: ReactNode;
  double: boolean;
  onSubmit: SubmitHandler<FieldValues>;
};
export type TInputProps = {
  type?: string;
  label?: string;
  register: UseFormRegisterReturn;
  errors: any;
  placeholder?: string;
};

export type TFormSectionProps = {
  children: ReactNode;
};

export type TFormContextProps = {
  double: boolean;
};

export type TInnerInputProps = {
  value: string;
};

export type TInnerSectionContextProps = {
  type: "radio" | "checkbox";
  register: UseFormRegisterReturn;
};

export type TInnerSectionProps = {
  children: ReactNode;
  type: "radio" | "checkbox";
  label: string;
  register: UseFormRegisterReturn;
  errors: any;
};

export type TTextAreaProps = {
  label: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
};

export type TSelectProps = {
  register: UseFormRegisterReturn;
  errors: any;
  label: string;
  options: string[];
};
