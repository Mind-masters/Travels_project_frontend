import React, { useState } from 'react'
import HeroSection from './HeroSection';
import styles from './blog.module.css'
import FeaturedPost from './FeaturedPost';
import BlogPostForm from './BlogPostForm';

const Blog = ()=>{
return (
    <div className={styles.container}>
    <HeroSection/>
    <FeaturedPost/>
    <BlogPostForm/>
    </div>
)
}

export default Blog;