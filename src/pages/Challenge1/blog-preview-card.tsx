import { blogData } from "../../assets/challenge-1/data.ts";
import BlogCard from "../../components/blog-card.tsx";

export default function BlogPreviewCard() {
  return (
    <div className="grid gap-8 place-items-center bg-primary w-full min-h-[100svh]">
      <BlogCard {...blogData} />
    </div>
  );
}
