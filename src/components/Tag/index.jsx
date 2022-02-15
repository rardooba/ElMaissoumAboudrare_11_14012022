import React from 'react';
import "./index.css";

const Tag = ({content}) => {
    return (
        <div className='tag'>
            {content}
        </div>
    );
};

export default Tag;