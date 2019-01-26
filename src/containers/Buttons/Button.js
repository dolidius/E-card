import React from 'react';
import './Buttons.scss';

import { Link } from 'react-router-dom';

const Button = ({
    text,
    href,
    btnClass,
    animated,
    isDisabled,
    clicked,
}) => {

    if(href){
        return(
            <Link to={href} className={`button ${btnClass} ${animated ? 'button__animated': null}`}>
                {text}
            </Link>
        );
    }else{
        return(
            <button 
                disabled={isDisabled}
                className={`button ${btnClass} ${animated ? 'button__animated': null} ${isDisabled ? 'button__disabled' : null}`}
                onClick={clicked}
            >
                {text}
            </button>
        );
    }
    
}

export default Button;