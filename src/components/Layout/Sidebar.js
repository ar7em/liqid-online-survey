import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Sidebar = (props) => (
  <div className={ style.Layout__Sidebar }>
    {props.children}
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Sidebar;
