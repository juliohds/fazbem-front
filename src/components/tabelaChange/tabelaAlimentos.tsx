import * as React from "react";
import { Link } from "react-router-dom";

// import { Col, Row, Container } from "reactstrap";
// tslint:disable-next-line:no-duplicate-imports
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
        {/* <div>
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
        </div> */}
        <Row>
          <Col md="6" className="text-center">
            <Badge
              href="#"
              color="secondary"
              pill={true}
              style={{ fontSize: "26px", marginTop: "7px" }}
            >
              Alimentos Comuns
            </Badge>
          </Col>
          <Col md="6" className="text-center">
            <Badge
              href="#"
              color="secondary"
              pill={true}
              style={{ fontSize: "26px", marginTop: "7px" }}
            >
              Organicos e Naturais
            </Badge>
          </Col>
        </Row>
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
                    placeholder="Pães"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="quantidade">Peso - Quantidade</Label>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="2"
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
                    placeholder="Café com Leite"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="150 ml"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="R$ 6,00"
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
                    placeholder="Arroz"
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
                    placeholder="R$ 10,00"
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
                    placeholder="Frango"
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
                    placeholder="R$ 9,00"
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
                    placeholder="2 Esfiras"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="600g"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="R$ 21,00"
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
                    placeholder="Coca-cola"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="quantidade"
                    id="quantidade"
                    placeholder="1L"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="R$ 6,00"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col
            md="6"
            className={`${
              this.state.showClass === "display-none"
                ? "display-block"
                : "display-none"
            }`}
          >
            <div>
              <img
                src="https://img.freepik.com/vetores-gratis/fundo-do-menu-saudavel_23-2147516968.jpg?size=338&ext=jpg"
                alt=""
                style={{ margin: "auto", display: "flex", marginTop: "60px" }}
              />
            </div>
          </Col>
          <Col
            md="6"
            className={`${this.state.showClass}`}
            style={{ marginTop: "35px" }}
          >
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
                  <td>Iorgute</td>
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
                  <td>tomate e salada</td>
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
                  <td>Arroz Integral</td>
                  <td>Suco</td>
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
              style={{
                float: "right",
                marginTop: "20px",
                marginRight: "20px",
                width: "105%"
              }}
            >
              <Col md="12">
                <div className="">
                  <Link to="/mapacompra" style={{ marginLeft: "60px" }}>
                    <Button color="secondary">Imprimir</Button>
                  </Link>
                  <Link to="/timeline" style={{ marginLeft: "5px" }}>
                    <Button color="success">Salvar Consumo</Button>
                  </Link>
                  <Link to="/mapacompra" style={{ marginLeft: "5px" }}>
                    <Button color="danger">Não sabe aonde comprar?</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 3, offset: 1 }}>
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
