import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./style.css";

export default class Text extends Component {
  componentDidMount(){
    this.input && this.input.focus();
  }

  render() {
    return (
      <div className={style.Text}>
        <input
          className={style.Text__input}
          placeholder="Your answer..."
          ref={(input) => {this.input = input;}}
          value={this.props.answer || ""}
          onChange={(event) => {
            this.props.onChange(this.props.stage, event.target.value);
          }}
        />
      </div>
    );
  }
}

Text.propTypes = {
  onChange: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired,
  answer: PropTypes.string
};
