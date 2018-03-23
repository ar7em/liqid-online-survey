import React from "react";
import PropTypes from "prop-types";
import NavigateComponent from 'components/navigate';

const labels = {
  "prev": "← Back",
  "next": "Next →"
};

const Navigate = (props) => (
  <NavigateComponent
    label={labels[props.direction]}
  />
);

Navigate.propTypes = {
  direction: PropTypes.string.isRequired
};

export default Navigate;
