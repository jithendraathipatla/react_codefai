import React from 'react';
import "./backdrop.css";

const Backdrop = (props) => {
    return (
        <div onClick={props.property} >
        <div className="backdrop">
        </div>   
        </div>
    );
};

export default Backdrop;