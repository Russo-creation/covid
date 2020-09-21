import styled, { css } from "styled-components";

export const Root = styled.div`
  position: fixed;
  top: 50%;
  left: 0px;
  z-index: 100;
  transform: translateY(-50%);
`;

export const DotWrapper = styled.div`
  position: relative;
  width: 26px;
  height: 26px;

  padding: 10px 10px;
  cursor: pointer;

  transition: 0.3s;
  border-left: 3px solid transparent;

  &:hover {
    border-left-color: ${(props) => props.theme.light.main};
  }
`;

export const Dot = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  height: 8px;
  width: 8px;
  background-color: ${(props) => props.theme.light.main};
  border-radius: 50%;
  opacity: 0.4;

  transition: 0.6s;

  ${(props) =>
    props.visited &&
    css`
      opacity: 1;
    `}
`;
