import React from 'react'
import PlaceItem from "./placeItem";


const PlaceList = ({Places}) => {


  return (
    <>
        {Places.map(place => <PlaceItem item={place} />)}
    </>
  )
}

export default PlaceList