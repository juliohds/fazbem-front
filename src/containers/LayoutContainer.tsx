import * as React from "react";
import { connect } from "react-redux";

interface IPropsFromState { }

interface IOtherProps {
  children(props: LayoutContainerProps): React.ReactNode;
}

type LayoutContainerProps = IPropsFromState;

class LayoutContainer extends React.Component<LayoutContainerProps & IOtherProps> {
  public render() {
    const { children, ...rest } = this.props;

    return children({ ...rest });
  }
}

export default connect()(LayoutContainer);
