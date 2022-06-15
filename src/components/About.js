import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <div className="about_image">
        <img
          src="/images/desktop/image-interactive.jpg"
          alt="interactivity iconic"
        />
      </div>
      <div className="about_card">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  max-width: 1114px;
  margin: 0 auto;
  padding: 160px 0 184px;
  @media (max-width: 548px) {
    padding: 111px 27px 63px;
  }
  .about {
    &_image {
      width: min(100%, 731px);
      & > img {
        width: 100%;
        height: auto;
      }
    }
    &_card {
      width: min(100%, 545px);
      background: var(--white);
      /* margin: -318px 0 0 auto; */
      padding: 97px 3px 75px 97px;
      position: relative;
      z-index: 1;
      position: absolute;
      bottom: 109px;
      right: 0;
      @media (max-width: 548px) {
        position: relative;
        padding: 56px 16px 50px 13px;
        text-align: center;
        bottom: 0;
      }
      & > h2 {
        font-weight: 300;
        font-size: 48px;
        line-height: 100%;
        text-transform: uppercase;
        font-family: var(--font-s);
        @media (max-width: 548px) {
          font-size: 36px;
          line-height: 100%;
        }
      }
      & > p {
        font-weight: 400;
        font-size: 15px;
        line-height: 165%;
        padding-top: 25px;
        @media (max-width: 548px) {
          font-size: 17px;
          line-height: 167%;
          letter-spacing: 0.003em;
          color: var(--d-gray);
        }
      }
    }
  }
`;
