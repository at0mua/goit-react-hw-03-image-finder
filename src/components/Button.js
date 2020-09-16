import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
