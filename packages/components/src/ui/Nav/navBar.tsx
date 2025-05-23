import React from "react";
import { DodamLogo, Menu } from "@dds-web/assets";
import { useNavBar } from "@dds-web/hooks";
import SideBarModal from "./navModal";
import * as S from "./style";
import { NAV_LINKS, Eigenvalues } from "./constant";

export enum ETheme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface DodamNavProps {
  location: Eigenvalues;
  currentTheme: ETheme;
  handleTheme: () => void;
  logout: () => void;
}

export const DodamNavBar = ({
  location,
  currentTheme,
  handleTheme,
  logout,
}: DodamNavProps) => {
  const { ...nav } = useNavBar();

  return (
    <>
      <S.DodamNavBox>
        <S.DodamNav>
          <S.DodamLogo onClick={() => window.open("https://b1nd.com")}>
            <DodamLogo color="primaryNormal" />
          </S.DodamLogo>
          <S.DodamContent>
            <S.DodamButtonBox>
            {NAV_LINKS.map((item, idx) => {
              const Icon = item.img;
              const isActive = location === item.values;
              return (
                <S.DodamButton
                  $active={isActive}
                  key={idx}
                  as="a"
                  onClick={() => nav.handleMenuItemClick(item.link)}
                  data-name={item.name} 
                >
                  {Icon && (
                    <Icon
                      size={24}
                      color={isActive ? "staticWhite" : "labelNormal"}
                    />
                  )}
                  <span>{item.name}</span>
                </S.DodamButton>
              );
            })}
            </S.DodamButtonBox>
          </S.DodamContent>
          <S.AddButton onClick={nav.hahdleOpenNavBar}>
            <Menu color="labelStrong" />
            <span>더보기</span>
          </S.AddButton>
        </S.DodamNav>
      </S.DodamNavBox>
      <SideBarModal
        handleTheme={handleTheme}
        currentTheme={currentTheme}
        hahdleOpen={nav.hahdleOpenNavBar}
        modalOpen={nav.modalOpen}
        logout={logout}
      />
    </>
  );
};
