import * as React from "react";
import { Link } from "react-router-dom";

// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import {
  Button,
  Col,
  Row,
  Table,
  Badge,
  FormGroup,
  Label,
  Input
} from "reactstrap";

interface IState {
  modal: boolean;
  showClass: string;
}

interface IProps {
  modal: boolean;
}

class TabelaAlimentos extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      modal: false,
      showClass: "display-none"
    };
    this.openTable = this.openTable.bind(this);
  }

  openTable() {
    if (this.state.showClass === "display-none") {
      this.setState({
        showClass: "display-block"
      });
    }
  }

  public render() {
    return (
      <div className="">
        <div>
          <Row>
            <Col md="12">
              Restricao alimentar?{" "}
              <Input
                type="text"
                name="valor"
                id="valor"
                placeholder="Alergia, Diabetes, Glutem"
                className="mb-10"
              />
            </Col>
          </Row>
        </div>
        <Badge color="warning">CAfé da Manhã</Badge>
        <Row>
          <Col md="6">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Alimento</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="2 Pães"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="quantidade">Peso</Label>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="300g"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePassword">Valor</Label>
                  <Input
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="R$ 12,00"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="2 Pães"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="300g"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="R$ 12,00"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Badge color="danger">Almoço</Badge>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="2 Pães"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="300g"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="R$ 12,00"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="2 Pães"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="300g"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="R$ 12,00"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Badge color="success">Janta</Badge>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="2 Pães"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="300g"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="R$ 12,00"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="2 Pães"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="300g"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="R$ 12,00"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Col>

          <Col md="6" className={`${this.state.showClass}`}>
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

            <Row
              style={{ float: "right", marginTop: "20px", marginRight: "20px" }}
            >
              <Col md="5">
                <div className="display-grid">
                  <Link to="/mapacompra">
                    <Button color="danger">Não sabe aonde comprar?</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <div className="display-grid">
              <Button color="primary" onClick={this.openTable}>
                Alimentos equivalentes
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state: IApplicationState) => ({});

export default connect(mapStateToProps)(TabelaAlimentos);
