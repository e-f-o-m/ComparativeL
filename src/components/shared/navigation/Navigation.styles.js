import { Link } from "react-router-dom";
import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

const Nav = styled.nav`
  width: 100%;
  height: 5em;
  background-color: var(--secondary-color);
  display: grid;
  grid-template-columns: 20% 60% 20%;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  position: sticky;
  top: 0;

  @media ${devices.tablet} {
    grid-template-columns: 15% 70% 15%;
  }

  @media ${devices.laptop} {
    grid-template-columns: 10% 80% 10%;
    height: 6em;
  }
`;

const Logo = styled.img`
  transform: scale(0.8);

  @media ${devices.laptop} {
    transform: scale(1);
  }
`;

const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  padding: 1em;
  display: block;
  grid-area: "menu";
  span {
    color: var(--white);
    font-weight: normal;
    text-align: center;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;

const PageTitle = styled.h1`
  font-size: 1em;
  text-align: center;
  color: var(--white);

  @media ${devices.tablet} {
    display: none;
  }
`;

const LateralMenu = styled.div`
  width: 10em;
  height: calc(100vh - 5em);
  position: relative;
  float: right;
  transform: ${(props) =>
    props.isMenuHidden ? "translateX(200px)" : "translateX(0)"};
  background-color: var(--secondary-color);
  transition: all 0.6s ease-in;
  border-bottom-left-radius: 2em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    display: none;
  }
`;

const NavItemList = styled.li`
  list-style: none;
  display: none;

  @media ${devices.tablet} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    justify-self: center;
    padding-left: 2em;
  }
  @media ${devices.laptop} {
    justify-self: center;
    padding-left: 0;
  }
`;

const LateralItemList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media ${devices.laptop} {
    display: none;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  text-align: left;
  padding: 1em 1em;
  font-size: 0.8em;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: var(--black);
  }

  @media ${devices.tablet} {
    font-size: 1em;
    width: auto;
  }
`;

const LoginItem = styled(NavItem)`
  display: none;
  @media ${devices.tablet} {
    display: block;
  }
`;

export {
  Nav,
  Logo,
  ButtonMenu,
  PageTitle,
  LateralMenu,
  NavItemList,
  LateralItemList,
  NavItem,
  LoginItem,
};
