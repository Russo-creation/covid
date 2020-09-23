import styled from "styled-components";

import livesCounterBcg from "../../../../images/galaxy_starfield1.jpg";

export const Root = styled.div`
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  position: relative;
  min-height: 100vh;

  background: url("${livesCounterBcg}");
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
`;

export const TitlePage = styled.div`
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  padding-top: 30px;
  color: ${(props) => props.theme.light.main};
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const ThreeContainer = styled.div`
  position: absolute;
  left: 6vw;
  right: 6vw;

  top: 15vh;
  bottom: 10vh;
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 1);

  @media (max-width: 1024px) {
    left: 0vw;
    right: 0vw;
    top: 20vh;
    bottom: 20vh;
  }
`;

export const ChoosedData = styled.footer`
  position: absolute;

  right: 0;

  top: 0;
  //border: 1px solid white;
  color: white;
  font-size: 20px;
  padding: 10px;
  z-index: 1;

  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;

  box-shadow: 0px 0px 5px 0px ${(props) => props.theme.light.main};
  background: red;
`;

export const Footer = styled.footer`
  background: #161616;
  padding: 20px;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1024px;
  margin: auto;
  display: flex;
  align-items: stretch;
  color: ${(props) => props.theme.light.grayColor};
  a {
    color: ${(props) => props.theme.light.grayColor};
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const LeftText = styled.footer`
  flex-grow: 1;
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
    padding-bottom: 15px;
  }
`;

export const RightText = styled.footer`
  flex-grow: 1;
  text-align: right;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;
