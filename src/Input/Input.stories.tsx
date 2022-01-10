import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./Input";

const stories = storiesOf("Components", module);

stories.add("Input", () => {
  return <Input type="text" placeholder="Grocery" />;
});
