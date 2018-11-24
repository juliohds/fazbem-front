import React from "react";
import Breakpoint from "./breakpoint";

export default function PhoneBreakpoint(props: any) {
  return (
    <Breakpoint name="phone"  {...props}>
      {props.children}
    </Breakpoint>
  );
}