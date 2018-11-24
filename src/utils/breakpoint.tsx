import React from "react";
import MediaQuery from "react-responsive";
import DesktopBreakpoint from "./desktopbreakpoint";
import PhoneBreakpoint from "./phonebreakpoint";
import TabletBreakpoint from "./tabletbreakpoint";

const breakpoints = {
  desktop: "(min-width: 992px)",
  tablet: "(min-width: 768px)",
  phone: "(max-width: 767px)"
};

export default function Breakpoint(props: any) {
  const brkpoint = breakpoints[props.name] || breakpoints.desktop;
  return (
    <MediaQuery {...props} query={brkpoint}>
      {props.children}
    </MediaQuery>
  );
}

export { DesktopBreakpoint, PhoneBreakpoint, TabletBreakpoint };
