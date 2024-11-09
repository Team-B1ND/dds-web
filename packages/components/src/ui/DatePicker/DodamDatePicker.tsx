import React, { CSSProperties } from "react";
import * as S from "./DodamDatePicker.style";
import { useDatePicker } from "@dds-web/hooks";
import { ArrowLeft, Calender } from "@dds-web/assets";
import {DAY} from "./constant";
import { css } from "styled-components";
import {DodamHeading2} from "../Typography"
export interface DatePickerProps {
  itemKey: string;
  width: string | number;
  height: string | number;
  customStyle?: CSSProperties;
  onChange: (e: Date) => void;
  value: string;
  splitCharacter: string;
  children?: JSX.Element | string;
  title : string;
}

export const DodamDatePicker = ({
  itemKey,
  width,
  height,
  customStyle,
  onChange,
  value,
  splitCharacter,
  children,
  title,
}: DatePickerProps) => {
  const { ...dataPicker } = useDatePicker({ value, splitCharacter, onChange });

  return (
    <S.DatePickerContainer
      style={{ width, height, ...customStyle }}
      ref={dataPicker.containerRef}
    >
      <S.DatePickerWrap id={itemKey} onClick={() => dataPicker.setFold((prev) => !prev)}>
        <S.DatePickerDate>
          {dataPicker.selectDate.year}/{dataPicker.selectDate.month}/{dataPicker.selectDate.day}
        </S.DatePickerDate>
        {children}
        <S.DatePickerButton>
        
          <S.DatePickerButtonIcon>
            <Calender color="black"/>
          </S.DatePickerButtonIcon>
        </S.DatePickerButton>
      </S.DatePickerWrap>
      {!dataPicker.fold && (
        <S.DatePickerCalendar
          y={dataPicker.calendarCoord.y + Number(height)}
          x={dataPicker.calendarCoord.x + Number(width) / 2}
        >
          <S.DatePickerCalendarHeader>
            <S.DatePickerHeaderTitle>
              <DodamHeading2
                fontScale="Bold"
                text={title}
              />
            </S.DatePickerHeaderTitle>
            <S.DatePickerHeaderContect>
            {dataPicker.calendarDate.year}년 {dataPicker.calendarDate.month}월

            <S.DatePickerCalendarHeaderArrow>
              <S.DatePickerCalendarHeaderArrowIcon 
                onClick={() => dataPicker.onChangeCalendarMonth("prev")}>
              <ArrowLeft color="black"/>
              </S.DatePickerCalendarHeaderArrowIcon>
              <S.DatePickerCalendarHeaderArrowIcon
                onClick={() => dataPicker.onChangeCalendarMonth("next")}
              >
              <ArrowLeft
                color="black"
                customStyle={css`
                transform: rotate(180deg);
                `}
                />
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
            {dataPicker.dayList.map((day, idx) => {
              const isDisabled =
                idx < dataPicker.lastDate || (dataPicker.firstDate > 0 && idx > dataPicker.firstDate - 1);
              const isSelected =
                dataPicker.calendarDate.year === dataPicker.selectDate.year &&
                dataPicker.calendarDate.month === dataPicker.selectDate.month &&
                day === dataPicker.selectDate.day;

              return (
                <S.DatePickerCalendarItem
                  isDisabled={isDisabled}
                  isSelected={isSelected}
                  disabled={isDisabled}
                  onClick={() => dataPicker.onChangeSelectDate(day)}
                  key={`${itemKey} datePicker calendarItem ${idx}`}
                >
                  {day}
                </S.DatePickerCalendarItem>
              );
            })}
          </S.DatePickerCalendarItemWrap>
        </S.DatePickerCalendar>
      )}
    </S.DatePickerContainer>
  );
};
