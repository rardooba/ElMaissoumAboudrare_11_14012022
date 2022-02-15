import React from 'react';
import "./index.css";

const Rate = ({fill}) => {
    let stars = []

    for (let i = 0; i < 5; i++) {
        i < fill ? stars.push("fas fa-star fill") : stars.push("fas fa-star") 
    }

    return (
        <div className='rate'>
            {stars.map((star, index) => (
                <span key={index} className={star}></span>
            ))}
        </div>
    );
};

export default Rate;