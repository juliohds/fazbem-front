import React from "react";
import Breakpoint from "./breakpoint";

export default function TabletBreakpoint(props: any) {
  return (
    <Breakpoint name="tablet" {...props}>
      {props.children}
    </Breakpoint>
  );
}