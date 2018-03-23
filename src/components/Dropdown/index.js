import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

export default class Dropdown extends React.Component {
  componentDidMount(){
    this.select && this.select.focus();
  }

  render() {
    return (
      <select
        className={ style.Dropdown }
        ref={(select) => { this.select = select; }}
      >
        {
          this.props.options.map( (option, index) => (
            <option
              key={`${this.props.stage}-${index}`}
              value={index}
              onChange={ () => {} }
            >
              { option.label }
            </option>
          ))
        }
      </select>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  stage: PropTypes.string.isRequired
};
