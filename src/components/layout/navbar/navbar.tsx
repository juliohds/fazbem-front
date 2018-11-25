import * as React from "react";
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { TabletBreakpoint } from "../../../utils/breakpoint";
import { NavLink } from "react-router-dom";
import iconeSair from "../../../images/icone-sair.png";
import iconeEntrar from "../../../images/icone-entrar.png";

export const LoggedNavbar: React.SFC = () => (
  <TabletBreakpoint>
    <Nav className="ml-auto" navbar={true}>
      <NavItem className="header-li">
        <NavLink to="/">INÍCIO</NavLink>
      </NavItem>
      <NavItem className="header-li">
        <NavLink to="/voce-emdia">VOCÊ EMDIA</NavLink>
      </NavItem>
      <NavItem className="header-li">
        <NavLink to="/minhas-dividas">MINHAS DÍVIDAS</NavLink>
      </NavItem>
      <NavItem className="header-li">
        <NavLink to="/minhas-negociacoes">MINHAS NEGOCIAÇÕES</NavLink>
      </NavItem>
      <UncontrolledDropdown inNavbar={true}>
        <DropdownToggle color="none" tag="li" className="header-li">
          <a className="header-cursor">AJUDA</a>
        </DropdownToggle>
        <DropdownMenu className="header-help">
          <DropdownItem tag="li">
            <NavLink to="/duvidas-frequentes">DÚVIDAS</NavLink>
          </DropdownItem>
          <DropdownItem tag="li">
            <NavLink to="/meus-chamados">
              MEUS CHAMADOS {/* <div className="header-help-circle">0</div> */}
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown inNavbar={true}>
        <DropdownToggle color="none" tag="li" className="header-li">
          <a className="header-sair">
            <img src={iconeSair} />
          </a>
        </DropdownToggle>
        <DropdownMenu className="header-help">
          <DropdownItem tag="li">
            <NavLink to="/logout">SAIR</NavLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </TabletBreakpoint>
);

export const UnLoggedNavbar: React.SFC = () => (
  <TabletBreakpoint>
    <Nav className="ml-auto" navbar={true}>
      <NavItem className="header-li">
        <NavLink className="header-item-text" to="/">
          INÍCIO
        </NavLink>
      </NavItem>
      <NavItem className="header-li">
        <NavLink className="header-item-text" to="/voce-voluntario">
          SEJA UM EMBAIXADOR
        </NavLink>
      </NavItem>
      <UncontrolledDropdown inNavbar={true}>
        <DropdownToggle color="none" tag="li" className="header-li">
          <a className="cursor">AJUDA</a>
        </DropdownToggle>
        <DropdownMenu className="header-help">
          <DropdownItem tag="li">
            <NavLink className="header-item-text" to="/duvidas-frequentes">
              DÚVIDAS
            </NavLink>
          </DropdownItem>
          <DropdownItem tag="li">
            <NavLink className="header-item-text" to="/fale-conosco">
              FALE CONOSCO
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem className="header-li">
        <NavLink className="header-item-text" to="/cadastre-se">
          CADASTRE-SE
        </NavLink>
      </NavItem>
      <NavItem className="header-li-entrar">
        <NavLink className="entrar" to="/entrar">
          <img src={iconeEntrar} />
          ENTRAR
        </NavLink>
      </NavItem>
    </Nav>
  </TabletBreakpoint>
);
