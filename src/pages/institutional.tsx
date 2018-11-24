import * as React from "react";
import { Col, Row, Container } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../store";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import Carrousel from "../components/carrousel/carrousel";

// Combine both state + dispatch props - as well as any props we; want; to; pass - in a; union; type.;
type AllProps = RouteComponentProps<{}> & IConnectedReduxProps;

class InstitutionalPage extends React.Component<AllProps> {
  public render() {
    return (
      <Container fluid={true} className="institutional-background">
        <div className="header-placeholder" />
        <Row>
          <Col xs="12">
            {/* <InstitutionalCarrousel /> */}
            <Carrousel />
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            {/* <Timeline /> */}
            timeline
          </Col>
        </Row>

        <Row>
          {/* <VideoIntro /> */}
          video
        </Row>

        <Row>
          {/* <Dicas /> */}
        </Row>

        <Row className="institutional-footer">
          <Col xs="12" >
            {/* <Footer home={true} /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({});

export default connect(mapStateToProps)(InstitutionalPage);