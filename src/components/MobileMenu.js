import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

export default function MobileMenu({ setHamOpenState }) {
  return (
    <Container>
      <div className="mob_menu__content">
        <TOP>
          <div className="header_logo">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="header__ham" onClick={() => setHamOpenState(false)}>
            <img src="/images/icon-close.svg" alt="close menu" />
          </div>
        </TOP>
        <Nav classes={"menu_navigation"} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: var(--black);
  padding: 45px 31px 45px 28px;
  animation: come 0.5s ease-in-out both;
  @keyframes come {
    0% {
      width: 0px;
      height: 0px;
      border-bottom-left-radius: 200%;
    }
    100% {
      width: 100vw;
      height: 100vh;
      border-bottom-left-radius: 0px;
    }
  }
  .mob_menu__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    animation: fade 0.3s ease-in-out 0.5s both;
    @keyframes fade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
const TOP = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header_logo {
    width: min(165px, 100%);
    & > img {
      width: 100%;
      height: auto;
    }
  }
  .header__ham {
    cursor: pointer;
  }
`;
