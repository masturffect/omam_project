import React from 'react';
import './Buttons.css';

const STYLES = [
    "btn--author",
    "btn--map",
    "btn--readings",
    "btn--citation",
    "btn--proj",
    "btn--methods",
    "btn--data",
    "btn--credits",
];

const SIZES = ["btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize

}) => {

    const checkStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonSize
        : SIZES[0];
        
    return(
        <button 
            className= {`btn ${checkStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type}
        >
            {children}
        </button>
    
    )
};