import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import FlexBox from './interestsFlex';
import Header from "../header";

import { DEFAULT_OPTIONS } from './Data';

const UserInterests = (props) => {

  const [selectedInterests, setSelectedInterests] = useState([]);


  const submitHandler = () => {
    if(selectedInterests.length < 2)return

    return props.onSubmit(selectedInterests)
  }

  const onSkipHandler = () => props.onSubmit(DEFAULT_OPTIONS.map(element => element));

  const stateChangeHandler = (array) => {
    setSelectedInterests(array);
  }

  


  return (
    <div style={{ display:"flex", flexDirection: "column" }}>
      
      <Header 
        mainText={"Interests"} 
        subText={"Pick 3 or more things you'd like to see and explore"} 
        onSkip={onSkipHandler}
        page={1}
      />

      <FlexBox existing_data={props.existing_data} data={DEFAULT_OPTIONS} onChangeState={stateChangeHandler} />

      <Button  
        style={{ width: "50%", borderRadius: 20, marginRight: "auto", marginLeft: "auto", backgroundColor: "#FFBD59", display: `${selectedInterests.length > 2 ? "block" : "none"}` }}
        onClick={submitHandler} 
        variant="contained" 
      >
        Continue
      </Button>

    </div>

  )
}


export default UserInterests