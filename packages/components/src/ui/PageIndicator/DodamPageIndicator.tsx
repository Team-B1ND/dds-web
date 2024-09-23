import React, { useState } from "react";
import * as S from "./style";
import { PageIndicatorProps } from "./type";

export const DodamPageIndicator = ({
  num,
  buttonSize = "Large",
}: PageIndicatorProps) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const handleButtonClick = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <S.PageIndicatorWrap buttonSize={buttonSize}>
      {Array.from({ length: num }).map((_, idx) => (
        <S.IndicatorBtn
          key={idx}
          idx={idx}
          activeIdx={activeIdx}
          buttonSize={buttonSize}
          onClick={() => handleButtonClick(idx)}></S.IndicatorBtn>
      ))}
    </S.PageIndicatorWrap>
  );
};
