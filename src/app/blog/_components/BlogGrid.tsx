"use client";

import Container from "@/components/ui/Container";
import { formatDate } from "@/lib/dateFormatter";
import BlogsContext from "@/providers/BlogContext";
import Image from "next/image";
import { useContext } from "react";

const BlogGrid = () => {
  const { blogs } = useContext(BlogsContext);
  return (
    <div className="bg-slate-100 w-full py-10">
      <Container>
        <div className="grid grid-cols-1 gap-10 w-full ">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className="flex flex-col lg:flex-row gap-7">
                <div className="text-center space-y-7">
                  <div className="relative overflow-hidden shadow-sm aspect-[1/1.5] w-56 md:w-64 xl:w-80 mx-auto">
                    <Image
                      fill
                      alt="photo"
                      className=" object-contain object-center"
                      src={blog.imageUrl}
                    />
                  </div>
                  <h1 className="lg:hidden text-2xl">{blog.title}</h1>
                </div>
                <div className="hidden lg:block w-[1px] h-full bg-black/10 " />
                <div className="flex flex-col gap-4 items-center lg:items-start lg:pl-10">
                  <div className="hidden lg:block">
                    <h1 className="text-3xl">{blog.title}</h1>
                  </div>
                  <div className="flex gap-1">
                    <p>{blog.summery}</p>
                  </div>

                  <div className="flex gap-1">
                    <p className="font-bold">Category:</p>
                    {blog.blogCategories.map((category, index) => {
                      return (
                        <p key={category.category.id}>
                          {category.category.name}{" "}
                          {index !== blog.blogCategories.length - 1 && (
                            <span>,</span>
                          )}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex gap-1 text-black/50">
                    <p>{formatDate(blog.createdAt)}</p>
                    <p>-</p>
                    <p>{blog.yazan}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default BlogGrid;
