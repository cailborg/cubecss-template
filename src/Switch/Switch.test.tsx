import React from "react";
import { Switch } from "./Switch";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Switch size="medium" label="someText"></Switch>).toJSON();
  expect(tree).toMatchSnapshot();
});
