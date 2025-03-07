import React from "react";
import * as S from "./style";
import { ChevronRight } from "@dds-web/assets";
import { DodamModal, DodamToggleButton } from "../..";
import { NAV_BAR_MODAL_DAUTH, NAV_BAR_MODAL_ITEM } from "../constant";
import { Dodam_ETheme } from "@dds-web/hooks";

interface modalProps {
  hahdleOpen: () => void;
  modalOpen: boolean;
  currentTheme: Dodam_ETheme;
  handleTheme: () => void;
  logout: () => void;
}

const NavModal = ({
  hahdleOpen,
  modalOpen,
  currentTheme,
  handleTheme,
  logout,
}: modalProps) => {
  const { DARK } = Dodam_ETheme;

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
          <p>{currentTheme === DARK ? "라이트 모드" : "다크 모드"}</p>
          <DodamToggleButton
            isAtv={currentTheme == DARK}
            onClick={handleTheme}
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
