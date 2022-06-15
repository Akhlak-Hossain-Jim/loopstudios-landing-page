import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Hero() {
  return (
    <Container>
      <Header />
      <div className="hero_section">
        <div className="hero_text">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  min-height: 650px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("/images/desktop/image-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    background-image: url("/images/mobile/image-hero.jpg");
    min-height: 742px;
  }
  .hero_text {
    border: 2px solid var(--white);
    width: min(652px, 100%);
    padding: 40px 41px 28px;
    margin-top: 65px;
    @media (max-width: 548px) {
      margin-top: 121px;
      padding: 30px 29px 21px;
      border-width: 3px;
      width: 100%;
    }
    & > h1 {
      width: min(511px, 100%);
      font-weight: 300;
      font-size: calc(56.9px + 2vmin);
      line-height: 98%;
      text-transform: uppercase;
      font-family: var(--font-s);
      color: var(--white);
      @media (max-width: 548px) {
        width: min(315px, 100%);
        font-weight: 300;
        font-size: calc(30px + 2vmin);
        line-height: 97%;
        letter-spacing: 0.01em;
      }
    }
  }
  .hero_section {
    max-width: 1114px;
    margin: 0 auto;
    @media (max-width: 1140px) {
      padding: 50px;
    }
    @media (max-width: 548px) {
      padding: 46px 26px;
    }
  }
`;
