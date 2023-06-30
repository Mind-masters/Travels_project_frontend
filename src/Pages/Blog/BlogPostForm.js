import React, {useState} from 'react'
import styles from './blogpostForm.module.css';
import axios from 'axios';



const BlogPostForm = () => {

    const [image , setImage]= useState(null);
    const [title, setTitle]= useState('');
    const [content, setContent]= useState('');
    const [hashTag, setHashTag]= useState('');

    const handleImageChange = (e)=>{
        setImage(e.target.files[0]);
    }

    const handleTitleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleContentChange = (e)=>{
        setContent(e.target.value);
    }

    const handleHasTagChange = (e)=>{
        setHashTag(e.target.value);
    }

    const handleSubmit = (e)=>{

    // Create form data to send file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    formData.append('hashTag', hashTag);

    // try {
    //      //Make API request to save the blog post
    //     const response = await axios.post('api/post', formData);
    // // reset form fields     
    //     setImage(null);
    //     setTitle('');
    //     setContent('');
    //     setHashTag('');

    //     onPostCreated(response.data);
        
    // } catch (error) {
    //     console.log('error creating post:', error);
    // }

    };



  return (
    <form className="blog-post-form" onSubmit={handleSubmit}>
    <h2 className={styles.create}>Create a New Post</h2>
   
    
    <div className={styles.form_group}>
    <input className={styles.textInput}
      type="text"
      placeholder="Title"
      value={title}
      onChange={handleTitleChange}
      required
    />
    </div>

    <div className={styles.form_group}>
    <input className={styles.textInput}
      type="file"
      accept="image/*"
      id="image"
      onChange={handleImageChange}
    />    
    </div>
    <div className={styles.form_group}>
    <input className={styles.textInput}
      type="text"
      placeholder="HashTag"
      value={hashTag}
      onChange={handleHasTagChange}
      
    />
    </div>
    <div className={styles.form_group}>
    <textarea className={styles.textInput}
      placeholder="Content"
      value={content}
      onChange={handleContentChange}
      required
    ></textarea>
    </div>
    
    <button className={styles.submit} type="submit">Create Post</button>
  </form>
  )
}

export default BlogPostForm