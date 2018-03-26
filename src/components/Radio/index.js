import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./style.css";

export default class Radio extends Component {
  componentDidMount(){
    this.radio && this.radio.focus();
  }

  render() {
    return (
      <ul className={style.Radio}>
        {
          this.props.options.map( (option, index) => {
            const key = `${this.props.stage}-${index}`;
            return (
              <li key={key} className={ style.Radio__option}>
                <input
                  className={style.Radio__input}
                  type="radio"
                  name={this.props.stage}
                  id={key}
                  value={index}
                  checked={index === this.props.answer}
                  onChange={(e) => {
                    this.props.onChange(this.props.stage, parseInt(e.target.value, 10));
                  }}
                  ref={(select) => {
                    if (index === 0) {
                      this.select = select;
                    }
                  }}
                />
                <label className={style.Radio__label} htmlFor={key}>
                  {option}
                </label>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

Radio.propTypes = {
  options: PropTypes.array.isRequired,
  stage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  answer: PropTypes.number
};
