import React , { useState }from "react";
import { Switch } from "./Switch";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const [checked, setChecked] = useState(false);
  const tree = renderer.create(<Switch checked={checked} size="large" onChange={setChecked}></Switch>).toJSON();
  expect(tree).toMatchSnapshot();
});
