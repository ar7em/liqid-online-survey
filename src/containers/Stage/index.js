import React from "react";

import Question from "components/Question";
import Text from "components/Text";
import Radio from "components/Radio";
import Dropdown from "components/Dropdown";

const Stage = () => (
  <div>
    <Question text="Who framed Roger Rabbit?" />
    <Text />
    <Radio stage="1" options={
      [
        {
          label: "Option number one",
          checked: true
        },
        {
          label: "Option number two"
        }
      ]
    } />
    <Dropdown stage="1" options={
      [
        {
          label: "Option number one",
          checked: true
        },
        {
          label: "Option number two"
        }
      ]
    } />
  </div>
);

export default Stage;
