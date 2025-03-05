import React from "react";
import * as S from "./style";
import { ChevronRight } from "@dds-web/assets";
import { DodamModal, DodamToggleButton } from "../..";
import { NAV_BAR_MODAL_DAUTH, NAV_BAR_MODAL_ITEM } from "../constant";
import { useTheme } from "@dds-web/hooks";

enum Dodam_ETheme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

interface modalProps {
  hahdleOpen: () => void;
  modalOpen: boolean;
  logout: () => void;
}

const NavModal = ({ hahdleOpen, modalOpen, logout }: modalProps) => {
  const { DARK } = Dodam_ETheme;
  const { ...dodamTheme } = useTheme();

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
          <p>{dodamTheme.themeColor === DARK ? "라이트 모드" : "다크 모드"}</p>
          <DodamToggleButton
            isAtv={dodamTheme.themeColor == DARK}
            onClick={dodamTheme.handleTheme}
          />
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
