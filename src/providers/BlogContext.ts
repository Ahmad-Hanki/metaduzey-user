
import { Blog } from "@/types/types";
import { Dispatch, SetStateAction, createContext } from "react";

interface BlogsContextType {
    blogs : Blog[];
    setBlogs: Dispatch<SetStateAction<Blog[]>>
}

const blogs:BlogsContextType = {
    blogs:[],
    setBlogs: () => {}
}

const BlogsContext = createContext(blogs);
export default BlogsContext