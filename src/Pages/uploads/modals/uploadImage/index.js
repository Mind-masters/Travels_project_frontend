import React from "react";
import photo_icon from "../../../../assets/retake_photo.png";
import "./style.css"


class ImageUpload extends React.Component {

  state = {
    mainState: this.props.curr_image ? "uploaded" : "initial", // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: this.props.curr_image
  };

  convertToBase64 = file =>{

    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        // resolve(fileReader.result)
        this.setState({
          mainState: "uploaded",
          selectedFile: [fileReader.result],
          imageUploaded: 1
        });
      }
      fileReader.onerror = error => {
        reject(error);
      }
    })

    
  }

  handleUploadClick = async(event) => {
    var file = event.target.files[0];

    await this.convertToBase64(file);

  };


  renderInitialState() {

    return (
      <React.Fragment>
        <div>
          <input
            accept="image/*"
            className="input"
            id="contained-button-file"
            multiple
            type="file"
            onChange={this.handleUploadClick}
          />
          <label htmlFor="contained-button-file">
            {/* <img src={photo_icon} alt="" /> */}
            <p className="add_photo_header">Add photo</p>
          </label>
        </div>
      </React.Fragment>
    );
  }

  
  renderUploadedState() { // in use
    return (
      <React.Fragment>
        <div>
          <img src={photo_icon} alt="" onClick={this.imageResetHandler} className="retake" />
          <img
            onClick={this.imageSubmitHandler}
            className={"media"}
            src={this.state.selectedFile}
            alt=""
          />
        </div>
      </React.Fragment>
    );
  }

  imageResetHandler = event => {
    this.setState({
      mainState: "initial",
      selectedFile: null,
      imageUploaded: 0
    });
  };

  imageSubmitHandler = event => {
    return this.props.onSubmit(this.state.selectedFile);
  };

  render() {

    return (
      <React.Fragment>
        <div className="media_container">
          {
            (
              this.state.mainState === "initial" && this.renderInitialState()
            ) 
            ||
            (
              this.state.mainState === "uploaded" && this.renderUploadedState()
            )
          }
        </div>
      </React.Fragment>
    );
  }
}

export default ImageUpload;
