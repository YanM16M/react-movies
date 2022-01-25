import React from 'react';
import './Button.css';

function Button({type, value, onClick}) {
    const TYPES = ["btn-sm", "btn-md", "btn-lr"];

    if (!TYPES.includes(type)) {
        type = TYPES[0];
    }

    return ( 
        <div className={"button__container " + type } onClick={onClick}>
            <span className="text__content">{value}</span>
        </div>
     );
}

export default Button;