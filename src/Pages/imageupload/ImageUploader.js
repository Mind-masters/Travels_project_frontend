import React from "react";

const WIDTH = 500;

const ImageUploader = () => {
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
        // Create a canvas element with a specific width and height
        const canvas = document.createElement("canvas");
        const ratio = WIDTH / image.width;
        canvas.width = WIDTH;
        canvas.height = image.height * ratio;

        // Get the 2D rendering context of the canvas
        const context = canvas.getContext("2d");

        // Draw the image on the canvas with the specified dimensions
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Convert the canvas content to a new base64-encoded image URL
        const newImageUrl = canvas.toDataURL("image/jpeg", 90);

        // Create a new image element with the new image URL
        const newImage = new Image();
        newImage.src = newImageUrl;

        // Append the new image to the "wrapper" element in the DOM
        document.getElementById("wrapper").appendChild(newImage);
      };
    };
  };

  return (
    <div>
      {/* File input element */}
      <input type="file" id="input" onChange={handleImageChange} />

      {/* Placeholder for the uploaded images */}
      <div id="wrapper"></div>
    </div>
  );
};

export default ImageUploader;
