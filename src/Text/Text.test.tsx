import React from "react";
import { Text } from "./Text";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Text>Hello</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
