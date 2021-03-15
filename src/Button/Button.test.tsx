import React from "react";
import { Button } from "../Button/Button";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Button variant="primary" size="large">Hello</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
