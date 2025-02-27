import React from "react";
import * as S from "./DodamDatePicker.style";
import { useDatePicker } from "@dds-web/hooks";
import { ChevronRight, ChevronLeft, Calender } from "@dds-web/assets";
import {DAY} from "./constant";
import {DodamHeading2} from "../Typography"
import { DodamLightTheme,typographyType } from "@dds-web/styles";
import { CSSObject } from "styled-components";

type DatePickerMode = 'entire' | 'future';


export interface DatePickerProps {
  itemKey: string;
  width?:  number;
  height?: number;
  customStyle?: CSSObject;
  onChange: (e: Date) => void;
  value: string;
  children?: JSX.Element | string;
  title : string;
  typography?: typographyType;
  type?:DatePickerMode;
  iconSize?:number;
}

export const DodamDatePicker = ({
  itemKey,
  width,
  height,
  customStyle,
  onChange,
  value,
  children,
  title,
  typography = ['Body1', 'Medium'],
  type = 'future',
  iconSize = 24,
}: DatePickerProps) => {
  const splitCharacter = "-"
  const { ...datePicker } = useDatePicker({ value, splitCharacter, onChange, type });

  return (
    <S.DatePickerContainer
      style={{...customStyle }}
      ref={datePicker.containerRef}
    >
      <S.DatePickerWrap 
      id={itemKey} 
      width={width}
      height={height}
      typography={typography!}
      onClick={() => datePicker.setFold((prev) => !prev)}>
        <S.DatePickerDate>
          {datePicker.selectDate.year}/{datePicker.selectDate.month}/{datePicker.selectDate.day}
        </S.DatePickerDate>
        {children}
            <Calender size={iconSize} color="labelStrong" />
      </S.DatePickerWrap>
      {!datePicker.fold && (
        <S.DatePickerCalendar
          y={datePicker.calendarCoord.y + Number(height)}
          x={datePicker.calendarCoord.x + Number(width) / 2}
        >
          <S.DatePickerCalendarHeader>
            <S.DatePickerHeaderTitle>
              <DodamHeading2
                fontScale="Bold"
                text={title}
              />
            </S.DatePickerHeaderTitle>
            <S.DatePickerHeaderContect>
            {datePicker.calendarDate.year}년 {datePicker.calendarDate.month}월

            <S.DatePickerCalendarHeaderArrow>
              <S.DatePickerCalendarHeaderArrowIcon 
                onClick={() => datePicker.onChangeCalendarMonth("prev")}>
                <ChevronLeft color={`${DodamLightTheme.primaryNormal}`}/>
              </S.DatePickerCalendarHeaderArrowIcon>
              <S.DatePickerCalendarHeaderArrowIcon
                onClick={() => datePicker.onChangeCalendarMonth("next")}
              >
                <ChevronRight color={`${DodamLightTheme.primaryNormal}`}/>
              </S.DatePickerCalendarHeaderArrowIcon>
            </S.DatePickerCalendarHeaderArrow>
            </S.DatePickerHeaderContect>
          </S.DatePickerCalendarHeader>
          <S.DatePickerCalendarHeaderDayWrap>
            {DAY.map((day, idx) => (
              <S.DatePickerCalendarHeaderDayItem
                key={`${itemKey} datePicker dayItem${idx}`}
              >
                {day}
              </S.DatePickerCalendarHeaderDayItem>
            ))}
          </S.DatePickerCalendarHeaderDayWrap>
          <S.DatePickerCalendarItemWrap>
            {datePicker.dayList.map((day, idx) => {
              let isDisabled = false;
              if(type=="future"){
                 isDisabled =
                  idx < datePicker.lastDate || 
                  (datePicker.firstDate > 0 && idx > datePicker.firstDate - 1 ) || 
                  idx < datePicker.beforePeriod ||
                  (datePicker.calendarDate.year < datePicker.selectDate.year) ||  // 이전 연도는 모두 비활성화
                  (datePicker.calendarDate.year === datePicker.selectDate.year && datePicker.calendarDate.month < datePicker.selectDate.month) || // 이전 달도 모두 비활성화
                  (idx < datePicker.beforePeriod && datePicker.calendarDate.month === datePicker.$month);  
              }              
      
                const isSelected =
                datePicker.calendarDate.year === datePicker.selectDate.year &&
                datePicker.calendarDate.month === datePicker.selectDate.month &&
                day === datePicker.selectDate.day;
              return (
                <S.DatePickerCalendarItem
                  isDisabled={isDisabled}
                  isSelected={isSelected}
                  disabled={isDisabled}
                  onClick={() => {
                    datePicker.onChangeSelectDate(day)
                    datePicker.setFold(true)
                  }}
                  key={`${itemKey} datePicker calendarItem ${idx}`}
                >
                  {day!==0 ? day : ""}
                </S.DatePickerCalendarItem>
              );
            })}
          </S.DatePickerCalendarItemWrap>
        </S.DatePickerCalendar>
      )}
    </S.DatePickerContainer>
  );
};
