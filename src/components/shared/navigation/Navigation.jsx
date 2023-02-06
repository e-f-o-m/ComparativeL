import React from "react";
import { useLocation } from "react-router-dom";

import appLogo from "../../../images/appLogo.png";
import {
  Nav,
  Logo,
  ButtonMenu,
  PageTitle,
  LateralMenu,
  LateralItemList,
  NavItemList,
  NavItem,
  LoginItem,
} from "./Navigation.styles";

function Navigation() {
  const [isMenuHidden, setIsMenuHidden] = React.useState(true);
  const location = useLocation();
  return (
    <>
      <Nav>
        <Logo src={appLogo} alt="Logotipo de comparing code app" />
        <NavItemList>
          <NavItem to="/" className={location.pathname === "/" ? "active" : ""}>
            Inicio
          </NavItem>
          <NavItem
            to="/admin"
            className={location.pathname === "/admin" ? "active" : ""}
          >
            Admin
          </NavItem>
          <NavItem to="/">Acerca de</NavItem>
        </NavItemList>
        <PageTitle>Home</PageTitle>
        <ButtonMenu onClick={() => setIsMenuHidden(!isMenuHidden)}>
          <span className="material-icons">
            {!isMenuHidden ? "close" : "menu"}
          </span>
        </ButtonMenu>
        <LoginItem to="/">Login</LoginItem>
      </Nav>
      <LateralMenu isMenuHidden={isMenuHidden}>
        <LateralItemList>
          <NavItem to="/" className={location.pathname === "/" ? "active" : ""}>
            Inicio
          </NavItem>
          <NavItem
            to="/admin"
            className={location.pathname === "/admin" ? "active" : ""}
          >
            Admin
          </NavItem>
          <NavItem to="/">Acerca de</NavItem>
        </LateralItemList>
      </LateralMenu>
    </>
  );
}

export default Navigation;
