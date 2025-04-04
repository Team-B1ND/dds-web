import React, { useState } from "react";
import * as S from "./style";
import { PageIndicatorProps } from "./type";

export const PageIndicator = ({
  caseBy,
  buttonSize = "Large",
  defaultComponent = null,
  customStyle
}: PageIndicatorProps) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleButtonClick = (idx: number) => {
    setActiveIdx(idx);
  };

  if (!caseBy || Object.keys(caseBy).length === 0) {
    return defaultComponent;
  }

  const keys = Object.keys(caseBy);

  return (
    <>
      <S.PageIndicatorWrap >
      <div>{caseBy[keys[activeIdx]]}</div>
      <S.IndicatorBox  
      buttonSize={buttonSize}
      customStyle={customStyle}
       >
        {keys.map((_, idx) => (
          <S.IndicatorBtn
            key={idx}
            idx={idx}
            activeIdx={activeIdx}
            buttonSize={buttonSize}
            onClick={() => handleButtonClick(idx)}></S.IndicatorBtn>
        ))}
        </S.IndicatorBox>
      </S.PageIndicatorWrap>
    </>
  );
};
