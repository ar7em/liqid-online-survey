import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Content = (props) => (
  <div className={style.Layout__Content}>
    <div className={style.Layout__Background}>
      {props.children}
    </div>
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;
