import * as React from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default class VoceVoluntario extends React.Component {
  render() {
    return (
      <Container fluid={true} className="container">
        <Row>
          <Col md={{ size: 12, offset: 0 }}>
            <form action="/p/quote.php" method="GET">
              <h1 id="form-title">Escolha a distancia da sua casa</h1>
              <div id="debt-amount-slider">
                <input
                  type="radio"
                  name="debt-amount"
                  id="1"
                  value="1"
                  required={true}
                />
                <label htmlFor="1" data-debt-amount="< 5km" />
                <input
                  type="radio"
                  name="debt-amount"
                  id="2"
                  value="2"
                  required={true}
                />
                <label htmlFor="2" data-debt-amount="5km-10km" />
                <input
                  type="radio"
                  name="debt-amount"
                  id="3"
                  value="3"
                  required={true}
                />
                <label htmlFor="3" data-debt-amount="10km-50km" />
                <input
                  type="radio"
                  name="debt-amount"
                  id="4"
                  value="4"
                  required={true}
                />
                <label htmlFor="4" data-debt-amount="50km-100km" />
                <input
                  type="radio"
                  name="debt-amount"
                  id="5"
                  value="5"
                  required={true}
                />
                <label htmlFor="5" data-debt-amount="+100km" />
                <div id="debt-amount-pos" />
              </div>
              <button type="submit">Buscar Estabelecimento</button>
            </form>
          </Col>
        </Row>

        <div className={"mt-50"}>
          <Row>
            <Col md={{ size: 4 }}>
              <div>
                <Card>
                  <CardImg
                    top={true}
                    width="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button className="mt-10">Contribuir no Local</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col md={{ size: 4 }}>
              <div>
                <Card>
                  <CardImg
                    top={true}
                    width="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button className="mt-10">Contribuir no Local</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col md={{ size: 4 }}>
              <div>
                <Card>
                  <CardImg
                    top={true}
                    width="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button className="mt-10">Contribuir no Local</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
