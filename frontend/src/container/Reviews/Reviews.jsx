import React, { useEffect, useState } from 'react';

import './Reviews.scss';
import { images } from '../../constants';
import {motion} from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';

import { urlFor, client } from '../../client';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const review = reviews[currentIndex];

    useEffect(() => {
        const reviews = '*[_type == "reviews"]';
    
        client.fetch(reviews).then((data) => {
            setReviews(data);
        });
    }, [])

    const handleClick = (index) => {
        console.log("Index set to " + index);
        setCurrentIndex(index);
        console.log("Index set to " + index);
    }
    

    return (
        <>
            {reviews.length && (
                <>
                    <div className="app__review-item app__flex">
                        <img src={urlFor(review.imageurl)} alt="review"/>
                        <div className="app__review-content">
                            <p className="p-text">{review.feedback}</p>
                            <div>
                                <h4 className="bold-text">{review.name}</h4>
                                <h5 className="p-text">{review.company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__review-btns app__flex">
                        <div className="app__flex" onClick={()=>handleClick(currentIndex === 0 ? reviews.length-1 : currentIndex-1)}>
                            <HiChevronLeft/>
                        </div>
                        <div className="app__flex" onClick={()=>handleClick(currentIndex === reviews.length-1 ? 0 : currentIndex+1)}>
                            <HiChevronRight/>
                        </div>
                    </div>
                </>
            )}
        </>
    );

}

export default AppWrap(MotionWrap(Reviews, 'app__reviews'), 'reviews', "app__primarybg");