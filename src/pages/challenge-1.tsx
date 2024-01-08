import React from "react";
import Card from "../components/card";
import illustration from "../assets/challenge-1/illustration-article.svg";
import avatar from "../assets/challenge-1/image-avatar.webp";
import Badge from "../components/badge";
import Author from "../components/author";

export default function Challenge1() {
  return (
    <div className="grid place-items-center bg-primary w-full min-h-[100svh]">
      <Card className="w-auto max-w-[calc(375px-2.5rem)] sm:max-w-[calc(336px+2.5rem)] group">
        <img className="rounded-xl" src={illustration} alt="course logo" />
        <Badge>Learning</Badge>
        <p>Publish 21 Dec 2023</p>
        <h2 className="font-bold text-[1.5rem] group-hover:text-primary transition-colors">
          HTML & CSS foundations
        </h2>
        <p className="text-[16px] text-muted">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <Author src={avatar} name={"Greg Hooper"} />
      </Card>
    </div>
  );
}
