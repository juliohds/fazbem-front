import * as React from "react";
import { Link } from "react-router-dom";

// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
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
            <Col md={{ size: 6, offset: 3 }}>
              <div>
                <Card>
                  <img width="100%" src={mapa} alt="Card image cap" />
                  <CardBody>
                    <CardText>
                      Os Alimentos ficam sujeitos a serem vendidos antes que
                      você chegue no local.
                    </CardText>
                    <div className="container-fluid">
                      <FormGroup>
                        <Label for="exampleSelect">
                          Selecionar Estabelecimento
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
