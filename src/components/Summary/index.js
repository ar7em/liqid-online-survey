import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Summary = (props) => (
  <div className={ style.Summary }>
    <div className={ style.Summary__header }>
      Summary
    </div>
    <ol className={ style.Summary__list }>
      {
        props.stages.map( (stage, index) => (
          <li key={index} className={ style.Summary__item }>
            <div className={ style.Summary__question }>
              { stage.question }
            </div>
            <div className={ style.Summary__answer }>
              { stage.answer }
            </div>
          </li>
        ))
      }
    </ol>
  </div>
);

Summary.propTypes = {
  stages: PropTypes.array.isRequired
};

export default Summary;
