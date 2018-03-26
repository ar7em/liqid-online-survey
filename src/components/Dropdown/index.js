import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./style.css";

export default class Dropdown extends Component {
  componentDidMount(){
    this.select && this.select.focus();
  }

  render() {
    const answer = typeof this.props.answer === "undefined" ? "" : this.props.answer;

    return (
      <select
        className={style.Dropdown}
        ref={(select) => {this.select = select;}}
        value={answer}
        onChange={(e) => {
          const value = e.target.value === "" ? undefined : parseInt(e.target.value, 10);
          this.props.onChange(this.props.stage, value);
        }}
      >
        <option key="placeholder" value="" disabled hidden>
          Please Choose...
        </option>
        {
          this.props.options.map((option, index) => (
            <option
              key={`${this.props.stage}-${index}`}
              value={index}
            >
              { option }
            </option>
          ))
        }
      </select>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  stage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  answer: PropTypes.number
};
