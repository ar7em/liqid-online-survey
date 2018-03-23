import React from "react";
import SummaryComponent from "components/Summary";

const Summary = () => (
  <SummaryComponent stages={[
    {
      question: "First question",
      answer: "First answer"
    }, {
      question: "Second question",
      answer: "Second answer"
    }
  ]}/>
);

export default Summary;
