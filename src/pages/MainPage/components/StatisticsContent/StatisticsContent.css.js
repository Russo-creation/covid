import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  color: black;
  letter-spacing: 1px;
  position: relative;

  display: flex;
  align-items: stretch;
`;

export const TitlePage = styled.div`
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  padding-top: 60px;
  color: black;
  text-align: center;
`;

///////////////////////////////////////////////////////////

export const ChartContainer = styled.div`
  flex-basis: 1%;
`;

export const ChartHelper = styled.div`
  position: absolute;
  margin-top: 35vh;
  height: calc(100% - 38vh);
  left: 50px;

  @media (max-width: 1024px) {
    left: 0px;
  }
`;

export const ChartSticky = styled.div`
  background-color: white;
  position: -webkit-sticky;
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  width: 600px;
  height: 360px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 1;

  @media (max-width: 1024px) {
    width: 375px;

    transform: translateY(-20%);
  }
`;

export const ChartManipulatorDiv = styled.div`
  height: 60px;
  width: 100%;
  border-top: 1px solid silver;
`;

///////////////////////////////////////////////////////////

export const StatiscticsRight = styled.div`
  flex-basis: 99%;
`;

export const StatisticSection = styled.div`
  margin-left: auto;
  width: 40%;
  min-height: 80vh;
  position: relative;

  @media (max-width: 1024px) {
    width: 90%;
    margin: auto;
  }
`;

export const StatisticContainer = styled.div`
  text-align: left;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;

  z-index: 10;

  @media (max-width: 1024px) {
    position: block;
    top: 0;
    transform: translateY(0%);
  }
`;

export const StatisticTitle = styled.div`
  font-weight: bold;
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const StatisticDescription = styled.div`
  font-size: 16px;
  text-align: justify;
  width: 90%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LineSeparator = styled.div`
  margin-left: auto;
  height: 2px;
  width: 50%;
  background: ${(props) => props.theme.light.main};

  @media (max-width: 1024px) {
    width: 70%;
    margin-bottom: 30px;
  }
`;

export const Select = styled.select`
  display: inlie-block;
  background-color: transparent;
  color: black;
  width: 40%;

  height: 34px;
  margin-top: 10px;
  font-size: 16px;

  border: 1px solid RGBA(0, 0, 0, 0.5);
  text-align: left;
  padding-left: 13px;
  font-weight: bold;
  border-radius: 0;
  background-image: linear-gradient(45deg, transparent 50%, #000 50%),
    linear-gradient(135deg, #000 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  appearance: none;
  cursor: pointer;
  option {
    background-color: transparent;
    color: black;
    font-size: 20px;
  }
  &:focus {
    outline: none;
  }
`;
