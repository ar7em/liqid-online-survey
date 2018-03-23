import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./style.css";

export default class Text extends React.Component {
  componentDidMount(){
    this.input && this.input.focus();
  }

  render() {
    return (
      <div className={ style.Text }>
        <input
          className={ style.Text__input }
          placeholder="Your answer..."
          ref={(input) => { this.input = input; }}
          onChange={ () => {} }
        />
      </div>
    );
  }
}

Text.propTypes = {
};
