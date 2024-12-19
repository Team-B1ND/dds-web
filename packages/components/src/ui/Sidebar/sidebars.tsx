import React from "react";
import { DodamLogo } from "@dds-web/assets"; 
import * as S from "./style";
import { DodamLightTheme } from "@dds-web/styles";
import { SIDEBAR_LINKS } from "./constant";
import { DodamBody1 } from "../Typography";

export interface DodamSidebarProps {
    onClick: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
  }

export const DodamSidebar = ({
  onClick,
  onChange,
  children,
}:DodamSidebarProps) => {
  return (
    <S.DodamSidebarBox>
      <S.DodamSidebar>
        <S.DodamLogo>
          <DodamLogo color={`${DodamLightTheme.primaryNormal}`} $svgStyle={{ margin: "0 auto",textAlign:"center" }} />
        </S.DodamLogo>
        <S.DodamContent>
            <S.DodamButtonBox>
        {SIDEBAR_LINKS.map((item, idx) => {
            const Icon = item.img;
            return (
              <S.DodamButton key={idx} as="a" href={item.link}>
                {Icon && <Icon size={24} color="#333" />} 
                <DodamBody1 text={item.name} />
              </S.DodamButton>
            );
          })}
          </S.DodamButtonBox>
        </S.DodamContent>
      </S.DodamSidebar>
    </S.DodamSidebarBox>
  );
};
