import React, { useRef } from "react";

import {
  Root,
  Title,
  Description,
  SymptomContainer,
  SymptomCage,
  SymptomImage,
  SymptomText,
  ProtectContainer,
  ProtectCage,
  ProtectTitle,
  ProtectImage,
  ImageDecorator,
  ProtectDescription,
  LineSeparator,
} from "./SymptomsContent.css";

import feverImg from "../../../../images/fever.png";
import coughImg from "../../../../images/cough.png";
import breathingImg from "../../../../images/breathing.png";
import soreThroatImg from "../../../../images/sore-throat.png";

import washHands from "../../../../images/washHands.jpg";
import socialDistance from "../../../../images/socialDistance.jpg";
import wearMask from "../../../../images/wearMask.jpg";

import { useTranslation } from "react-i18next";

import { useIntersection } from "react-use";
import { gsap } from "gsap";

const SymptomsContent = () => {
  const { t } = useTranslation(["symptoms"]);

  let sectionRefSymptoms = useRef(null);

  const intersection = useIntersection(sectionRefSymptoms, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  if (sectionRefSymptoms.current) {
    const fadeIn = (element) => {
      gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        {
          duration: 0.4,
          opacity: 1,
          y: 0,
          ease: "power4.out",
          stagger: 0.3,
        }
      );
    };

    const fadeOut = (element) => {
      gsap.to(element, {
        duration: 0.4,
        opacity: 0,
        y: -100,
        ease: "power4.out",
        stagger: 0.3,
      });
    };

    intersection && intersection.intersectionRatio < 0.2
      ? fadeOut(".Symptom")
      : fadeIn(".Symptom");
  }

  return (
    <Root id="SymptomsContent">
      <Title>{t("symptoms.title")}</Title>
      <Description>{t("symptoms.titleDescription")}</Description>

      <SymptomContainer ref={sectionRefSymptoms}>
        <SymptomCage className="Symptom">
          <SymptomImage uri={feverImg}></SymptomImage>
          <SymptomText>{t("symptoms.fever")}</SymptomText>
        </SymptomCage>
        <SymptomCage className="Symptom">
          <SymptomImage uri={coughImg}></SymptomImage>
          <SymptomText>{t("symptoms.cough")}</SymptomText>
        </SymptomCage>
        <SymptomCage className="Symptom">
          <SymptomImage uri={breathingImg}></SymptomImage>
          <SymptomText>{t("symptoms.heavyBreathing")}</SymptomText>
        </SymptomCage>
        <SymptomCage className="Symptom">
          <SymptomImage uri={soreThroatImg}></SymptomImage>
          <SymptomText>{t("symptoms.sorethroat")}</SymptomText>
        </SymptomCage>
      </SymptomContainer>

      <Title>{t("protect.title")}</Title>
      <Description>{t("protect.titleDescription")}</Description>

      <ProtectContainer>
        <ProtectCage>
          <ProtectTitle>{t("protect.protectFirst.title")}</ProtectTitle>
          <ImageDecorator right></ImageDecorator>
          <ProtectImage uri={washHands}></ProtectImage>
          <ImageDecorator left></ImageDecorator>
          <ProtectDescription>
            {t("protect.protectFirst.titleDescription")}
          </ProtectDescription>
        </ProtectCage>
        <ProtectCage>
          <ProtectTitle>{t("protect.protectSecond.title")}</ProtectTitle>
          <ImageDecorator right></ImageDecorator>
          <ProtectImage uri={socialDistance}></ProtectImage>
          <ImageDecorator left></ImageDecorator>
          <ProtectDescription>
            {t("protect.protectSecond.titleDescription")}
          </ProtectDescription>
        </ProtectCage>
        <ProtectCage>
          <ProtectTitle>{t("protect.protectThird.title")}</ProtectTitle>
          <ImageDecorator right></ImageDecorator>
          <ProtectImage uri={wearMask}></ProtectImage>
          <ImageDecorator left></ImageDecorator>
          <ProtectDescription>
            {t("protect.protectThird.titleDescription")}
          </ProtectDescription>
        </ProtectCage>
      </ProtectContainer>

      <LineSeparator></LineSeparator>
    </Root>
  );
};

export default SymptomsContent;
