import * as React from "react";
import { Carousel, CarouselItem, CarouselCaption, Row, Col } from "reactstrap";
import { IApplicationState, IConnectedReduxProps } from "../../store";
import { TabletBreakpoint, PhoneBreakpoint } from "../../utils/breakpoint";
import { connect } from "react-redux";

const items = [
  {
    header: (
      <span>
        Nada de dúvidas.
        <br />
        Nada de dívidas.
      </span>
    ),
    text:
      "Estamos aqui para facilitar no que pudermos sua vida financeira e ajudar você a sair da dívida.",
    foto: "",
    foto2: "",
    foto3: ""
  },
];

class Carrousel extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Row>
          <Col md={6} className="pt-5 offset-md-3">
            <h3 className="carrousel-h3">Seja Natural, e um</h3>
            <br />
            <h3 className="carrousel-h3">Apoiador da causa, Faz bem</h3>
            <span />
          </Col>
          <Col md={6}>
            <img className="carrousel-bg" src={items[0].foto} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({});

export default connect(mapStateToProps)(Carrousel);
