import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post/Post';

import './styles.css';

const baseURL = 'https://dev.tedooo.com/feed.json';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPosts(response.data.data);
        });
    }, []);

    // In case there are no posts, the page will render a message.
    if (posts.length === 0) return (<h2>Cannot Find Posts...</h2>);

  return (
    <div className='posts-container'>
        {posts?.map((post) => (
            <Post postData={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts;
