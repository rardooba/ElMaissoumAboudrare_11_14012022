import React from 'react';
import "./index.css";

const Host = ({name, img}) => {

    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]

    console.log(firstName, lastName);
    return (
        <div className='host'>
            <p>
                <span>{firstName ? firstName : ""}</span>
                <span>{lastName ? lastName : ""}</span>
            </p>
            <img src={img} alt={name} />
        </div>
    );
};

export default Host;