import styled, { css } from "styled-components";
import {DodamLightTheme} from "@dds-web/styles"
import { HTMLAttributes,ButtonHTMLAttributes } from "react";
import { DodamShape } from "@dds-web/styles";

export const DatePickerContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.contrast};
  position: relative;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.primaryNormal};
  }
`;

export const DatePickerWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 0px;
  min-width: 100px;
  color: ${({ theme }) => theme.contrast};
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  position: relative;
`;

export const DatePickerDate = styled.span`
  color: ${({ theme }) => theme.contrast};
`;

export const DatePickerButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: ${({ theme }) => theme.contrast};
  border: 0px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  right: 0px;
  top: 50%;
  transform: translate(-0%, -50%);
  border-radius: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const DatePickerButtonIcon = styled.div`
  width: 18px;
  height: 18px;
  object-fit: scale-down;
`;

export const DatePickerCalendar = styled.div<{ x: number; y: number }>`
  max-width: 310px;
  max-height: 310px;
  padding: 24px;
  border-radius: 28px;
  background-color: white;
  top: ${({ y }) => y + 1}px;
  left: ${({ x }) => x}px;
  position: fixed;
  z-index: 10;
  transform: translate(-50%, -0%);
  border: 0px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
`;

export const DatePickerCalendarHeader = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 4px;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  color: black;
`;
export const DatePickerHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
`
export const DatePickerHeaderContect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`
export const DatePickerCalendarHeaderArrow = styled.button`
  width: 40%;
  background: none;
  border: 0px;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


`;

export const DatePickerCalendarHeaderArrowIcon = styled.div`
  width: 20px;
  height: 20px;
  object-fit: scale-down;
  fill: #0000008a;
  .DatePickerArrowIconColor {
    fill: #0000008a;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const DatePickerCalendarHeaderDayWrap=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;

export const DatePickerCalendarHeaderDayItem=styled.span`
  width: 36px;
  margin: 0px 2px;
  color: #00000061;
  font-size: 12px;
  text-align: center;
`;

export const DatePickerCalendarItemWrap =styled.div`
  width: 100%;
  height: 100%;
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  row-gap: 0px;
`;
export const DatePickerCalendarItem = styled.button<{
  isDisabled: boolean;
  isSelected: boolean;
}>`
  width: 36px;
  height: 36px;
  margin: 0px 2px;
  color: black;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${DodamShape.Small};
  background: none;
  border: 0px;

  ${({ isDisabled, isSelected }) =>
    isDisabled
      ? css`
          color: #969696;
          cursor: default;
        `
      : css`
          cursor: pointer;

          ${isSelected
            ? css`
                color: white;
                background-color: ${DodamLightTheme.primaryNormal};
              `
            : css`
                &:hover {
                  background-color: rgba(0, 0, 0, 0.04);
                }
              `}
        `};
`;