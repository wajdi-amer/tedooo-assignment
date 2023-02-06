import React from 'react';
import moment from 'moment';

import './styles.css';

const PostHeader = ({ postData }) => {

    const dateTimeAgo = moment(new Date(postData.date)).fromNow();
    return (
        <div className='post-header-container'>
            <img src={postData.avatar} className='avatar' alt='avatar'></img>
            <div className='info-container'>
                <h3 className='username'>{postData.username}</h3>
                <div>
                    <a href={`/shop/${postData.shopId}`}>{postData.shopName}</a> · <span className='date'>{dateTimeAgo}</span>
                </div>
            </div>
        </div>
    )
}

export default PostHeader;
