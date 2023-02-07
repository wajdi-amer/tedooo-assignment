import React from 'react';

import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import PostFooter from './PostFooter/PostFooter';

import './styles.css';

const Post = ({ postData }) => {
  return (
    <div className='post-container'>
      <PostHeader postData={postData} key={postData.userId} />
      <PostContent postData={postData} />
      <PostFooter postData={postData} />
    </div>
  )
}

export default Post;
