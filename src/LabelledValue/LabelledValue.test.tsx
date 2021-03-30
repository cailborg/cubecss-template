import React from "react";
import { LabelledValue } from "./LabelledValue";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<LabelledValue variant="vertical" label="Label" value="value" description="description" secondaryValue="secondaryValue" emphasized={false}></LabelledValue>).toJSON();
  expect(tree).toMatchSnapshot();
});
