import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";

export interface demoProps {
  msg: string;
}

function demo({ msg }: demoProps) {
  return <Typography>{msg}</Typography>;
}

export default createComponent(demo, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
