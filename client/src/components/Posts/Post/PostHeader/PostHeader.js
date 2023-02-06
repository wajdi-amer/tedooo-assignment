import React from 'react';

import './styles.css';

const PostHeader = ({ postData }) => {
    return (
        <div className='post-header-container'>
            <img src={postData.avatar} className='avatar' alt='avatar'></img>
            <div className='info-container'>
                <h3 className='username'>{postData.username}</h3>
                <div>
                    <a href={`/shop/${postData.shopId}`}>{postData.shopName}</a> · {postData.date}
                </div>
            </div>
        </div>
    )
}

export default PostHeader;
