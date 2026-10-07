import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border bg-surface p-4 shadow-md ${className}`.trim()}
    >
      {children}
    </div>
  );
}
