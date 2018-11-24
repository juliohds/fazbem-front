import React from "react";
import Breakpoint from "./breakpoint";

export default function DesktopBreakpoint(props: any) {
  return (
    <Breakpoint name="desktop" {...props}>
      {props.children}
    </Breakpoint>
  );
}