import React from "react";
import App from "./index";
import { mount } from "enzyme";

describe("<App />", () => {
  it("renders the App", () => {
    const wrapper = mount(
      <App />
    );

    expect(wrapper.find(App)).toHaveLength(1);
  });
});
