import { cn } from "../lib/util";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn([
        "bg-white p-5 relative rounded-2xl border-black border flex flex-col gap-4 items-start z-10",
        className,
      ])}
    >
      {children}
    </div>
  );
}
