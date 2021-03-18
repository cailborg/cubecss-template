import React from "react";
import { Heading } from "./Heading";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Heading>Hello</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});
