import React, {useState, useEffect}from 'react';

import styles from './profileContent.module.css';
import MainHeader from "../../components/shared/UI/pagesHeaders/index";
import { AiFillEdit } from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../../contextAPI/AuthContext';
import UserPanel from './userPanel';

const ProfileComponet = (props) => {

  const [description, setDescription] = useState('The user has not provided an introduction yet');
  const [editMode, setEditMode] = useState(false);

  const Auth = useContext(AuthContext)
  console.log("user: ",props.Auth )

  if(!props.Auth)return

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation before updating the description state
    const newDescription = e.target.elements.description.value;
    setDescription(newDescription);
    setEditMode(false);
  };

  
  return (
    <div className={styles.main_container}>
        
      <MainHeader header="Profile"/>
        
      <UserPanel user={props.Auth.data} />
           
      <div className={styles.about_section}>
        <div className={styles.about_box}>
        <h1>About</h1> 
        <span onClick={handleEditClick}><AiFillEdit/></span>
        </div>
        {
          editMode ? (
            <form onSubmit={handleFormSubmit}>
            <textarea 
            className={styles.textbox} 
            name="description" 
            placeholder='description'
            value={description} 
            onChange={(e) => setDescription(e.target.value)} required />

            <div  className={styles.save_btn}>
            <button type="submit">Save</button>
            </div>
          </form>
          ):(
            
        <p>
          {description}
        </p>
          )
        }
      </div>

      {/**Hobbies */}
      <div className={styles.hobbies_section}>
        <h1>Hobbies</h1>

        <div className={styles.interest}>
          <p>Travelling</p>
          <p>Nature</p>
          <p>Exploration</p>
        </div>
      </div>
     
    </div>
  )
}

export default ProfileComponet
