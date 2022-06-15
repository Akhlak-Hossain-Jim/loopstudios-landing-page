import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

export default function Footer() {
  return (
    <Container>
      <div className="footer_container">
        <div className="footer_left">
          <img src="/images/logo.svg" alt="logo" className="logo" />
          <Nav />
        </div>
        <div className="footer_right">
          <div className="footer_right__social">
            <div className="footer_right__social_icon">
              <img src="/images/icon-facebook.svg" alt="facebook icon" />
            </div>
            <div className="footer_right__social_icon">
              <img src="/images/icon-twitter.svg" alt="twitter icon" />
            </div>
            <div className="footer_right__social_icon">
              <img src="/images/icon-pinterest.svg" alt="pinterest icon" />
            </div>
            <div className="footer_right__social_icon">
              <img src="/images/icon-instagram.svg" alt="instagram icon" />
            </div>
          </div>
          <p className="footer_right__right">
            &copy; 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-color: var(--black);
  color: var(--white);
  .footer {
    &_container {
      padding: 45px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      max-width: 1114px;
      margin: 0 auto;
      @media (max-width: 1140px) {
        padding: 50px;
      }
      @media (max-width: 548px) {
        padding: 64px 30px 67px;
        text-align: center;
        flex-direction: column;
        gap: 56px;
      }
    }
    &_left {
      & > img {
        width: (144px, 100%);
        height: auto;
        margin-bottom: 26px;
        @media (max-width: 548px) {
          width: (164px, 100%);
          margin-bottom: 41px;
        }
      }
    }
    &_right {
      &__social {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 16px;
        padding-bottom: 26px;
        @media (max-width: 548px) {
          gap: 18px;
          padding-bottom: 21px;
          justify-content: center;
        }
        &_icon {
          border-radius: 1px;
          width: 24px;
          height: auto;
          position: relative;
          @media (max-width: 548px) {
            width: 28px;
          }
          & > img {
            width: 100%;
            height: auto;
          }
          &:after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 24px;
            height: 2px;
            background: transparent;
            border-radius: 1px;
          }
          &:hover {
            &:after {
              background: var(--white);
            }
          }
        }
      }
      &__right {
        font-size: 15px;
        line-height: 21px;
        text-align: right;
        color: var(--l-gray);
        @media (max-width: 548px) {
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          letter-spacing: 0.033em;
        }
      }
    }
  }
`;
