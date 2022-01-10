import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { Button as TestButton } from "../../dist/Button";

const stories = storiesOf("Components", module);

stories.add("Button", () => {
  return <Button type="button">Create new user</Button>;
});

stories.add("Button Test", () => {
  return <TestButton type="button">Create new user</TestButton>;
});
