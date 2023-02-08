import React from 'react';
import { useInView } from 'react-intersection-observer'; // used for firing an impression when user watches an item
import { useSearchParams } from 'react-router-dom'; 

import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import PostFooter from './PostFooter/PostFooter';

import './styles.css';

const Post = ({ postData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Checking if element (ref) is currently viewed (inView) and changing
  // the URL Search Params according to the element's userId and itemId passed through props
  const { ref, inView } = useInView({
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) setSearchParams({ userId: postData.userId, itemId: postData.id });
    }
  });

  return (
    <div className='post-container' ref={ref}>
      <PostHeader postData={postData} key={postData.userId} />
      <PostContent postData={postData} />
      <PostFooter postData={postData} />
    </div>
  )
}

export default Post;
