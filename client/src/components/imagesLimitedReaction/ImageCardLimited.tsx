import React from 'react';
import LockClosed from '@spectrum-icons/workflow/LockClosed';
import ThumbUp from '@spectrum-icons/workflow/ThumbUp';
import ThumbDown from '@spectrum-icons/workflow/ThumbDown';
import {Button} from '@adobe/react-spectrum'

interface ImageCardProps {
  id: number;
  url: string;
  onThumbsUp: () => void;
  onThumbsDown: () => void;
  thumbsUp: number;
  thumbsDown: number;
  isThumbUp: boolean;
  isThumbDown: boolean;
}

const ImageCardLimited: React.FC<ImageCardProps> = ({ id, url, onThumbsUp, onThumbsDown, thumbsUp, thumbsDown, isThumbUp, isThumbDown }) => {
  return (
    <div className='image'>
      <img src={url} alt={`Image ${id}`} />
      <div className='icons'>
        <div className='thumbs'>
          <Button variant="primary" isDisabled={isThumbUp} onPress={onThumbsUp}><ThumbUp /> {thumbsUp}</Button>
        </div>
        <div className='thumbs'>
          <Button variant="primary" isDisabled={isThumbDown} onPress={onThumbsDown}> <ThumbDown />{thumbsDown}</Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCardLimited;