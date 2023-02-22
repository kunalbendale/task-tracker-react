import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const handleButtonClick = () => {
    console.log("[Header] >> [handleButtonClick]");
    props.onAddTask();
  };

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button buttonText={props.showAdd? 'Close' : 'Add'} onClick={handleButtonClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
