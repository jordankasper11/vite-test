import { FC, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="w-full p-2 rounded bg-slate-700 hover:bg-slate-600 font-semibold text-lg" onClick={onClick}>
      {children}
    </button>
  );
};
