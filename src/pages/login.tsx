import * as React from "react";
// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { Button, Col, Row } from "reactstrap";

type AllProps = RouteComponentProps<{}> & IConnectedReduxProps;

class Login extends React.Component<AllProps> {
  goToHome() {
    window.open("/");
  }
  public render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="text-center">
                <h1 className="carrousel-h3" style={{ display: "block" }}>
                  Seja Bem Vindo
                </h1>
                <br />
              </div>
              <form className="form">
                <input
                  type="text"
                  placeholder="Login"
                  className="form-control"
                />
                <br />
                <input
                  type="password"
                  placeholder="Senha"
                  className="form-control"
                />
                <br />
                <Button className="mt-10 corDefault" onClick={this.goToHome}>
                  Login
                </Button>
              </form>
            </Col>
          </Row>
        </div>
        <ul className="bg-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state: IApplicationState) => ({});

export default connect(mapStateToProps)(Login);
