import * as React from "react";
import { Link } from "react-router-dom";

// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { Button, Col, Row } from "reactstrap";

type AllProps = RouteComponentProps<{}> & IConnectedReduxProps;

class Cadastro extends React.Component<AllProps> {
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
                  Cadastre-se
                </h1>
                <br />
              </div>
              <form className="form">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  placeholder="Nome"
                  name="nome"
                  className="form-control"
                />
                <br />
                <label htmlFor="nome">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="nome"
                  className="form-control"
                />
                <br />
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  className="form-control"
                />
                <br />
                <label htmlFor="Confirmpassword">Confirmar Senha</label>
                <input
                  type="password"
                  name="Confirmpassword"
                  placeholder="Senha"
                  className="form-control"
                />
                <br />
                <Link to="/">
                  <Button className="mt-10 corDefault">Cadastrar</Button>
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

export default connect(mapStateToProps)(Cadastro);
