import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller'; // used for loading only 6 posts at once

import Post from './Post/Post';

import './styles.css';

const baseURL = 'https://dev.tedooo.com/feed.json';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [postsScrollIndex, setPostsScrollIndex] = useState(0); // index of the current 6 posts shown

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPosts(response.data.data);
        });
    }, []);


    const handleLoadMore = () => {
        if (posts?.length > postsScrollIndex) setPostsScrollIndex(postsScrollIndex + 6);
    }

    // In case there are no posts, the page will render a message.
    if (posts.length === 0) return (<h2>Cannot Find Posts...</h2>);

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={true || false}
        >
            <div className='posts-container'>
                {posts?.map((post, i) => {
                    if (i < postsScrollIndex) return (<Post postData={post} key={post.id} />)
                }
                )}
            </div>
        </InfiniteScroll>
    )
}

export default Feed;
