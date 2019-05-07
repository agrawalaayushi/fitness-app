import React from 'react';

export const RatingStar = (props) => {
    const starPercentage = (props.avgReview / props.starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    const starStyle = {
        width: starPercentageRounded,
    };
    return(
        <div className="stars-outer">
            <div className="stars-inner" style={starStyle}></div>
        </div>
    )
}
