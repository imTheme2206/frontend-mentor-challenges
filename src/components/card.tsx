import React, { ReactNode } from "react";
import { cn } from "../lib/util";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn([
        "bg-white p-5 rounded-2xl border-black border shadow-card hover:shadow-hover transition-shadow flex flex-col gap-4 items-start",
        className,
      ])}
    >
      {children}
    </div>
  );
}
