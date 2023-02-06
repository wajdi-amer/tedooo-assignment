import React from 'react';

const Post = ({ postData }) => {
  return (
    <div>
        <h1>{postData.username}</h1>
        <p>{postData.text}</p>
    </div>
  )
}

export default Post;
