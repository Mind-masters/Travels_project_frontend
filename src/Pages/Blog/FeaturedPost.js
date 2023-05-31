import React, { Fragment, useState, useEffect } from 'react'
import  styles from './featuredpost.module.css';
import bannerimg from '../../assets/Blog/featured-1.jpg';
import bannerimg2 from '../../assets/Blog/recent-2.jpg';
import bannerimg3 from '../../assets/Blog/recent-1.jpg'
import Author1 from '../../assets/Blog/author-1.jpg';
import Author2 from '../../assets/Blog/author-2.jpg';
import Author3 from '../../assets/Blog/author-6.jpg';
import Author4 from '../../assets/Blog/author-4.jpg'
import axios from 'axios';
import BlogPostForm from './BlogPostForm';

const FeaturedPost = () => {
const [posts, setPosts]= useState({})

useEffect(()=>{
fetchPosts();
},[])

const fetchPosts = async () => {
  try {
    const response = await axios.get('/api/posts');
    setPosts(response.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const handlePostCreated = (newPost) => {
  setPosts([...posts, newPost]);
};

  return (
    <Fragment>
  <h2 className={styles.write_post}>Write Post</h2>
  <div className={styles.wrapper}>
    {/* <BlogPostForm onPostCreated={handlePostCreated} />
    {
      posts.map((post)=>(
      <div key={post.id}>
        <h2>{post.title}</h2>
      </div>
      ))} */}
    <div className={styles.card}>
      <div className={styles.card_banner}>
        <p className={styles.category_tag}>Technology</p>
        <img className={styles.banner_img} src={bannerimg} alt=""/>
      </div>

      <div className={styles.card_body}>
        <p className={styles.blog_hashtag}>#Tech #Code</p>
        <h2 className={styles.blog_title}>New technology is not good or evil in and of itself</h2>
        <p className={styles.blog_description}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>

        <div className={styles.card_profile}>
          <img className={styles.profile_img} src={Author1} alt='post'/>
          <div className={styles.card_profile_info}>
            <h3 className={styles.profile_name}>Eleanor Pea</h3>
            <p className={styles.profile_followers}>5.2k followers</p>
          </div>
        </div>
      </div>
    </div>

    </div>
    </Fragment>
  )
}

export default FeaturedPost