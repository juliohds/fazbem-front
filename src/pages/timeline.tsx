import * as React from "react";

import { Link } from "react-router-dom";

import { Row, Col, Container } from "reactstrap";

import mapa from "./../images/map.png";

export default class TimeLine extends React.Component {
  render() {
    return (
      <Container fluid={true} className="institutional-background">
        <Row>
          <Col xs="12">
            <div>
              <div>
                <h2>julio</h2>
                <iframe
                  src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1TSMbaBQLvwJvNtkah-Vke4aCYl2hP6RUY90g6C7dF-k&font=Default&lang=en&initial_zoom=2&height=650"
                  width="100%"
                  height="650"
                  webkitallowfullscreen={true}
                  mozallowfullscreen={true}
                  allowfullscreen={true}
                  frameborder="0"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
