import * as React from "react";

import { Link } from "react-router-dom";

import { Row, Col, Container, Alert } from "reactstrap";

import mapa from "./../images/map.png";

export default class TimeLine extends React.Component {
  render() {
    return (
      <Container fluid={true} className="institutional-background">
        <Row className="mt-50">
          <Col xs="12">
            <div className="">
              <h3 style={{ marginTop: "-50px" }} />
              <div className="">
                <iframe
                  src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=144xWa4hcT31VpEiYRw64GL8CjTRa9IFTeO569IalwQs&font=Default&lang=en&initial_zoom=2&height=650"
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
