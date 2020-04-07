import React from 'react';
import './AuthorButton.css';


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize

}) => {

    return(
        <button className="author_btn" onClick={onClick} type={type}>
            {children}
        </button>
    
    )
};