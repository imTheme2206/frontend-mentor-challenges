import React, { ReactNode } from "react";
import { cn } from "../lib/util";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <div className="bg-primary rounded-md px-2 py-1">
      <p className={cn("text-black font-bold", className)}>{children}</p>
    </div>
  );
}
