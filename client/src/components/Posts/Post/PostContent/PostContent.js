import React from 'react';
import './styles.css';

const PostContent = ({ postData }) => {

  if (postData.images.length > 2) {
    postData.images = postData.images.slice(0, 2);
  }

  console.log(postData.images);

  return (
    <div className='post-content-container'>
      <div className='text-container'> <p>{postData.text}</p> </div>
      <div className='images-container'>
        {postData.images.map((image) => (
          <img src={image} alt='user upload'></img>
        ))}
      </div>
    </div>
  )
}

export default PostContent;
