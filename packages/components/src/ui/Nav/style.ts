import styled from "styled-components";
import { DodamShape, DodamTypography } from "@dds-web/styles";

export const DodamNavBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 58px 22px 59px 22px;
  width: 250px;
  min-width: 250px;
  height: 100%;
  z-index: 3;

  @media (max-width: 1068px), (max-height: 794px) {
    position: fixed;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0 10px 0 10px;
  }
`;

export const DodamNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 12px;
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.backgroundNormal};

  @media (max-width: 1068px), (max-height: 794px) {
    flex-direction: row;
    /* min-width: 421px; */
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 5px 0 5px;
  }
`;

export const DodamLogo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 8px;
  padding: 8px 0 8px 5px;
  cursor: pointer;
  @media (max-width: 1068px), (max-height: 794px) {
    flex-direction: row;
    width: 30%;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    display: none;
  }
`;

export const DodamContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
`;

export const DodamButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 55%;

  @media (max-width: 1068px), (max-height: 794px) {
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
  }
`;

export const DodamButton = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  width: 100%;
  height: 48px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.primaryNormal : "transparent"};
  cursor: pointer;

  @media (max-width: 1068px), (max-height: 794px) {
    width: 50px;
    justify-content: center;
    padding: 0;
    span {
      display: none;
    }
  }

  @media (max-width: 797px) {
    &[data-name="WIKI"] {
      display: none;
    }
  }

  @media (max-width: 568px) {
    width: 44px;
  }

  span {
    ${DodamTypography.Body1.Medium};
    color: ${({ theme, $active }) =>
      $active ? theme.staticWhite : theme.labelNormal};
  }

  ${DodamShape.Medium};

  &:active {
    box-shadow:
      0px 2px 3px 2px rgba(0, 0, 0, 0.12),
      0px 0px 1px 0px rgba(0, 0, 0, 0.08),
      0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  }
`;


export const AddButton = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  padding-left: 10px;
  gap: 8px;
  cursor: pointer;
  span {
    ${DodamTypography.Body1.Medium}
    color:  ${({ theme }) => theme.labelNormal};
  }
  @media (max-width: 1068px), (max-height: 794px) {
    width: 100px;
    span {
      display: none;
    }
  }
`;
