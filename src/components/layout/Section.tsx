import type { ElementType, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

export default function Section({
  children,
  className = "",
  as: Component = "section",
  id,
}: SectionProps) {
  return (
    <Component id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </Component>
  );
}
