import React, { Fragment } from 'react';

const Button = props => {
    const buttonStyle = {
        backgroundColor: props.color,
        // border: '5px solid green'
    };
    if (props.widthBorder) {
        buttonStyle.border = '5px solid green';
    }
    return (
        <>
            <button style={buttonStyle}>
                {props.children}
            </button >
            <p>
                {props.textContent}  {props.widthBorder && '- border'}
            </p>
        </>
    )
}

export default Button;