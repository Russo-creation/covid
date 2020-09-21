import React, { useState, useEffect, useRef } from "react";
import {
  Root,
  NavigatorContainer,
  ButtonContainer,
  BurgerButton,
  LanguageContainer,
  ButtonMenu,
  ButtonMenuColor,
  LangText,
  Select,
  LanguageCenter,
  SmallButtonContainer,
} from "./Navigator.css";

import { MdMenu } from "react-icons/md";

import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

const SelectTypeForMobile = () => {
  const { i18n } = useTranslation(["translation"]);

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <Select value={i18n.language} onChange={handleChangeLanguage}>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </Select>
    </div>
  );
};

const ButtonsMenu = ({ pageIndex, scrollTrackerList, hideMenu }) => {
  const { t } = useTranslation(["translation"]);

  const smoothScroolValues = {
    offset: 1,
    duration: 600,
  };

  return (
    <>
      <Link
        onClick={() => hideMenu()}
        activeClass="active"
        to={scrollTrackerList[0]}
        spy={true}
        smooth={true}
        offset={smoothScroolValues.offset}
        duration={smoothScroolValues.duration}
      >
        <ButtonMenu selected={pageIndex === 0 ? true : false}>
          <ButtonMenuColor
            selected={pageIndex === 0 ? true : false}
          ></ButtonMenuColor>
          {t("navigator.home")}
        </ButtonMenu>
      </Link>

      <Link
        onClick={() => hideMenu()}
        activeClass="active"
        to={scrollTrackerList[1]}
        spy={true}
        smooth={true}
        offset={smoothScroolValues.offset}
        duration={smoothScroolValues.duration}
      >
        <ButtonMenu selected={pageIndex === 1 ? true : false}>
          <ButtonMenuColor
            selected={pageIndex === 1 ? true : false}
          ></ButtonMenuColor>
          {t("navigator.symptomps")}
        </ButtonMenu>
      </Link>

      <Link
        onClick={() => hideMenu()}
        activeClass="active"
        to={scrollTrackerList[2]}
        spy={true}
        smooth={true}
        offset={smoothScroolValues.offset}
        duration={smoothScroolValues.duration}
      >
        <ButtonMenu selected={pageIndex === 2 ? true : false}>
          <ButtonMenuColor
            selected={pageIndex === 2 ? true : false}
          ></ButtonMenuColor>
          {t("navigator.statistics")}
        </ButtonMenu>
      </Link>

      <Link
        onClick={() => hideMenu()}
        activeClass="active"
        to={scrollTrackerList[3]}
        spy={true}
        smooth={true}
        offset={smoothScroolValues.offset}
        duration={smoothScroolValues.duration}
      >
        <ButtonMenu selected={pageIndex === 3 ? true : false}>
          <ButtonMenuColor
            selected={pageIndex === 3 ? true : false}
          ></ButtonMenuColor>
          {t("navigator.liveCounter")}
        </ButtonMenu>
      </Link>
    </>
  );
};

const Navigator = () => {
  const [visibleScrolledMenu, setVisibleScrolledMenu] = useState(false);

  const scrollTrackerList = useSelector(
    (state) => state.scrollTracker.scrollTrackerListFolds
  );
  const pageIndex = useSelector((state) => state.scrollTracker.scrollTrackSet);

  const handleShowMenu = () => {
    setVisibleScrolledMenu((prev) => !prev);
  };

  const hideMenu = () => {
    setVisibleScrolledMenu(false);
  };

  const hideMenuOnResize = () => {
    if (window.innerWidth >= 1024) hideMenu();
  };

  useEffect(() => {
    window.addEventListener("resize", hideMenuOnResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        hideMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <Root ref={wrapperRef} backgroundActive={pageIndex > 0 ? true : false}>
      <NavigatorContainer>
        <BurgerButton onClick={handleShowMenu}>
          <MdMenu />
        </BurgerButton>
        {visibleScrolledMenu ? (
          <SmallButtonContainer>
            <ButtonsMenu
              pageIndex={pageIndex}
              scrollTrackerList={scrollTrackerList}
              hideMenu={hideMenu}
            />
          </SmallButtonContainer>
        ) : null}
        <ButtonContainer>
          <ButtonsMenu
            pageIndex={pageIndex}
            scrollTrackerList={scrollTrackerList}
            hideMenu={hideMenu}
          />
        </ButtonContainer>
        <LanguageContainer>
          <LanguageCenter>
            <LangText>LANGUAGE</LangText>
            <SelectTypeForMobile />
          </LanguageCenter>
        </LanguageContainer>
      </NavigatorContainer>
    </Root>
  );
};

export default React.memo(Navigator);
