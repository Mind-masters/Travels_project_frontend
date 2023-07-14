import { fetchUserPlaces } from '../../components/utils/places/fetchPlaces';
import LoadingSpinner from '../../components/shared/UI/LoadingSpinner';
import MainHeader from '../../components/shared/UI/pagesHeaders';
import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../../contextAPI/AuthContext';
import Card from "../../components/shared/UI/Card";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import styles from "./yourTrip.module.css";
import MyPlaces from './myPlaces';

const YoutTrip = () => {

  const navigate = useNavigate();

  const [userPlaces, setUserPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const Author = useContext(AuthContext);



  useEffect(() => {
    
    const fetchAuthPlaces = async() => {
      
      if(!Author.authenticatedUser || !Author.isLoggedIn) return 

      const author_places = await fetchUserPlaces(Author.authenticatedUser.token.access_token)

      if(!author_places.status){
        Author.logout();
        return navigate("/");
      }

      setUserPlaces(author_places.data && author_places.data.length);
      setIsLoading(false);
    } 


    fetchAuthPlaces();


  }, [])

  return (
    <Card>

      { 
        isLoading ? <LoadingSpinner /> :
        
        <div className={styles.container}>
          
          <MainHeader 
            header="My Places"
          />

          <MyPlaces numberOfPlaces={userPlaces} />
          
        </div>
      }
      
    </Card>
  )
}

export default YoutTrip