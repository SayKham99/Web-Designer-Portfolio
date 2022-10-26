import React from 'react';
import Layout from "../layout/layout";
import BlogHeader from "../components/Blog/header/blogHeader";
import Posts from "../components/Blog/posts/posts";

function Blog() {
    return (
        <Layout>
            <BlogHeader/>
            <Posts/>
        </Layout>
    );
}

export default Blog;