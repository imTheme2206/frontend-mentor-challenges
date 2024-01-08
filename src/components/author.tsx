import React from "react";

type AuthorProps = {
  src: string;
  name: string;
};

export default function Author({ src, name }: AuthorProps) {
  return (
    <div className="flex gap-2 items-center">
      <img className="max-w-8" src={src} alt="" />
      <span className="font-bold">{name}</span>
    </div>
  );
}
