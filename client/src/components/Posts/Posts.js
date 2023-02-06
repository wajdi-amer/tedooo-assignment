import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post/Post';

const baseURL = 'https://dev.tedooo.com/feed.json';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPosts(response.data.data);
        });
    }, []);

    console.log(posts);

    if (posts.length === 0) return (<h2>Cannot Find Posts...</h2>);

  return (
    <div>
        {posts?.map((post) => (
            <Post postData={post} />
        ))}
    </div>
  )
}

export default Posts;
