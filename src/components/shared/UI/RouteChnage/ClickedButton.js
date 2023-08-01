import React from 'react'
import ReactGA from 'react-ga';

const ClickedButton = () => {
    ReactGA.event({
        category: 'User',
        action: 'Clicked the button',
      });
  return (
    <div>
      
    </div>
  )
}

export default ClickedButton
