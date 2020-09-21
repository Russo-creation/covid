import React from "react";

import {
  Root,
  TitlePage,
  ThreeContainer,
  Footer,
  FooterContainer,
  LeftText,
  RightText,
} from "./LiveCounterContent.css";

import { useTranslation } from "react-i18next";

const LiveCounterContent = () => {
  const { t } = useTranslation(["livesCounter"]);
  return (
    <div id="LiveCounterContent">
      <Root>
        <TitlePage>{t("pageTitle")}</TitlePage>
        <ThreeContainer></ThreeContainer>
      </Root>
      <Footer>
        <FooterContainer>
          <LeftText>
            <div>Created and desing by Łukasz Macoń</div>
            <div>
              COVID API delivered by{" "}
              <a
                href="https://covid19api.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://covid19api.com/
              </a>
            </div>
          </LeftText>
          <RightText>
            <div>Link to github repository</div>
            <div>
              <a
                href="https://github.com/Russo-creation/my.portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Russo-creation/my.portfolio
              </a>
            </div>
          </RightText>
        </FooterContainer>
      </Footer>
    </div>
  );
};

export default LiveCounterContent;
