import React, { useState } from "react";
import * as S from "./style";
import { PageIndicatorProps } from "./type";

export const DodamPageIndicator = ({
  num,
  size = "Large",
  onClick,
}: PageIndicatorProps) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const handleButtonClick = (idx: number) => {
    setActiveIdx(idx);
    onClick(idx);
  };

  return (
    <S.PageIndicatorWrap size={size}>
      {Array.from({ length: num }).map((_, idx) => (
        <S.IndicatorBtn
          key={idx}
          idx={idx}
          size={size}
          activeIdx={activeIdx}
          onClick={() => handleButtonClick(idx)}></S.IndicatorBtn>
      ))}
    </S.PageIndicatorWrap>
  );
};
