import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full max-w-[1250px] mx-auto h-full]">{children}</div>
  );
};

export default Container;
