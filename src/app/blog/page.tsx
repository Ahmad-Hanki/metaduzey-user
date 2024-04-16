import Hero from "@/components/ui/Hero"
import BlogGrid from "./_components/BlogGrid"

const BlogPage = () => {
  return (
    <div>
        <Hero title="Blogs" path="anaSayfa => blog"/>
        <BlogGrid />
    </div>
  )
}

export default BlogPage