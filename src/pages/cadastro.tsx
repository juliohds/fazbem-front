import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";

import { connect } from "react-redux";

import { Button, Col, Row } from "reactstrap";

interface IState {
  nome: string;
  email: string;
  senha: string;
}

interface IProps {
  modal: boolean;
}

type AllProps = RouteComponentProps<{}> & IConnectedReduxProps;

class Cadastro extends React.Component<IProps, IState> {
  private nome = React.createRef<HTMLInputElement>();
  private email = React.createRef<HTMLInputElement>();
  private senha = React.createRef<HTMLTextAreaElement>();

  constructor(props: IProps) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: ""
    };
    this.cadastrar = this.cadastrar.bind(this);
  }

  goToHome() {
    window.open("/");
  }

  cadastrar() {
    const data = {
      nome: this.nome.current!.value,
      email: this.email.current!.value,
      senha: this.senha.current!.value
    };
    console.log(data);
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
                  ref={this.nome}
                  value=""
                />
                <br />
                <label htmlFor="nome">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="nome"
                  className="form-control"
                  id="cad_email"
                  ref={this.email}
                  value=""
                />
                <br />
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  ref={this.senha}
                  placeholder="Senha"
                  className="form-control"
                  id="cad_senha"
                  value=""
                />
                <br />
                <label htmlFor="Confirmpassword">Confirmar Senha</label>
                <input
                  type="password"
                  name="Confirmpassword"
                  placeholder="Senha"
                  className="form-control"
                  value=""
                />
                <br />

                <Button className="mt-10 corDefault" onClick={this.cadastrar}>
                  Cadastrar
                </Button>

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
