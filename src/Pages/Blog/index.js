import React, { useState } from 'react'
import HeroSection from './HeroSection';
import styles from './blog.module.css'
import FeaturedPost from './FeaturedPost';

const Blog = ()=>{
return (
    <div className={styles.container}>
    <HeroSection/>
    <FeaturedPost/>
    </div>
)
}

export default Blog;