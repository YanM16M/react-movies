import React from 'react';
import './Card.css';
import LikeDislike from './LikeDislike';
import { motion } from "framer-motion"

function Card({info, onDeleteCard}) {
    return ( 
        <motion.div 
            className="card__container"
            whileHover={{
                scale: 1.1,
                
            }}
        >
            <label onClick={onDeleteCard}>x</label>
            <div className="image__container">
                <img src={"./images/" + info.title + ".jpg"} alt="" />
            </div>
            <div className="title__container">
                <h1>{info.title}</h1>
                <div className="like-dislike__container">
                    <LikeDislike like={info.likes} dislike={info.dislikes}></LikeDislike>
                </div>
            </div>
            <h4>{info.category}</h4>
        </motion.div>
     );
}

export default Card;