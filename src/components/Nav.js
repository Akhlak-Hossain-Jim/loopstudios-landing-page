import React from "react";
import styled from "styled-components";

export default function Nav({ classes = "normal" }) {
  const links = ["About", "Careers", "Events", "Products", "Support"];
  return (
    <Container className={classes}>
      {React.Children.toArray(
        links.map((data) => <div className="nav_link">{data}</div>)
      )}
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  gap: 32px;
  color: var(--white);
  @media (max-width: 548px) {
    flex-direction: column;
  }
  &.normal {
    .nav_link {
      cursor: pointer;
      font-size: 15px;
      line-height: 21px;
      position: relative;
      @media (max-width: 548px) {
        font-size: 17px;
        line-height: 23px;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -12px;
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
  &.menu_navigation {
    flex-direction: column;
    font-family: var(--font-s);
    font-size: 27px;
    line-height: 27px;
    text-transform: uppercase;
    gap: 29px;
    margin: auto 0;
  }
`;
