import { useCallback, useEffect, useRef, useState } from "react";

type DatePickerMode = "entire" | "future";

interface DatePickerParams {
  value: string;
  splitCharacter: string;
  onChange: (e: Date) => void;
  type: DatePickerMode;
}

export const useDatePicker = ({
  value,
  splitCharacter,
  onChange,
  type,
}: DatePickerParams) => {
  //날짜 초깃값
  const date = value.split(splitCharacter);

  const $year = Number(date[0]);
  const $month = Number(date[1]);
  const $day = Number(date[2]);

  //캘린터 핸들 상태
  const [fold, setFold] = useState(true);

  //캘린더 날짜
  const [calendarDate, setCalendarDate] = useState({
    year: $year,
    month: $month,
  });

  //value전날 확인
  const beforePeriod =
    $day + new Date(calendarDate.year, calendarDate.month - 1, 0).getDay();

  //사용자가 선택한 날짜
  const [selectDate, setSelectDate] = useState({
    year: $year,
    month: $month,
    day: $day,
  });

  //캘린더에 보여지는 날짜 배열
  const [dayList, setDayList] = useState<number[]>([]);

  //해당 달의 첫번재 날
  const [firstDate, setFirstDate] = useState<number>(dayList.indexOf(1, 7));

  //해당 달의 마제막 날
  const [lastDate, setLastDate] = useState<number>(dayList.indexOf(1));

  //데이트 피커 ref
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [calendarCoord, setCalendarCoold] = useState({ x: 0, y: 0 });

  //데이트피커 아웃사이드 클릭 체크
  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e));
    };
  });

  //데이트피커 아웃사이트 클릭 핸들 함수
  const handleClickOutside = (e: Event) => {
    if (containerRef && !containerRef.current?.contains(e.target as Node)) {
      setFold(true);
    }
  };

  //캘린터 달 변경시 날짜배열 만드는 함수
  const createDayList = (month: number): number[] => {
    let beforeLastDay = new Date(calendarDate.year, month - 1, 0).getDay();
    let afterLastDate = new Date(calendarDate.year, month, 0).getDate();
    let afterLastDay = new Date(calendarDate.year, month, 0).getDay();

    let beforeDayList: number[] = [];
    let afterDayList: number[] = [];

    if (beforeLastDay !== 6) {
      for (let i = 0; i < beforeLastDay + 1; i++) {
        beforeDayList.unshift(0);
      }
    }

    for (let i = 1; i < 7 - afterLastDay; i++) {
      afterDayList.push(0);
    }

    let today = [...Array(afterLastDate + 1).keys()].slice(1);

    return beforeDayList.concat(today, afterDayList);
  };

  //캘린더 달 변경 함수
  const onChangeCalendarMonth = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev") {
        if (calendarDate.month === 1) {
          setCalendarDate((prev) => ({
            ...prev,
            year: prev.year - 1,
            month: 12,
          }));
          return;
        }
        setCalendarDate((prev) => ({ ...prev, month: prev.month - 1 }));
      } else if (direction === "next") {
        if (calendarDate.month === 12) {
          setCalendarDate((prev) => ({
            ...prev,
            year: prev.year + 1,
            month: 1,
          }));
          return;
        }
        setCalendarDate((prev) => ({ ...prev, month: prev.month + 1 }));
      }
    },
    [setCalendarDate, calendarDate.month]
  );

  //캘린더 날짜 선택 함수
  const onChangeSelectDate = useCallback(
    (day: number) => {
      setSelectDate((prev) => ({
        ...prev,
        year: calendarDate.year,
        month: calendarDate.month,
        day,
      }));
      onChange(new Date(calendarDate.year, calendarDate.month - 1, day));
    },
    [setSelectDate, calendarDate.year, calendarDate.month]
  );

  //value값이 변하면 바로 캘린더에 반영하기 위해 value 체크
  useEffect(() => {
    setSelectDate((prev) => ({
      ...prev,
      year: $year,
      month: $month,
      day: $day,
    }));
  }, [value]);

  //캘린더 날짜 배열을 다시 만들기 위해 캘린더 달 체크
  useEffect(() => {
    setDayList(createDayList(calendarDate.month));
  }, [calendarDate.month]);

  //캘린더 날짜 배열 다시 만들어지면 해당 달 첫째날 마지막날 계산을 위해 날짜 배열 체크
  useEffect(() => {
    setFirstDate(dayList.indexOf(1, 7));
    setLastDate(dayList.indexOf(1));
  }, [dayList]);

  //모달 위치 지정과 선택한 캘린더 달이 선택한 달 기준으로 돌아가기 위해 캘린더 상태 체크
  useEffect(() => {
    if (!fold) {
      if (containerRef && containerRef.current) {
        setCalendarCoold((prev) => ({
          ...prev,
          x: containerRef.current!.getBoundingClientRect().left,
          y: containerRef.current!.getBoundingClientRect().top,
        }));
      }

      setCalendarDate((prev) => ({
        ...prev,
        year: selectDate.year,
        month: selectDate.month,
      }));

      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [fold]);

  return {
    date,
    fold,
    setFold,
    containerRef,
    calendarCoord,
    firstDate,
    lastDate,
    selectDate,
    onChangeSelectDate,
    calendarDate,
    dayList,
    onChangeCalendarMonth,
    $month,
    beforePeriod,
  };
};
