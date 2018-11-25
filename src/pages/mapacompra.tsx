import * as React from "react";
import { Link } from "react-router-dom";

// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
// tslint:disable-next-line:no-duplicate-imports
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import {
  Card,
  Row,
  Col,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import mapa from "./../images/map.png";

type AllProps = RouteComponentProps<{}> & IConnectedReduxProps;

class MapaCompra extends React.Component<AllProps> {
  public render() {
    return (
      <div className="wrapper">
        <div className="mt-100">
          <Row>
            <Col md={{ size: 12, offset: 0 }}>
              <div>
                <Card>
                  <img width="100%" src={mapa} alt="Card image cap" />
                  <CardBody>
                    <CardText>
                      Os Alimentos ficam sujeitos a serem vendidos antes que
                      você chegue no local.
                    </CardText>
                    <Row>
                      <Col md={{ size: 4, offset: 2 }}>
                        <div className="container-fluid">
                          <FormGroup>
                            <Label for="exampleSelect">
                              Selecionar Supermecado
                            </Label>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              style={{ width: "400px" }}
                            >
                              <option>Walmart - Bela Vista SP</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </FormGroup>

                          <Link to="/">
                            <Button color="success">Comprar</Button>
                          </Link>
                          <Link to="/" style={{ marginLeft: "10px" }}>
                            <Button color="danger">Voltar</Button>
                          </Link>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="container-fluid">
                          <FormGroup>
                            <Label for="exampleSelect">
                              Comprar de Produtor
                            </Label>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              style={{ width: "400px" }}
                            >
                              <option>João Mauricio Alves</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </FormGroup>

                          <Link to="/">
                            <Button color="primary">Buscar</Button>
                          </Link>
                          <Link to="/" style={{ marginLeft: "10px" }}>
                            <Button color="danger">Voltar</Button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: IApplicationState) => ({});

export default connect(mapStateToProps)(MapaCompra);
