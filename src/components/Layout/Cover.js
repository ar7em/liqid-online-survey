import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Cover = (props) => (
  <div className={ style.Layout__Cover }>
    {props.children}
  </div>
);

Cover.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cover;
