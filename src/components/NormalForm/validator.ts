import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z
      .string()
      .min(1, { message: "Password is Required" })
      .min(6, { message: "Password must be at least 6 characters" }),
    rePassword: z.string().min(1, { message: "Confirm Password is Required" }),
    religion: z.string().optional(),
    hobby: z.array(z.string()).optional(),
    country: z.string().optional(),
    textarea: z.string().optional(),
  })
  .superRefine(({ password, rePassword }, ctx) => {
    if (password !== rePassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["rePassword"],
      });
    }
  });

export type TSignUpSchema = z.infer<typeof SignUpSchema>;
