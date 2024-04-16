import Hero from "@/components/ui/Hero"
import BlogGrid from "./_components/BlogGrid"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs",
  }; 
const BlogPage = () => {
    
  return (
    <div>
        <Hero title="Blogs" path="anaSayfa => blog"/>
        <BlogGrid />
    </div>
  )
}

export default BlogPage