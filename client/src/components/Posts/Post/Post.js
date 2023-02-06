import React from 'react';

import PostHeader from './PostHeader/PostHeader';

import './styles.css';

const Post = ({ postData }) => {
  return (
    <div className='post-container'>
      <PostHeader postData={postData} key={postData.userId}/>
    </div>
  )
}

export default Post;
