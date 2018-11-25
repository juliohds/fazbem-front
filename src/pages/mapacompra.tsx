import * as React from "react";
import { Link } from "react-router-dom";

// import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import mapa from "../../images/map.png";

import { Button, Col, Row } from "reactstrap";

type AllProps = RouteComponentProps<{}> & IConnectedReduxProps;

class MapaCompra extends React.Component<AllProps> {
  public render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <img src={mapa} alt="Mapa" />
              <h1>oi</h1>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: IApplicationState) => ({});

export default connect(mapStateToProps)(MapaCompra);
