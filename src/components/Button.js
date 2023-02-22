import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  //   const handleButtonClick = () => {
  //     console.log("[Header] >> [handleButtonClick]");
  //   };

  return (
    <button className="btn" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
};

Button.defaultProps = {
  buttonText: "Add Task",
};

Button.propTypes = {
  buttonText: PropTypes.string,
};
export default Button;
