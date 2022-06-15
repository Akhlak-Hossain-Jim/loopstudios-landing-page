import React from "react";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

export default function Header() {
  const [hamOpenState, setHamOpenState] = React.useState(false);
  return (
    <>
      <Container>
        <div className="header_logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="header_menus">
          <Nav />
        </div>
        <div
          className="header__ham"
          onClick={() => setHamOpenState(!hamOpenState)}
        >
          <img src="/images/icon-hamburger.svg" alt="menu" />
        </div>
      </Container>
      {hamOpenState && <MobileMenu setHamOpenState={setHamOpenState} />}
    </>
  );
}

const Container = styled.header`
  padding: 64px 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1114px;
  margin: 0 auto;
  @media (max-width: 1140px) {
    padding: 50px;
  }
  @media (max-width: 548px) {
    padding: 46px 27px;
  }
  .header {
    &_logo {
      width: min(192px, 100%);
      & > img {
        width: 100%;
        height: auto;
        margin: auto;
      }
    }
    &_menus {
      @media (max-width: 768px) {
        display: none;
      }
    }
    &__ham {
      cursor: pointer;
      @media (min-width: 769px) {
        display: none;
      }
    }
  }
`;
