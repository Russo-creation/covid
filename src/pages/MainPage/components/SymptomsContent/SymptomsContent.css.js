import styled, { css } from "styled-components";

export const Root = styled.div`
  width: 80%;
  text-align: center;
  margin: auto;
  color: black;
  letter-spacing: 1px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  padding-top: 60px;

  @media (max-width: 1024px) {
    margin-top: 40px;
    font-size: 20px;
  }
`;

export const Description = styled.div`
  margin-top: 5px;
  fontsize: 18px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    margin-bottom: 40px;
    font-size: 16px;
  }
`;

/////////////////////////////////////////////////////////

export const SymptomContainer = styled.div`
  display: grid;

  grid-column-gap: 10%;
  grid-row-gap: 60px;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  grid-gap: 60px;

  @media (max-width: 1024px) {
    grid-gap: 40px;
  }
`;

export const SymptomCage = styled.div`
  height: 250px;
  border: 1px dashed silver;

  @media (max-width: 1024px) {
    height: 200px;
  }
`;

export const SymptomImage = styled.div`
  height: calc(100% - 40px);
  width: 30%;
  margin: auto;
  background-color: blue;
  background: url("${(props) => props.uri}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SymptomText = styled.div`
  font-size: 18px;
  width: 100%;
`;

//////////////////////////////////////////////////////////////////////

export const ProtectContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  grid-column-gap: 5vw;
  grid-row-gap: 5vw;

  margin-bottom: 6vh;
`;

export const ProtectCage = styled.div`
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.75);
`;

export const ProtectTitle = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 30px 0px;
  text-transform: uppercase;
`;

export const ProtectImage = styled.div`
  height: 20vw;
  width: 100%;
  margin: auto;
  background: url("${(props) => props.uri}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1024px) {
    height: 20vh;
  }
`;

export const ImageDecorator = styled.div`
  height: 6px;
  width: 70%;
  background-color: ${(props) => props.theme.light.main};

  ${(props) =>
    props.right &&
    css`
      margin-left: auto;
    `}
`;

export const ProtectDescription = styled.div`
  text-align: justify;
  font-size: 14px;
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

////////////////////////////////////////
export const LineSeparator = styled.div`
  height: 2px;
  width: 100%;

  background: linear-gradient(
    to right,
    transparent 0%,
    ${(props) => props.theme.light.main} 40%,
    ${(props) => props.theme.light.main} 60%,
    transparent 100%
  );
`;
