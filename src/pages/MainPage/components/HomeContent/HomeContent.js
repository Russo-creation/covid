import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import { useIntersection } from "react-use";
import gsap from "gsap";

import {
  Backgroud,
  BackgroudBlurred,
  BannerContainer,
  CenterText,
  BottomCornerText,
  RedCovidText,
} from "./HomeContent.css";

const HomeContent = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  if (sectionRef.current) {
    const fadeIn = (element) => {
      gsap.to(element, {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 20,
        },
      });
    };

    const fadeOut = (element) => {
      gsap.to(element, {
        duration: 1.5,
        opacity: 0,
        y: 100,
        ease: "power4.out",
      });
    };

    intersection && intersection.intersectionRatio < 0.3
      ? fadeOut(".fadeIn")
      : fadeIn(".fadeIn");
  }

  const { t } = useTranslation(["home"]);

  return (
    <Backgroud id="HomeContent" ref={sectionRef}>
      <BackgroudBlurred></BackgroudBlurred>
      <BannerContainer className="fadeIn" style={{ opacity: "0" }}>
        <CenterText>
          {t("centerFirst")} <RedCovidText>{t("centerSecond")}</RedCovidText>
        </CenterText>
        <BottomCornerText>{t("rightCorner")}</BottomCornerText>
      </BannerContainer>
    </Backgroud>
  );
};

export default HomeContent;
