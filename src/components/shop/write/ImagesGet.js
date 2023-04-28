import { useEffect, useState } from 'react';
import axios from 'axios';

function ImagesGet() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('/api/images')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img src={image.url} key={image.id} />
      ))}
    </div>
  );
}

export default ImagesGet;