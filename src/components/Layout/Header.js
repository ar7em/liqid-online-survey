import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Header = (props) => (
  <div className={style.Layout__Header}>
    {props.children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
