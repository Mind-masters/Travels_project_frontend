import React from 'react'

const GenderSelector = (props) => {

  const genderList = [
    "Women", "Man", "Other"
  ]

  const genderClickHandler = (gender) => {
    return props.onSubmit(gender);
  }

  return (
    <>
      <div>
        <ul>
          {genderList.map(option => <h1 key={option} onClick={genderClickHandler.bind(null,option)}>{option}</h1>)}
        </ul>
      </div>
    </>
  )
}

export default GenderSelector