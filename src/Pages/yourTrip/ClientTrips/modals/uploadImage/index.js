import React from 'react'
import { useState } from 'react';
import styles from "./upload_image.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../../../components/shared/UI/toast";


const UploadImage = (props) => {

  const [customURLs, setCustomURLs] = useState([]);

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];

  

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
  };

  const onSubmitHandler = () => {
    var validUrl = require('valid-url');
  
    if (validUrl.isUri(customURLs)){
      props.onSubmit(customURLs)
    } else {
      notify("Invalid url", "error");
    }

  }

  const handleChange = e => {
    e.preventDefault();

    // const index = e.target.id;
    // setArr(s => {
    //   const newArr = s.slice();
    //   newArr[index].value = e.target.value;

    //   return newArr;
    // });

    setCustomURLs(e.target.value)
  };

  return (
    <>
      {/* <div className={styles.inputList}>
        {arr.map((item, i) => {
          return (
            <TextField id={i} label="Enter url" value={item.value} onChange={handleChange} fullWidth variant="outlined" />

          );
        })}
      </div>
      <div className={styles.add_icon} onClick={addInput}>
        <AddIcon />
      </div> */}

      <TextField label="Enter url..." className={styles.textArea} onChange={handleChange} fullWidth variant="outlined" />

      <div className={styles.buttons}>
        <Button className={styles.cancel} onClick={props.onClose} variant="contained" color="success">Cancel</Button>
        <Button className={styles.submit} onClick={onSubmitHandler} variant="contained" color="success">Submit</Button>
      </div>
      
    </>
  )
}

export default UploadImage