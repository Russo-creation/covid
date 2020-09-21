import React, { useEffect, useRef, useState } from "react";

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

import { useTranslation } from "react-i18next";

import { useIntersection } from "react-use";
import { TweenMax, Power3, TimelineMax, TimelineLite } from "gsap";

const SymptomsContent = () => {
  const { t } = useTranslation(["symptoms"]);

  const [showSymptoms, setShowSymptoms] = useState(false);

  let sectionRefSymptoms = useRef(null);
  let Fever = useRef(null);
  let Cough = useRef(null);
  let Breath = useRef(null);
  let Throat = useRef(null);

  useEffect(() => {
    /*    TweenMax.fromTo(
      [Fever, Breath],
      0.5,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
    );
    TweenMax.fromTo(
      [Cough, Throat],
      0.5,
      { y: -18 },
      { y: 18, repeat: -1, yoyo: true }
    ); */
    /* TweenMax.to(sectionRefSymptoms, 0, {
      css: { visibility: "visable" },
    });

    TweenMax.staggerFrom(
      [Fever, Cough, Breath, Throat],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.2
    ); */
  }, [Cough]);

  const intersection = useIntersection(sectionRefSymptoms, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  //console.log(Cough, "halo");

  const fadeOut = () => {
    if (Cough && Throat) {
      // console.log("tu");
      /* TweenMax.fromTo(
        [".Symptom"],
        0.5,
        { y: -18 },
        { y: 18, repeat: -1, yoyo: true }
      ); */

      var boxesTimeline = new TimelineLite();
      boxesTimeline
        .staggerFrom(".Symptom", 0.3, { scale: 0 }, 0.2)
        .to(".Symptom", 1, { rotation: 360, scale: 0.5, opacity: 0 });
    }
  };

  const fadeIn = () => {};

  //  intersection && intersection.intersectionRatio < 0.3 ? fadeOut() : fadeIn();

  return (
    <Root id="SymptomsContent">
      <Title>{t("symptoms.title")}</Title>
      <Description>{t("symptoms.titleDescription")}</Description>

      <SymptomContainer ref={sectionRefSymptoms}>
        <SymptomCage ref={(el) => (Fever = el)} className="Symptom">
          <SymptomImage uri={feverImg}></SymptomImage>
          <SymptomText>{t("symptoms.fever")}</SymptomText>
        </SymptomCage>
        <SymptomCage ref={(el) => (Cough = el)} className="Symptom">
          <SymptomImage uri={coughImg}></SymptomImage>
          <SymptomText>{t("symptoms.cough")}</SymptomText>
        </SymptomCage>
        <SymptomCage ref={(el) => (Breath = el)} className="Symptom">
          <SymptomImage uri={breathingImg}></SymptomImage>
          <SymptomText>{t("symptoms.heavyBreathing")}</SymptomText>
        </SymptomCage>
        <SymptomCage ref={(el) => (Throat = el)} className="Symptom">
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
          <ProtectImage uri={washHands}></ProtectImage>
          <ImageDecorator left></ImageDecorator>
          <ProtectDescription>
            {t("protect.protectSecond.titleDescription")}
          </ProtectDescription>
        </ProtectCage>
        <ProtectCage>
          <ProtectTitle>{t("protect.protectThird.title")}</ProtectTitle>
          <ImageDecorator right></ImageDecorator>
          <ProtectImage uri={washHands}></ProtectImage>
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
