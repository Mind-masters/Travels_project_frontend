import React from "react";
import photo_icon from "../../../../assets/photo_icon.png";
import "./style.css"


class ImageUpload extends React.Component {

  state = {
    mainState: "initial", // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: null
  };

  handleUploadClick = event => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);
    console.log("pasirinktas failas: ", file);
    console.log("isgrynintas url: ", url);

    reader.onloadend = function(e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(this);

    this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
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
            <p className="add_photo">Add photo</p>
          </label>
        </div>
      </React.Fragment>
    );
  }

  
  renderUploadedState() { // in use

    return (
      <React.Fragment>
        <div onClick={this.imageResetHandler}>
          <img
            className={"media"}
            src={this.state.selectedFile}
            alt=""
          />
        </div>
      </React.Fragment>
    );
  }

  imageResetHandler = event => {
    console.log("Click!");
    this.setState({
      mainState: "initial",
      selectedFile: null,
      imageUploaded: 0
    });
  };

  render() {

    return (
      <React.Fragment>
        <div className={"root"}>
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
