import React, {useState}from 'react';
import axios from 'axios';
import {AdvancedImage } from '@cloudinary/react';


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