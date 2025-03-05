import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronRight } from "@dds-web/assets";
import { DodamModal, DodamToggleButton } from "../..";
import {
  DODAM_THEME_KEY,
  NAV_BAR_MODAL_DAUTH,
  NAV_BAR_MODAL_ITEM,
} from "../constant";
import * as S from "./style";
import { Dodam_ETheme } from "../enum";

interface modalProps {
  hahdleOpen: () => void;
  modalOpen: boolean;
  logout: () => void;
}

const NavModal = ({ hahdleOpen, modalOpen, logout }: modalProps) => {
  const { DARK } = Dodam_ETheme;
  const [currentTheme, setCurrentTheme] = useState<Dodam_ETheme>();

  const themeColor = useMemo((): Dodam_ETheme => {
    return currentTheme === Dodam_ETheme.DARK
      ? Dodam_ETheme.DARK
      : Dodam_ETheme.LIGHT;
  }, [currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme =
      currentTheme === Dodam_ETheme.DARK
        ? Dodam_ETheme.LIGHT
        : Dodam_ETheme.DARK;
    window.localStorage.setItem(DODAM_THEME_KEY, switchTheme);
    setCurrentTheme(switchTheme);
  }, [currentTheme, setCurrentTheme]);

  const getTheme = (): Dodam_ETheme => {
    const themeMode = window.localStorage.getItem(DODAM_THEME_KEY);

    if (typeof window !== "undefined" && themeMode === null) {
      const isDarkTheme: boolean = window.matchMedia(
        `(prefers-color-scheme: light)`
      ).matches;

      if (isDarkTheme) {
        return Dodam_ETheme.DARK;
      }
      return Dodam_ETheme.LIGHT;
    }

    const theme: Dodam_ETheme = themeMode as Dodam_ETheme;

    if (theme === Dodam_ETheme.DARK) {
      return Dodam_ETheme.DARK;
    }

    return Dodam_ETheme.LIGHT;
  };

  useEffect(() => {
    setCurrentTheme(getTheme());
  }, []);

  return (
    <DodamModal
      isOpen={modalOpen}
      close={hahdleOpen}
      customStyle={{ display: "block" }}
      background={false}>
      <S.Popover onClick={(e) => e.stopPropagation()}>
        <S.ModalBox onClick={() => window.open(NAV_BAR_MODAL_DAUTH.link)}>
          <p>Dauth</p>
          <ChevronRight size={16} color="labelAssistive" />
        </S.ModalBox>
        <S.ModalBox style={{ borderBottom: `1px` }}>
          <p>{themeColor === DARK ? "라이트 모드" : "다크 모드"}</p>
          <DodamToggleButton isAtv={themeColor == DARK} onClick={handleTheme} />
        </S.ModalBox>
        {NAV_BAR_MODAL_ITEM.map((item) => (
          <S.ModalBox
            key={item.name}
            onClick={() => {
              if (item.link === "logout") {
                logout();
              } else {
                window.open(item.link);
              }
            }}>
            <span>{item.name}</span>
            <ChevronRight size={16} color="labelAssistive" />
          </S.ModalBox>
        ))}
      </S.Popover>
    </DodamModal>
  );
};
export default NavModal;
