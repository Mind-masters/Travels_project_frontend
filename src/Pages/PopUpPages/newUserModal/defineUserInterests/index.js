import Button from '../../../../components/shared/UI/button/Button';
import React, { useState } from 'react'
import FlexBox from './interestsFlex';
import Header from "../header";

import { DEFAULT_OPTIONS } from './Data';

const UserInterests = (props) => {

  const [selectedInterests, setSelectedInterests] = useState([]);


  const submitHandler = () => {
    if(selectedInterests.length < 3)return

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
      

      <div style={{ margin: "14px auto"}}>
        <Button
          height="auto"  
          onSubmit={submitHandler} 
          color={`${selectedInterests.length < 3 ? "white" : "#EE7D15"}`} 
          border={`${selectedInterests.length < 3 ? "1px solid rgba(44, 60, 77, 1)" : "none"}`}
        >
          <h1 style={{ padding: "0.7rem", color: `${selectedInterests.length < 3 ? "#2C3C4D" : "white"}` }}>Continue</h1>
        </Button>
      </div>

    </div>

  )
}


export default UserInterests