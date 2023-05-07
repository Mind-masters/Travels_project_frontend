import { fetchUserPlaces } from '../../components/utils/places/fetchPlaces';
import LoadingSpinner from '../../components/shared/UI/LoadingSpinner';
import MainHeader from '../../components/shared/UI/pagesHeaders';
import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../../contextAPI/AuthContext';
import Footer from "../../components/shared/UI/Footer/Footer";
import Card from "../../components/shared/UI/Card";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import FellowTraveler from "./FellowTraveler";
import styles from "./yourTrip.module.css";
import ClientTrips from './ClientTrips';

const YoutTrip = () => {

  const navigate = useNavigate();

  const [userPlaces, setUserPlaces] = useState([]);
  const [onRefresh, setOnRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const Author = useContext(AuthContext);

  const onRefreshHandler = () => {
    setOnRefresh(!onRefresh);
    setIsLoading(true)
  }



  // useEffect(() => {
    
  //   const fetchAuthPlaces = async() => {
      
  //     if(!Author.authenticatedUser || !Author.isLoggedIn) return navigate("/auth/login")

  //     const author_places = await fetchUserPlaces(Author.authenticatedUser.token.access_token)

  //     if(!author_places.status){
  //       notify(author_places.message, "error");
  //       navigate("/");
  //     }

  //     setUserPlaces(author_places.data)
  //     setIsLoading(false);
  //   } 


  //   fetchAuthPlaces();


  // }, [onRefresh])

  return (
    <Card>

      { isLoading ? <LoadingSpinner /> :
        <div className={styles.container}>
          
          <MainHeader 
            header="Your Tour"
          />

          <ClientTrips />

          <FellowTraveler />
          
        </div>
      }
      
      <Footer />

    </Card>
  )
}

export default YoutTrip