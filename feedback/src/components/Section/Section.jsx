   
import React from "react";
import PropTypes from "prop-types";



const Section = ({ title, children }) => {
  return (
    <section >
      <h2 >{title}</h2>
      {children}
    </section>
  );
};

export default Section;

Section.defaultProps = {
  title: " New Section",
};
Section.propTypes = {
  title: PropTypes.string,
};