import React from "react";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<RadioGroup legend="This is legend"><Radio id="1" title="title" groupName="group"/></RadioGroup>>).toJSON();
  expect(tree).toMatchSnapshot();
});
