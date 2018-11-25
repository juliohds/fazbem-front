import * as React from "react";
import { Col, Navbar, NavbarToggler, NavbarBrand, Collapse } from "reactstrap";
import {
  IHeaderPropsFromState,
  IHeaderPropsFromDispatch
} from "../../store/layout/types";
import { connect } from "react-redux";
import { IApplicationState } from "../../store";
import { Dispatch } from "redux";
import {
  setTransparentClass,
  setIsOpen,
  setLogged
} from "../../store/layout/actions";
import logo from "../../images/logo.jpg";
import { LoggedNavbar, UnLoggedNavbar } from "./navbar/navbar";

type AllProps = IHeaderPropsFromState & IHeaderPropsFromDispatch;

class Header extends React.Component<AllProps> {
  public render() {
    return (
      <React.Fragment>
        <div
          className={`header-container ${
            this.props.transparentClass !== undefined
              ? this.props.transparentClass
              : ""
          }`}
        >
          <Col xs="12">
            <Navbar className="header-content span" light={true} expand="md">
              <NavbarToggler onClick={this.toggle} />
              <NavbarBrand className="mr-auto" href="/">
                {/* {this.state.home !== "notfound" && */}
                {/* <img src={logo} alt="Em Dia" className="header-brand-img" /> */}
                {/* } */}
                {/* {this.state.home === "notfound" && */}
                {/* <img src={logoEmdiaN} alt="Em Dia" className="header-brand-img" /> */}
                {/* }  */}
              </NavbarBrand>
              <Collapse isOpen={this.props.isOpen} navbar={true}>
                {this.getLogin()}
                {/* {this.state.modalActive} */}
              </Collapse>
            </Navbar>
          </Col>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    // this.checkAuthenticatedUser();
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  checkAuthenticatedUser() {
    if (this.props.isLogged) {
      return this.props.isLogged;
    }
    if (localStorage.getItem("user")) {
      this.props.setLogged(true);
    } else {
      this.props.setLogged(false);
    }

    return this.props.isLogged;
  }

  private getLogin(): any {
    const logged = this.checkAuthenticatedUser();
    let retorno: any = "";
    if (logged) {
      retorno = <LoggedNavbar />;
    } else {
      retorno = <UnLoggedNavbar />;
    }
    return retorno;
  }

  private toggle(): any {
    this.props.setIsOpen(!this.props.isOpen);
  }

  private handleScroll() {
    const doc = document.documentElement;
    if (doc) {
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top > 0) {
        this.props.setTransparentClass("");
      } else if (top === 0) {
        /* todo && this.state.home === "home" */
        this.props.setTransparentClass("transparent");
      }
    }
  }
}

const mapStateToProps = ({ layout }: IApplicationState) => ({
  transparentClass: layout.transparentClass,
  isOpen: layout.isOpen,
  isLogged: layout.isLogged
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTransparentClass: (trasnparentClass: string) =>
    dispatch(setTransparentClass(trasnparentClass)),
  setIsOpen: (isOpen: boolean) => dispatch(setIsOpen(isOpen)),
  setLogged: (isLogged: boolean) => dispatch(setLogged(isLogged))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
