import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Content = (props) => (
  <div className={style.Layout__Content}>
    {props.children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;
