import React from "react";
import { Tag } from "../Tag/Tag";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Tag variant="neutral" size="large" label="hello"></Tag>).toJSON();
  expect(tree).toMatchSnapshot();
});
