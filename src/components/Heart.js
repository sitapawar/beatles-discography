import React from "react";
import PropTypes from "prop-types";

export default function Heart({ isActive, onClick, animationTrigger = "click", animationScale = 1.05, animationDuration = 0.05, inactiveColor = "black", activeColor = "red", className, style }) {
  const svgClassName = `heart-svg ${className}`;
  const svgStyle = {
    fill: isActive ? activeColor : "transparent",
    stroke: isActive ? "transparent" : inactiveColor,
    strokeWidth: "1px",
    ...style
  };

  const handleClick = () => {
    onClick();
  };

  const getAnimationStyle = () => {
    switch (animationTrigger) {
      case "hover":
        return `transition: transform ${animationDuration}s;
                &:hover { transform: scale(${animationScale}); }`;
      case "click":
        return `transition: transform ${animationDuration}s;
                &:active { transform: scale(${animationScale}); }`;
      case "both":
        return `transition: transform ${animationDuration}s;
                &:hover { transform: scale(${animationScale}); }
                &:active { transform: scale(${Math.pow(animationScale, 2)}); }`;
      default:
        return "";
    }
  };

  return (
    <svg onClick={handleClick} viewBox="0 0 17 17" className={svgClassName} style={svgStyle} xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          .heart-svg {
            cursor: pointer;
            ${getAnimationStyle()}
          }
        `}
      </style>
      <path fillRule="evenodd" d="M8.5,2.3C12.9-2.2,24,5.7,8.5,16C-7,5.7,4.1-2.2,8.5,2.3z" />
    </svg>
  );
}

Heart.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  animationTrigger: PropTypes.oneOf(["click", "hover", "none", "both"]),
  animationScale: PropTypes.number,
  animationDuration: PropTypes.number,
  inactiveColor: PropTypes.string,
  activeColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
