import React from "react";
import App from "./App";
import { shallow, mount, render } from "enzyme";
import fetchMock from "fetch-mock";

describe("App", () => {
  let wrapper;
  it.only("should render", () => {
    expect(true);
  });

  it("should render a div", () => {
    wrapper = shallow(<App />);

    console.log(wrapper);
  });
});
