import React from 'react'
import SeeMore from './SeeMore'
import styles from "./index.module.css";


const SeeMoreContent = () => {
  return (
    <div className={styles.container}>
      <h2>
        <SeeMore>
          GeeksforGeeks: A Computer Science portal for geeks. 
          It contains well written, well thought and well explained
          computer science, programming articles and quizzes. 
          It provides a variety of services for you to learn, so thrive
          and also have fun! Free Tutorials, Millions of Articles, Live, 
          Online and Classroom Courses ,Frequent Coding Competitions,
          Webinars by Industry Experts, Internship opportunities, and Job
          Opportunities. Knowledge is power!
        </SeeMore>
      </h2>
    </div>
  )
}

export default SeeMoreContent