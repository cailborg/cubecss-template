import React from "react";
import { Illustration } from "./Illustration";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Illustration size="large" name="Purchases" title="Purchases"></Illustration>).toJSON();
  expect(tree).toMatchSnapshot();
});
