import React, { useState } from 'react';
import likesIcon from '../../../../images/likes-count.png';
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';
import { IconContext } from "react-icons";

import './styles.css';

const PostFooter = ({ postData }) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }

    return (
        <div className='post-footer-container'>
            <div className='info-part'>
                <div>
                    <img src={likesIcon} alt='green like icon'></img> {postData.likes} Likes
                </div>
                <div>{postData.comments} Comments</div>
            </div>

            <hr />

            <div className='actions-part'>
                {liked
                    ? <div className='action-div' onClick={handleLike}>
                        <IconContext.Provider value={{ size: '1.4em', color: 'blue' }}>
                            <AiOutlineLike />
                        </IconContext.Provider>
                        &nbsp;
                        <p className='blue-text'>Like</p>
                    </div> :
                    <div className='action-div' onClick={handleLike}>
                        <IconContext.Provider value={{ size: '1.4em' }}>
                            <AiOutlineLike />
                        </IconContext.Provider>
                        &nbsp;
                        <p>Like</p>
                    </div>}
                <div className='action-div'>
                    <IconContext.Provider value={{ size: '1.4em' }}>
                        <AiOutlineComment />
                    </IconContext.Provider>
                    &nbsp;
                    <p>Comment</p>
                </div>
            </div>
        </div>
    )
}

export default PostFooter;
