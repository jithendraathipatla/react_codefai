import React from 'react';
import "./button.css"

const Button = (props) => {
    return (
        <div>
            <button className="toogle__button" onClick={props.property}>
               <div className="toogle__button--line"></div>
               <div className="toogle__button--line"></div>
               <div className="toogle__button--line"></div>
            </button>
        </div>
    );
};

export default Button;