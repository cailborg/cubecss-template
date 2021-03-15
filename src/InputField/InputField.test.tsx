import React from "react";
import { InputField } from "./InputField";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<InputField/>).toJSON();
  expect(tree).toMatchSnapshot();
});
