import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"
import InitialState from "./InitialState";
import UploadedState from "./UploadedState";

const ImageUpload = (props) => {

  const [file, setFile] = useState(props.curr_image);
  const [mainState, setMainState] = useState(props.curr_image ? "uploaded" : "initial",) // initial, search, gallery, uploaded
  const [previewUrl, setPreviewUrl] = useState();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
      setMainState("uploaded")
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const handleUploadClick = async(event) => {
    if (!(event.target.files && event.target.files.length === 1)) return

    const file = event.target.files[0];
    setFile(file);
  };

  const imageResetHandler = () => {
    setMainState("initial");
    setFile(null);
    setPreviewUrl(null);
  };

  const imageSubmitHandler = () => {
    return props.onSubmit(file);
  };

  return (
    <React.Fragment>
      <div className={styles.media_container}>
        {
          (
            mainState === "initial" && <InitialState onChangeFile={handleUploadClick}/>
          ) 
          ||
          (
            mainState === "uploaded" && previewUrl && <UploadedState imageResetHandler={imageResetHandler} imageSubmitHandler={imageSubmitHandler} file_base64={previewUrl} />
          )
        }
      </div>
    </React.Fragment>
  )
}

export default ImageUpload;
