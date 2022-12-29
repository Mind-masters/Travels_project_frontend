import React from 'react'
import Card from "../../components/shared/UI/Card";
import styles from "./index.module.css";
import PlaceList from "./placeList";
import Form from "./form-subtopic";

const explore = (props) => {
  return (
    <Card>
      <div className={styles.container}>
        <PlaceList data={["place 1", "place 2", "place 3"]} />
        <Form />
      </div>
    </Card>
  )
}

export default explore