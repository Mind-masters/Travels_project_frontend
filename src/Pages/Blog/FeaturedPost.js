import React from 'react'
import  styles from './featuredpost.module.css';
import bannerimg from '../../assets/Blog/featured-1.jpg';
import bannerimg2 from '../../assets/Blog/recent-2.jpg';
import bannerimg3 from '../../assets/Blog/recent-1.jpg'
import Author1 from '../../assets/Blog/author-1.jpg';
import Author2 from '../../assets/Blog/author-2.jpg';
import Author3 from '../../assets/Blog/author-6.jpg';
import Author4 from '../../assets/Blog/author-4.jpg'
const FeaturedPost = () => {
  return (
    
  <div class={styles.wrapper}>
  
  <div class={styles.card}>
    
      <div class={styles.card_banner}>
        <p class={styles.category_tag}>Technology</p>
        <img class={styles.banner_img} src={bannerimg} alt=""/>
      </div>

      <div class={styles.card_body}>
        <p class={styles.blog_hashtag}>#Tech #Code</p>
        <h2 class={styles.blog_title}>New technology is not good or evil in and of itself</h2>
        <p class={styles.blog_description}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>

        <div class={styles.card_profile}>
          <img class={styles.profile_img} src={Author1} alt=''/>
          <div class={styles.card_profile_info}>
            <h3 class={styles.profile_name}>Eleanor Pea</h3>
            <p class={styles.profile_followers}>5.2k followers</p>
          </div>
        </div>
      </div>
    </div>

    <div class={styles.card}>
    
    <div class={styles.card_banner}>
      <p class={styles.category_tag}>Design</p>
      <img class={styles.banner_img} src={bannerimg2} alt=""/>
    </div>

    <div class={styles.card_body}>
      <p class={styles.blog_hashtag}>#Tech #Design</p>
      <h2 class={styles.blog_title}>Being unique is better than being perfect</h2>
      <p class={styles.blog_description}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>

      <div class={styles.card_profile}>
        <img class={styles.profile_img} src={Author3} alt=''/>
        <div class={styles.card_profile_info}>
          <h3 class={styles.profile_name}>Eleanor Pea</h3>
          <p class={styles.profile_followers}>5.2k followers</p>
        </div>
      </div>
    </div>
  </div>
  <div class={styles.card}>
    
    <div class={styles.card_banner}>
      <p class={styles.category_tag}>#Lifestyle</p>
      <img class={styles.banner_img} src={bannerimg3} alt=""/>
    </div>

    <div class={styles.card_body}>
      <p class={styles.blog_hashtag}>#Lifestyle #People</p>
      <h2 class={styles.blog_title}>Creating is a privilege but it’s also a gift</h2>
      <p class={styles.blog_description}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>

      <div class={styles.card_profile}>
        <img class={styles.profile_img} src={Author4} alt=''/>
        <div class={styles.card_profile_info}>
          <h3 class={styles.profile_name}>Eleanor Pea</h3>
          <p class={styles.profile_followers}>5.2k followers</p>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default FeaturedPost