import styled, { keyframes } from "styled-components";

import covidBcg from "../../../../images/covidBcg.jpg";

export const cameraPam = keyframes`
  0% {
    background-position: 35% 0%;
  }
  25% {
    background-position: 33% 20%;
  }
  50% {
    background-position: 35% 30%;
  }
  75% {
    background-position: 37% 20%;
  }
  100% {
    background-position: 35% 0%;
  }
`;

export const Backgroud = styled.div`
  width: 100%;
  height: 110vh;
  // background-position: 35% 0%;
  background: url("${covidBcg}");
  position: relative;

  background-size: cover;
  animation: ${cameraPam} 20s infinite;
`;

export const BackgroudBlurred = styled.div`
  width: 100%;
  height: 100%;
  // background-position: 35% 0%;
  background: url("${covidBcg}");
  filter: blur(8px);
  -webkit-filter: blur(10px);

  background-size: cover;
  animation: ${cameraPam} 20s infinite;
`;

export const BannerContainer = styled.div`
  position: absolute;
  left: 6vw;
  right: 6vw;

  top: 15vh;
  bottom: 15vh;

  background: url("${covidBcg}");
  background-position: 35% 0%;
  box-shadow: 0px 3px 16px 4px rgba(0, 0, 0, 1);

  text-transform: uppercase;
  color: white;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 10vh;

  @media (max-width: 1024px) {
    padding: 4vh;
  }
`;

export const CenterText = styled.div`
  text-align: center;
  font-size: 42px;

  @media (max-width: 1024px) {
    font-size: 26px;
  }
`;

export const RedCovidText = styled.span`
  color: ${(props) => props.theme.light.main};
`;

export const BottomCornerText = styled.div`
  position: absolute;
  bottom: 10vh;
  right: 10vh;
  text-align: right;
  font-size: 38px;

  @media (max-width: 1024px) {
    font-size: 20px;
    bottom: 4vh;
    right: 4vh;
  }
`;
