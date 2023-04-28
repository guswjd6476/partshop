import {Button, Input} from 'antd'
import { useState } from "react";
import axios from 'axios';
import ImagesGet from './ImagesGet';
function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadButtonClick = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    axios.post('/api/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  };

    return (
      <div>
        <Input type="file" onChange={handleFileInputChange} />
        <Button onClick={handleUploadButtonClick}>Upload Image</Button>
        <ImagesGet/>
      </div>
    );
  }
  
  export default FileUpload;