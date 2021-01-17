import React from 'react';
import "./confirmbutton.css"

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--dangerous--outline",
  "btn--success--outline"
];

const SIZES = ["btn--medium", "btn--small"];
export const ConButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button 
      className={'btn ${checkButtonStyle} ${checkButtonSize}'} 
      onClick={onClick}
     type={type}
    >
      {children}
    </button>
  );
};