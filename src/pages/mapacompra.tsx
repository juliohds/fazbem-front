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
  CardSubtitle
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
                  <CardBody>
                    <CardTitle>Pontos de Vendas</CardTitle>
                    <CardSubtitle>Proximos a Você</CardSubtitle>
                  </CardBody>
                  <img width="100%" src={mapa} alt="Card image cap" />
                  <CardBody>
                    <CardText>
                      Os Alimentos ficam sujeitos a serem vendidos antes que
                      você chegue no local.
                    </CardText>
                    <Link to="/">
                      <Button color="success">Comprar</Button>
                    </Link>
                    <Link to="/">
                      <Button color="danger">Voltar</Button>
                    </Link>
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
