import React from "react";
import { Link } from "./Link";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Link size="medium">Hello</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});
