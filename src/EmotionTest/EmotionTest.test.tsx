import React from "react";
import { EmotionTest } from "./EmotionTest";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<EmotionTest someNumber={5}>Hello</EmotionTest>).toJSON();
  expect(tree).toMatchSnapshot();
});
