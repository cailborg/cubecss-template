import React from "react";
import { TestComponent } from "../TestComponent/TestComponent";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<TestComponent variant="primary"/>).toJSON();
  expect(tree).toMatchSnapshot();
});
