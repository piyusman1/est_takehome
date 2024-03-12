import React, { useEffect, useState } from 'react';
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import axios from 'axios';
import ImageCardLimited from './ImageCardLimited';
import './Images.css'

interface Image {
  id: number;
  url: string;
  thumbsUp: number;
  thumbsDown: number;
}

const ListImagesLimited: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [thumbsUpImagesId, setThumbsUpImagesId] = useState<number[]>([]);
  const [thumbsDownImagesId, setThumbsDownImagesId] = useState<number[]>([]);
  useEffect(() => {
    axios.get('http://localhost:5000/images')
    .then((response) => setImages(response.data))
    .catch((error) => console.error('Error fetching images:', error));
  }, []);

  const handleThumbsUp = (id: number) => {
    axios.put(`http://localhost:5000/thumbs-up/${id}?alreadyReacted=${thumbsDownImagesId.includes(id)}`)
    .then((response) => {
      updateThumbsUp(id, response.data.thumbsUp);
      updateThumbsDown(id, response.data.thumbsDown);
      setThumbsUpImagesId([...thumbsUpImagesId, id])
      setThumbsDownImagesId(thumbsDownImagesId.filter((item) => item !== id))
    })
    .catch((error) => console.error('Error updaitng image:', error));
  };

  const handleThumbsDown = (id: number) => {
    axios.put(`http://localhost:5000/thumbs-down/${id}?alreadyReacted=${thumbsUpImagesId.includes(id)}`)
    .then((response) => {
      updateThumbsDown(id, response.data.thumbsDown);
      updateThumbsUp(id, response.data.thumbsUp);
      setThumbsDownImagesId([...thumbsDownImagesId, id])
      setThumbsUpImagesId(thumbsUpImagesId.filter((item) => item !== id))
    })
    .catch((error) => console.error('Error updating image:', error));
  };

  const updateThumbsUp = (id: number, newUpCount: number) => {
    setImages((prevImages) =>
      prevImages.map((image) => (image.id === id ? { ...image, thumbsUp: newUpCount } : image))
    );
  };

  const updateThumbsDown = (id: number, newDownCount: number) => {
    setImages((prevImages) =>
      prevImages.map((image) => (image.id === id ? { ...image, thumbsDown: newDownCount } : image))
    );
  };

  return (
    <div className="image-container">
      {images.map((image) => (
        <ImageCardLimited
          key={image.id}
          id={image.id}
          url={image.url}
          thumbsUp={image.thumbsUp}
          thumbsDown={image.thumbsDown}
          onThumbsUp={() => handleThumbsUp(image.id)}
          onThumbsDown={() => handleThumbsDown(image.id)}
          isThumbUp={thumbsUpImagesId.includes(image.id)}
          isThumbDown={thumbsDownImagesId.includes(image.id)}
        />
      ))}
    </div>
  );
};

export default ListImagesLimited;