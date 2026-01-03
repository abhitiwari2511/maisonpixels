import React from "react";
import { cn } from "../../lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <section
      id={id}
      className={cn("py-4 md:py-20 relative overflow-hidden", className)}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  );
};
