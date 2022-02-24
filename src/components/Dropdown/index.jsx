
//! Sans la balise <DETAILS> en React
//import React, { useState } from 'react';
import "./index.css";

const Dropdown = ({ title, children }) => {

    //! Sans la balise <DETAILS> en React
    //const [isOpen, setIsOpen] = useState(false)


    return (
        <details className="dropdown">
          <summary>{title}</summary>
          {children}
        </details>
    );


    //! Sans la balise <DETAILS> en React
    // return (
    //     <div className="dropdown">
    //     <h3 onClick={() => setIsOpen(isOpen ? false : true)}>
    //       {title}
    //       <span
    //         className={isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}
    //       ></span>
    //     </h3>
    //     <div className={`${isOpen ? "drop-open" : "drop-close"}`}>
    //       {children}
    //     </div>
        
    //   </div>
    // );
};

export default Dropdown;