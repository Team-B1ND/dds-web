import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { DodamTypography } from "@dds-web/styles";
import { DodamShape } from "@dds-web/styles";

type ButtonType = "block" | "inline";

interface SegmentedBtnDataProps {
  text: string;
  isAtv: boolean;
}

export interface SegmentedBtnProps {
  num: number;
  type: ButtonType;
  data: SegmentedBtnDataProps[];
  width?: number;
  onclick?: () => void;
}

export const DodamSegmentedButton = ({
  num,
  type,
  data,
  width,
  onclick,
}: SegmentedBtnProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [segmentedBtndata, setSegmentedBtnData] = useState<SegmentedBtnDataProps[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (id: number) => {
    setSelectedIdx(id);
    setSegmentedBtnData((prevData) =>
      prevData.map((item, idx) =>
        id === idx ? { ...item, isAtv: true } : { ...item, isAtv: false }
      )
    );
    if (onclick) {
      onclick();
    }
  };

  useEffect(() => {
    setSegmentedBtnData(data);
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      if (type === "inline" && buttonRefs.current[selectedIdx]) {
        const button = buttonRefs.current[selectedIdx];

        if (button) {
          setIndicatorStyle({
            width: button.offsetWidth,
            left: button.offsetLeft,
          });
        }
      }
    }, 0);
  }, [selectedIdx, type]);

  return (
    <StyledSegmentedButtonWrap width={width} type={type}>
      <StyledSegmentedButtonBox type={type}>
        <BackgroundIndicator
          index={selectedIdx}
          num={num}
          type={type}
          width={indicatorStyle.width}
          left={indicatorStyle.left}
        />
        {segmentedBtndata.map((item, idx) => (
          <StyledSegmentedButton
            key={idx}
            ref={(e: HTMLButtonElement | null) => (buttonRefs.current[idx] = e)}
            num={num}
            type={type}
            isAtv={item.isAtv}
            onClick={() => handleClick(idx)}>
            {item.text}
          </StyledSegmentedButton>
        ))}
      </StyledSegmentedButtonBox>
    </StyledSegmentedButtonWrap>
  );
};

const StyledSegmentedButtonWrap = styled.div<{
  width?: number;
  type: ButtonType;
}>`
  width: ${({ width, type }) =>
    type === "block" ? (width ? `${width}px` : "380px") : "auto"};
  height: 47px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${DodamShape.Medium};
  background-color: ${({ theme }) => theme.fillNetural};
`;

const StyledSegmentedButtonBox = styled.div<{ type: ButtonType }>`
  width: ${({ type }) => (type === "block" ? "calc(100% - 8px)" : "auto")};
  height: calc(100% - 8px);
  position: relative;

  padding: ${({ type }) => (type === "inline" ? "0 4px" : "")};
`;

const StyledSegmentedButton = styled.button<{
  num: number;
  type: ButtonType;
  isAtv: boolean;
}>`
  color: ${({ isAtv, theme }) =>
    isAtv ? theme.labelNormal : theme.labelAssisitive};
  ${DodamTypography.Headline.Medium}

  width: ${({ num, type }) => (type === "block" ? `${100 / num}%` : "auto")};
  height: 100%;

  border: none;
  ${DodamShape.Small};
  background-color: transparent;

  padding: ${({ type }) => (type === "inline" ? "6px 12px;" : "")};
  cursor: pointer;
  position: relative;
  z-index: 10;
`;

const BackgroundIndicator = styled.div<{
  index: number;
  num: number;
  type: ButtonType;
  width: number;
  left: number;
}>`
  width: ${({ num, type, width }) =>
    type === "block" ? `${100 / num}%` : `${width}px`};
  height: 100%;
  top: 0;
  left: ${({ index, num, type, left }) =>
    type === "block" ? `${(index / num) * 100}%` : `${left}px`};

  ${DodamShape.Small};
  background-color: ${({ theme }) => theme.fillAssistive};

  position: absolute;
  transition: left 0.3s ease; // 배경색이 이동할 때 부드러운 애니메이션 효과
  z-index: 1;
`;
