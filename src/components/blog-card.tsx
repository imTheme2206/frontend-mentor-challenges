import Card from "../ui/card";
import Badge from "../ui/badge";
import Author from "../ui/author";

type BlogCardProps = {
  image: string;
  blogType: string;
  publish: string;
  blogName: string;
  blogDescription: string;
  author: {
    avatar: string;
    name: string;
  };
};

export default function BlogCard({ author, ...rest }: BlogCardProps) {
  return (
    <div className="w-auto max-w-[calc(375px-2.5rem)] sm:max-w-[calc(336px+2.5rem)] group">
      <Card className="shadow-card group-hover:shadow-hover transition-shadow">
        <img className="rounded-xl" src={rest.image} alt="blog logo" />
        <Badge>{rest.blogType}</Badge>
        <p>Publish {rest.publish}</p>
        <h2 className="font-bold text-[1.5rem] group-hover:text-primary">
          {rest.blogName}
        </h2>
        <p className="text-[16px] text-muted">{rest.blogDescription}</p>
        <Author src={author.avatar} name={author.name} />
      </Card>
    </div>
  );
}
