import styled, { css } from "styled-components";

export const Root = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 80px;
  z-index: 100;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: 0.3s;

  ${(props) =>
    props.backgroundActive &&
    css`
      background: #161616;
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    `}

  @media (max-width: 1024px) {
    height: 60px;
    background: #161616;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const NavigatorContainer = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  width: calc(100% - 73px);
  height: 100%;
  float: left;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LanguageContainer = styled.div`
  width: 73px;
  height: 100%;
  float: right;
  position: relative;
  @media (max-width: 1024px) {
    margin-right: 20px;
  }
`;

export const ButtonMenu = styled.div`
  line-height: 70px;
  float: left;
  cursor: pointer;

  position: relative;

  padding: 0px 20px;
  padding-top: 10px;
  transition: 0.3s;
  font-size: 14px;

  &:hover {
    color: ${(props) => props.theme.light.main};
  }

  ${(props) =>
    props.selected &&
    css`
      &:hover {
        color: white;
      }
    `}

  @media (max-width: 1024px) {
    width: 100%;
    padding-top: 0px;
    text-align: center;
    line-height: 60px;
  }
`;

export const ButtonMenuColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12px;
  background: ${(props) => props.theme.light.main};
  z-index: -1;

  transition: 0.2s;

  @media (max-width: 1024px) {
    height: 0px;

    ${(props) =>
      props.selected &&
      css`
        height: 100%;
      `}
  }

  ${(props) =>
    props.selected &&
    css`
      height: 100%;
    `}
`;

export const LanguageCenter = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const LangText = styled.div`
  background: transparent;
  width: 100%;
  font-size: 10px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const Select = styled.select`
  background-color: transparent;
  color: white;
  width: 100%;
  padding: 0;
  height: 34px;
  margin: 0;
  border: 1px solid RGBA(255, 255, 255, 0.5);
  text-align: center;
  padding-left: 13px;
  font-weight: bold;
  border-radius: 0;
  background-image: linear-gradient(45deg, transparent 50%, #fff 50%),
    linear-gradient(135deg, #fff 50%, transparent 50%);
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

////////////////////////////////////////////////

export const BurgerButton = styled.div`
  padding: 0px 20px;
  line-height: 55px;
  padding-top: 5px;

  font-size: 20px;

  cursor: pointer;
  transition: 0.2s;

  display: none;

  @media (max-width: 1024px) {
    display: initial;
    float: left;
  }

  &:hover {
    background: ${(props) => props.theme.light.main};
  }
`;

export const SmallButtonContainer = styled.div`
  background: #161616;
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.75);
  width: 100%;
  position: fixed;
  top: 60px;
`;
