import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";

export interface PETROLProps {
  msg: string;
}

function PETROL({ msg }: PETROLProps) {
  return <Typography>{msg}</Typography>;
}

export default createComponent(PETROL, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
