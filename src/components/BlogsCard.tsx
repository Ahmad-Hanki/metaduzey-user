'use client'
import { Blog } from "@/types/types";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { shortenSummary } from "@/lib/ShoertenSummery";
import { useContext, useEffect } from "react";
import BlogsContext from "@/providers/BlogContext";

interface BlogsCard {
  num?: boolean;
}
const BlogsCard = ({ num }: BlogsCard) => {
  const { blogs:data } = useContext(BlogsContext);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex-1 grid grid-cols-1 xl:grid-cols-2  gap-5 justify-center">
        {data.map((blog, i) => {
          if (num) {
            if (i >= 4) return null;
          }

          return (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <Card className="flex gap-3 pb-5">
                <CardContent>
                  <div className="relative overflow-hidden aspect-[1/1.5] w-40 sm:w-44 md:w-48 xl:w-52 ">
                    <Image
                      src={blog.imageUrl}
                      fill
                      alt="photo"
                      className="object-cover object-center rounded-sm"
                    />
                  </div>
                </CardContent>
                <div className="flex flex-col items-center gap-3 pt-10 pr-3">
                  <CardTitle className="text-lg md:text-2xl">
                    {blog.title}
                  </CardTitle>

                  <Separator />

                  <p>{shortenSummary(blog.summery)}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link className="btn hover:text-white mx-auto" href={"/blog"}>
          Show More
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
