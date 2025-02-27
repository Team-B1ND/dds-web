import styled, { css } from "styled-components";
import { DodamShape, typographyType, DodamTypography,DodamTheme } from "@dds-web/styles";

export const DatePickerContainer = styled.div<{color:string}>`
  border-bottom: 1px solid ${({ theme,color }) => color ?  theme[color as unknown as keyof typeof theme] : theme.labelStrong};
  position: relative;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.primaryNormal};
  }
`;

export const DatePickerWrap = styled.div<{
  width?:number;
  height?:number;
  typography: typographyType;
}>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  padding: 6px 0px;
  min-width: 110px;
  cursor: pointer;
  display: flex;
  align-items:center;
  justify-content:space-between;
  box-sizing: border-box;
  position: relative;
    ${({ typography }) => DodamTypography[typography[0]][typography[1]]}
`;

export const DatePickerDate = styled.span<{color:string}>`
  color: ${({ theme,color }) => color ? theme[color as unknown as keyof typeof theme] : theme.labelStrong};
`;


export const DatePickerCalendar = styled.div<{ x: number; y: number }>`
  max-width: 320px;
  max-height: 350px;
  padding: 24px;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  top: ${({ y }) => y - 100}px;
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
  color: ${({ theme }) => theme.labelStrong};
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
  justify-content: space-around;
`;

export const DatePickerCalendarHeaderArrowIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
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
  align-items: center;
`;

export const DatePickerCalendarHeaderDayItem=styled.span`
  width: 36px;
  margin: 0px 2px;
  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.labelAlternative};
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
  width: 32px;
  height: 32px;
  margin: 0px 2px;
  color: ${({ theme }) => theme.labelAlternative};
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
          opacity: 0.5;
          cursor: default;
        `
      : css`
          cursor: pointer;

          ${isSelected
            ? css`
                color: white;
                background-color: ${({ theme }) => theme.primaryNormal};
              `
            : css`
                &:hover {
                  background-color: rgba(0, 0, 0, 0.04);
                }
              `}
        `};
`;