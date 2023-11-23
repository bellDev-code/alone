import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ModeButton = ({ children, className, ...props }: IProps) => {
  return (
    <button
      {...props}
      className={`${className} flex items-center min-w-max justify-center bg-slate-950 text-white w-20 p-5 rounded-sm disabled:bg-gray-400`}
    >
      {children}
    </button>
  );
};