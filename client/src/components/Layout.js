import * as React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import routes from "../assets/Routes";
import { Button } from "../styles";

function Layout({ onToggleDarkMode, isDarkMode }) {
  const btnContext = isDarkMode ? "Light" : "Dark";

  const navCollection = routes.map((route) => (
    <Button as={NavLink} key={route.path} to={route.path} end>
      {route.name}
    </Button>
  ));

  return (
    <div>
      <Header>
        <Navigation>{navCollection}</Navigation>
        <Button onClick={onToggleDarkMode}>{btnContext}</Button>
      </Header>

      <Outlet />

      <Footer></Footer>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 1rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  gap: 50px;
  background: ${(props) => props.theme.infoBody};
  width: 100%;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

export default Layout;
