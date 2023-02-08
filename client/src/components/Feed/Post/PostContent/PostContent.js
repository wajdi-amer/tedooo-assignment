import React from 'react';
import './styles.css';

const PostContent = ({ postData }) => {

  // storing only the first two images in posts that has more than 2 images
  if (postData.images.length > 2) {
    postData.images = postData.images.slice(0, 2);
  }

  return (
    <div className='post-content-container'>
      <div className='text-container'> <p>{postData.text}</p> </div>
      <div className='images-container'>
        {postData.images.map((image) => (
          <img src={image} alt='user upload' key={image}></img>
        ))}
      </div>
    </div>
  )
}

export default PostContent;
