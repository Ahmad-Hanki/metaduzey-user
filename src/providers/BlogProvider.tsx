'use client'

import React, {  useState, Dispatch, SetStateAction } from 'react';
import { Blog } from '@/types/types';
import BlogsContext from './BlogContext';
interface BlogContextType {
    blogs: Blog[];
    setBlogs: Dispatch<SetStateAction<Blog[]>>;
}

interface BlogsProviderProps {
    children: React.ReactNode;
}

const BlogsProvider: React.FC<BlogsProviderProps> = ({ children }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const BlogsContextValue: BlogContextType = {
        blogs,
        setBlogs,
    };

    return (
        <BlogsContext.Provider value={BlogsContextValue}>
            {children}
        </BlogsContext.Provider>
    );
};

export { BlogsProvider };
