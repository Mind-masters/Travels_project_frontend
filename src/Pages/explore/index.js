import React from 'react'
import Card from "../../components/shared/UI/Card";
import styles from "./index.module.css";
import PlaceList from "./placeList";
import Form from "./form-subtopic";

const explore = (props) => {
  return (
    <Card>
      <div className={styles.container}>
        <PlaceList />
        {/* <Form /> */}
      </div>
    </Card>
  )
}

export default explore