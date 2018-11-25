import * as React from "react";
import { Link } from "react-router-dom";

// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { Button, Col, Row, Table, Badge } from "reactstrap";

type AllProps = RouteComponentProps<{}> & IConnectedReduxProps;

class TabelaAlimentos extends React.Component<AllProps> {
  goToHome() {
    window.open("/");
  }
  public render() {
    return (
      <div className="">
        <Row>
          <Col md="6">
            <Badge color="warning">CAfé da Manhã</Badge>
            <Badge color="sucess">Almoço</Badge>
            <Badge color="danger">Janta</Badge>
            <div>form</div>
          </Col>
          <Col md="6">
            <Badge color="warning">CAfé da Manhã</Badge>
            <Table size="sm">
              <thead />
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2x Torradas</td>
                  <td>Chá</td>
                  <td>R$5,00</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Crepeoca</td>
                  <td>tomate</td>
                  <td>R$6,00</td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <Badge color="danger">Almoço</Badge>
            <Table size="sm">
              <thead />
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2x Torradas</td>
                  <td>Chá</td>
                  <td>R$5,00</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Crepeoca</td>
                  <td>tomate</td>
                  <td>R$6,00</td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <Badge color="success">Janta</Badge>
            <Table size="sm">
              <thead />
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2x Torradas</td>
                  <td>Chá</td>
                  <td>R$5,00</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Crepeoca</td>
                  <td>tomate</td>
                  <td>R$6,00</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state: IApplicationState) => ({});

export default connect(mapStateToProps)(TabelaAlimentos);
