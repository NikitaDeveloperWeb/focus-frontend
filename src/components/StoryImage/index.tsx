import React from 'react';
import { Link } from 'react-router-dom';

interface StoryImageProps {
  id?: string;
  imageUrl: string;
  description?: string;
  published?: string;
  user?: string;
}

function StoryImage({ imageUrl, description, published, user, id }: StoryImageProps) {
  return (
    <span>
      <Link to={`/home/post/${id}`}>
        <li>
          <img src={imageUrl} alt="" />
        </li>
      </Link>
    </span>
  );
}

export default StoryImage;
