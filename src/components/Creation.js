import React from "react";
import styled from "styled-components";
import CreationCard from "./CreationCard";

export default function Creation() {
  const creations = [
    {
      image: "deep-earth",
      title: "Deep Earth",
    },
    {
      image: "night-arcade",
      title: "Night Arcade",
    },
    {
      image: "soccer-team",
      title: "Soccer Team",
    },
    {
      image: "grid",
      title: "The Grid",
    },
    {
      image: "from-above",
      title: "From Above",
    },
    {
      image: "pocket-borealis",
      title: "Pocket Borealis",
    },
    {
      image: "curiosity",
      title: "The Curiosity",
    },
    {
      image: "fisheye",
      title: "Make it Fisheye",
    },
  ];
  return (
    <Container>
      <div className="creation_title">
        <h2>Our creations</h2>
        <button className="creation_button">See all</button>
      </div>
      <div className="creation_container">
        {React.Children.toArray(
          creations.map((data) => <CreationCard {...data} />)
        )}
      </div>
      <button className="creation_button phone">See all</button>
    </Container>
  );
}

const Container = styled.section`
  max-width: 1114px;
  margin: 0 auto;
  padding-bottom: 183px;
  @media (max-width: 1140px) {
    padding: 50px;
    padding-bottom: 140px;
  }
  @media (max-width: 548px) {
    padding: 0 27px 109px;
    display: flex;
    flex-direction: column;
  }
  .creation {
    &_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      padding-bottom: 80px;
      & > h2 {
        font-weight: 300;
        font-size: 48px;
        line-height: 100%;
        text-transform: uppercase;
        font-family: var(--font-s);
        @media (max-width: 548px) {
          width: 100%;
          font-size: 36px;
          text-align: center;
          letter-spacing: 0.01em;
        }
      }
      @media (max-width: 548px) {
        padding-bottom: 55px;
        & > button {
          display: none;
        }
      }
    }

    &_container {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      @media (max-width: 548px) {
        flex-direction: column;
        gap: 28px;
      }
    }

    &_button {
      padding: 13px 44px 14px 39px;
      border: 2px solid var(--black);
      font-weight: 400;
      font-size: 15px;
      line-height: 100%;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      outline: 0;
      background: transparent;
      width: max-content;
      &:hover {
        background: var(--black);
        color: var(--white);
      }
      @media (max-width: 548px) {
        border: 1px solid var(--black);
        padding: 16px 50px 16px 44px;
        font-size: 15px;
        letter-spacing: 0.41em;
      }
      &.phone {
        @media (min-width: 549px) {
          display: none;
        }
        margin: 35px auto 0;
      }
    }
  }
`;
