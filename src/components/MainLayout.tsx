import React, { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
}

export const MainLayout: React.FC<LayoutProps> = ({ children, title, subtitle }) => (
  <div className="flex justify-center flex-col items-center min-h-screen bg-[#d9d9d9] dark:bg-[#353535] ">
    {title && (
      <div className="flex flex-col">
        <h1 className="text-3xl text-blue-950 font-bold dark:text-[#BEBFD1] ">{title}</h1>
        {subtitle && (
          <h2 className="text-3xl text-blue-950 font-bold dark:text-[#BEBFD1] ">
            {subtitle}
          </h2>
        )}
      </div>
    )}
    {children}
  </div>
);
