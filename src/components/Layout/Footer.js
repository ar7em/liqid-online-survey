import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Footer = (props) => (
  <div className={style.Layout__Footer}>
    {props.children}
  </div>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
