import React, { useState } from 'react';
import './LikeDislike.css';
import { IoHeart, IoHeartOutline, IoHeartDislikeSharp, IoHeartDislikeOutline } from "react-icons/io5";

function LikeDislike({like, dislike}) {
    const [state, setState] = useState(0);

    const liked = () => {
        if(state === 1) {
            setState(0);
        }
        else {
            setState(1);
        }
    }

    const disliked = () => {
        if(state === -1) {
            setState(0);
        }
        else {
            setState(-1);
        }
    }

    const getClassLike = () => {
        if(state === 1) {
            return "like__container liked";
        }
        else {
            return "like__container";
        }
    }

    const getClassDislike = () => {
        if(state === -1) {
            return "dislike__container disliked";
        }
        else {
            return "dislike__container";
        }
    }

    const getNumberOfLike = () => {
        if (state === 1) {
            return like + 1
        }
        else {
            return like;
        }
    }

    const getNumberOfDislike = () => {
        if (state === -1) {
            return dislike + 1
        }
        else {
            return dislike;
        }
    }

    const getPourcentageOfLike = () => {
        return (getNumberOfLike() / (getNumberOfLike() + getNumberOfDislike())) * 50
    }


    return ( 
        <div className="toggle__container">
            <div className={getClassLike()} onClick={() => liked()}>
                { (state !== 1 && <IoHeartOutline/>) || (state === 1 && <IoHeart/>)}
                <span>{getNumberOfLike()}</span>
            </div>
            <div className={getClassDislike()} onClick={() => disliked()}>
                { (state !== -1 && <IoHeartDislikeOutline/>) || (state === -1 && <IoHeartDislikeSharp/>)}
                <span>{getNumberOfDislike()}</span>
            </div>
            <div className="jauge__container">
                <div className="jauge__like" style={{width: getPourcentageOfLike()}}>

                </div>
            </div>
        </div>
     );
}

export default LikeDislike;