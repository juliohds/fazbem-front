import * as React from "react";
// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

type AllProps = RouteComponentProps<{}> & IConnectedReduxProps;

class Login extends React.Component<AllProps> {
  public render() {
    return (<div>login</div>);
  }
}
const mapStateToProps = (state: IApplicationState) => ({});

export default connect(mapStateToProps)(Login);
