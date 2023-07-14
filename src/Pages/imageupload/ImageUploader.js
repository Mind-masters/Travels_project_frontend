import React, { useState } from "react";

const MAX_WIDTH = 300;
const MAX_HEIGHT = 300;

const ImageUploader = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  // Event handler for file input change
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onload = (event) => {
      // Retrieve the base64-encoded image URL
      const image_url = event.target.result;

      // Create a new image element and set the source URL
      const image = new Image();
      image.src = image_url;

      image.onload = () => {
        // Calculate the new dimensions while maintaining the aspect ratio
        let newWidth = image.width;
        let newHeight = image.height;

        if (image.width > MAX_WIDTH) {
          newWidth = MAX_WIDTH;
          newHeight = (image.height * MAX_WIDTH) / image.width;
        }

        if (newHeight > MAX_HEIGHT) {
          newHeight = MAX_HEIGHT;
          newWidth = (newWidth * MAX_HEIGHT) / newHeight;
        }

        // Create a canvas element with the new dimensions
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Get the 2D rendering context of the canvas
        const context = canvas.getContext("2d");

        // Draw the image on the canvas with the new dimensions
        context.drawImage(image, 0, 0, newWidth, newHeight);

        // Convert the canvas content to a Blob object with reduced size
        canvas.toBlob((blob) => {
          // Create a new FileReader instance to read the Blob content
          const reader = new FileReader();

          reader.onloadend = () => {
            // Retrieve the base64-encoded image URL with reduced size
            const newImageUrl = reader.result;

            // Add the new image URL to the uploadedImages state
            setUploadedImages((prevImages) => [...prevImages, newImageUrl]);
          };
          console.log(reader)
          // Read the Blob content as a data URL
          reader.readAsDataURL(blob);
        }, "image/jpeg", 0.9); // Use JPEG format with 90% quality
      };
    };
  };

  return (
    <div>
      {/* File input element */}
      <input type="file" id="input" onChange={handleImageChange} />

      {/* Placeholder for the uploaded images */}
      <div id="wrapper">
        {uploadedImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Uploaded ${index}`} />
        ))}
      </div>

import React, {useState}from 'react';
import axios from 'axios';


const CloudinaryImg = () => {
    const [selectedImage, setSelectedImage] = useState([]);
    const [imageData, setImageData] = useState("");

    const uploadImage = ()=>{
        const formData = new FormData()
        formData.append('file', selectedImage)
        formData.append('upload_preset', 'e0rbdj0k')
console.log("ok")
        const postImage = async()=>{
            try {
                const response = await axios.post("https://api.cloudinary.com/v1_1/dvmptmthb/upload", formData)
                console.log("hey: ")
                // setImageData(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        postImage()
    }

  return (
    <div>CloudinaryImg
        <div>
        <input
        type='file'
        name='file'
        id='file'
        onChange={(e)=> setSelectedImage(e.target.files[0])}/>
        <button onClick={uploadImage} >sendin</button>
        </div>

        {/* <div>
            
            <AdvancedImage cloudName="dvmptmthb" publicId={`https://res.cloudinary.com/dvmptmthb/image/upload/v1688469581/${imageData.public_id}`}/>
           
        </div> */}
    </div>
  )
}

export default CloudinaryImg