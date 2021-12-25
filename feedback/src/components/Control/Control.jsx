import React from "react";
import PropTypes from "prop-types";

const ControlOptions = ({ options, onLeaveFeedback }) => {
  const btnNames = Object.keys(options);
  return (
    <ul >
      {btnNames.map((btnName) => (
        <li key={btnName}>
          <button
           
            name={btnName}
            onClick={onLeaveFeedback}
          >
            {btnName}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ControlOptions;

ControlOptions.propTypes  = {
    options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,

};