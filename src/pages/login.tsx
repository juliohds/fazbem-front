import * as React from "react";
import { Link } from "react-router-dom";

// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
// tslint:disable-next-line:no-duplicate-imports
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
                <Link to="/">
                  <Button className="mt-10 corDefault">Login</Button>
                </Link>
                <img
                  src="https://www.freeiconspng.com/uploads/facebook-sign-in-button-png-26.png"
                  alt=""
                  width="200"
                  style={{ marginTop: "7px" }}
                />
                <img
                  src="https://www.c-learning.net/storage/app/media/img/buttons/google-login-button.png"
                  alt=""
                  width="200"
                  style={{ marginTop: "7px" }}
                />
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
