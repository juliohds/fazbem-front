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
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

interface IState {
  modal: boolean;
  showClass: string;
}

interface IProps {
  modal: boolean;
}

export default class VoceVoluntario extends React.Component<IProps, IState> {
  public state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      modal: false,
      showClass: "display-none"
    };

    this.toggle = this.toggle.bind(this);
    this.buscarEstabelecimento = this.buscarEstabelecimento.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  buscarEstabelecimento() {
    if (this.state.showClass === "display-none") {
      this.setState({
        showClass: "display-block"
      });
    }
  }

  render() {
    return (
      <Container fluid={true} className="container">
        <div className="text-center">
          <h2 className="my-h4">Escolha um lugar para atuar como embaixador</h2>
        </div>
        <Row>
          <Col md={{ size: 12, offset: 0 }}>
            <form action="/p/quote.php" method="GET">
              <h1 id="form-title">Qual distancia você prefere?</h1>
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
              <button
                type="button"
                className="cl"
                onClick={this.buscarEstabelecimento}
              >
                Buscar Estabelecimento
              </button>
            </form>
          </Col>
        </Row>

        <div className={`mt-50 ${this.state.showClass} mb-50`}>
          <Row>
            <Col md={{ size: 4 }}>
              <div>
                <Card>
                  <CardImg
                    top={true}
                    width="100%"
                    src="http://cdn2.nolocreo.com/wp-content/uploads/2015/01/1f1f99d3642e29fc1c9dbf1cab5c4ccf.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Super Mercado Walmart</CardTitle>
                    <CardSubtitle>
                      200-500 pessoas
                      <img
                        src="https://png.pngtree.com/svg/20170630/hot_search_498103.png"
                        className="img-icon-estabelecimento"
                        alt=""
                      />
                    </CardSubtitle>
                    <CardText>
                      A Movimentação de pessoas nesse local é quase que
                      frequente. Rua Boa Vista nº 20 - 10h-12h
                    </CardText>
                    <Button className="mt-10" onClick={this.toggle}>
                      Visitar Local
                    </Button>
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
                    src="https://static01.diariodenavarra.es/uploads/imagenes/bajacalidad/2013/01/04/_mercadonacolas_10a249be.jpg?53fa67c8fa79235235ccdb49756217ee"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Super Mercado Walmart</CardTitle>
                    <CardSubtitle>
                      20-50 pessoas
                      <img
                        src="https://instaviagem.com/blog/wp-content/uploads/2017/10/cropped-favicon.png"
                        className="img-icon-estabelecimento"
                        alt=""
                      />
                    </CardSubtitle>
                    <CardText>
                      A Movimentação de pessoas nesse local é quase vazia. Rua
                      Boa Vista nº 20 - 10h-12h
                    </CardText>
                    <Button className="mt-10" onClick={this.toggle}>
                      Visitar Local
                    </Button>
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
                    src="http://cdn2.nolocreo.com/wp-content/uploads/2015/01/1f1f99d3642e29fc1c9dbf1cab5c4ccf.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Super Mercado Walmart</CardTitle>
                    <CardSubtitle>
                      200-500 pessoas
                      <img
                        src="https://png.pngtree.com/svg/20170630/hot_search_498103.png"
                        className="img-icon-estabelecimento"
                        alt=""
                      />
                    </CardSubtitle>
                    <CardText>
                      A Movimentação de pessoas nesse local é quase que
                      frequente. Rua Boa Vista nº 20 - 10h-12h
                    </CardText>
                    <Button className="mt-10" onClick={this.toggle}>
                      Visitar Local
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          // className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Confirmar Presença</ModalHeader>
          <ModalBody>
            Você esta ciente e disponivel de visitar este lugar duas horas para
            promover a marca?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Confirmar
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
