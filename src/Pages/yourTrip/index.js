import React, { useEffect, useContext, useState } from 'react'
import Card from "../../components/shared/UI/Card";
import { AuthContext } from '../../contextAPI/AuthContext';
import TripList from './Trips/tripList';
import YourTripWrapper from "../../components/shared/UI/tripList/wrapper";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";
import LoadingSpinner from '../../components/shared/UI/LoadingSpinner';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../components/shared/UI/toast";
// importing logos
import life_is_good_logo from "../../assets/your-trip/life_is_good.png";
import { fetchUserPlaces } from '../../components/utils/places/fetchPlaces';
import FellowTraveler from './FellowTraveler';

const YoutTrip = () => {

  const navigate = useNavigate();

  const [userPlaces, setUserPlaces] = useState([]);
  const [onRefresh, setOnRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const Author = useContext(AuthContext);

  const onRefreshHandler = () => {
    setOnRefresh(!onRefresh);
    setIsLoading(true)
  }



  useEffect(() => {
    
    const fetchAuthPlaces = async() => {
      
      if(!Author.authenticatedUser || !Author.isLoggedIn) return navigate("/auth/login")

      const author_places = await fetchUserPlaces(Author.authenticatedUser.token.access_token)

      if(!author_places.status){
        notify(author_places.message, "error");
        navigate("/");
      }

      setUserPlaces(author_places.data)
      setIsLoading(false);
    } 


    fetchAuthPlaces();


  }, [onRefresh])

  return (
    <Card>

      { isLoading ? <LoadingSpinner /> :
        <div className={styles.container}>
          <div className={styles.life_is_good_image}>
            <img src={life_is_good_logo} alt="life is good" />
          </div>

          <YourTripWrapper header={"Your places"}>
            <TripList data={userPlaces} user_places={true} onRefresh={onRefreshHandler} />
          </YourTripWrapper>

          {/* <YourTripWrapper header={"Matches your interests"}>
            <TripList data={userPlaces} user_places={false} />
          </YourTripWrapper> */}

          <FellowTraveler />
          
        </div>
      }
      
      
    </Card>
  )
}

export default YoutTrip