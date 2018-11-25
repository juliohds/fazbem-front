import * as React from "react";
import { Col, Row, Container } from "reactstrap";

import { Link } from "react-router-dom";

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

const iframe =
  '<iframe src="https://www.example.com/show?data..." width="540" height="450"></iframe>';

export default class TimeLine extends React.Component {
  iframe() {
    return {
      __html: this.props.iframe
    };
  }

  render() {
    return (
      <Container fluid={true} className="institutional-background">
        <Row>
          <Col xs="12">
            <div>
              <div>
                <h2>julio</h2>
                {/* <div dangerouslySetInnerHTML={this.iframe()} /> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
