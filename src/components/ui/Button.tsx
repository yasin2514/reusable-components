import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import cn from "../../utils/cn";

type TVariant = "solid" | "outline" | "ghost" | "submit" | "reset" | undefined;
type TRef = HTMLButtonElement;
type TVariantOptions = {
  variant?: TVariant;
};

type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TVariantOptions;

const Button = forwardRef<TRef, TButtonProps>(
  ({ children, className, variant, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        case "submit":
          return "btn-submit";
        case "reset":
          return "btn-reset";
        default:
          return "btn-solid";
      }
    };
    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
