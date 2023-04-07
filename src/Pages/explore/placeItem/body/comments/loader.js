import React from 'react'
import { Bounce } from 'react-activity';
import 'react-activity/dist/react-activity.css';



const Loader = () => {


  return (
    <div style={
        { 
            position: "absolute", 
            width: "100%", 
            height: "100%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
        }
    }>
        <Bounce size="2rem" color="#EE7D15" />
    </div>
  )
}

export default Loader