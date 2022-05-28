import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

Button.defaultProps = {
    widthBorder: false
}
Button.propTypes = {
    textContent: PropTypes.string.isRequired
}
export default Button;