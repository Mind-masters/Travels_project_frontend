import React from 'react';
import Modal from "./Modal/index";
import { Bounce } from 'react-activity';
import 'react-activity/dist/react-activity.css';

const LoadingSpinner = props => {
  return (
    <Modal
      show={true}
    >
      <div style={{ position:"absolute", top:0, left: 0, width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems:"center", backgroundColor: "rgb(255, 255, 255)" }}>
        <Bounce size="2rem" color="rgb(245, 218, 130)" />
      </div>
    </Modal>
  );
};

export default LoadingSpinner;
