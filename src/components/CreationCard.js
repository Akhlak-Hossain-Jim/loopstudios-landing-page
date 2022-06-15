import React from "react";
import styled from "styled-components";

export default function CreationCard({ image, title }) {
  return (
    <Creation bg={image}>
      <h3>{title}</h3>
    </Creation>
  );
}

const Creation = styled.div`
  width: 256px;
  height: 450px;
  background-image: var(--gradient),
    url("/images/desktop/image-${(props) => props.bg}.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  padding: 32px 24px;
  h3 {
    font-weight: 300;
    font-size: 32px;
    line-height: 100%;
    text-transform: uppercase;
    font-family: var(--font-s);
    color: var(--white);
    margin: auto auto 0 0;
    max-width: 132px;
    @media (max-width: 548px) {
      font-size: 27px;
      max-width: 125px;
    }
  }
  &:hover {
    background-image: var(--gradient-hover),
      url("/images/desktop/image-${(props) => props.bg}.jpg");
    h3 {
      color: var(--black);
    }
  }
  @media (max-width: 548px) {
    width: 100%;
    height: 138px;
    background-image: var(--gradient),
      url("/images/mobile/image-${(props) => props.bg}.jpg");
    padding: 24px 23px;
    &:hover {
      background-image: var(--gradient-hover),
        url("/images/mobile/image-${(props) => props.bg}.jpg");
    }
  }
`;
