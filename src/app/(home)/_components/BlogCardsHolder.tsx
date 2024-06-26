import getBlogs from "@/actions/getBlogs";
import BlogsCard from "@/components/BlogsCard";

const BlogCardsHolder = async () => {
    
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col items-center gap-5">
        <p className="font-bold">Bütün Blog</p>
        <p>
          Uzman Psikologlarımız tarafından kaleme alınan günlük hayatınızda
          faydalı olabilecek psikolojiye dair yazılar
        </p>
      </div>
      <BlogsCard num={true} />
    </div>
  );
};

export default BlogCardsHolder;
