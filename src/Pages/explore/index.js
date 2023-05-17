import React from 'react'
import Card from "../../components/shared/UI/Card";
import styles from "./index.module.css";
import PlaceList from "./placeList";
import Filter from "./filter";
import MainHeader from "../../components/shared/UI/pagesHeaders/index";


const explore = (props) => {
  return (
    <Card>
      <div className={styles.container}>

        <MainHeader 
          header="Explore Places"
          paragraph="Travel around the world has become much easier with this community"
        />
        

        <div className={styles.main_content}>

          <div className={styles.filter_container}>
            <Filter />
          </div>

          <PlaceList />

        </div>

      </div>
    </Card>
  )
}

export default explore