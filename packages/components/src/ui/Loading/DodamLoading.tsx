import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FlexLayout } from "../../layout";
import { CSSProperties } from "styled-components";

export interface Props {
  size?: CSSProperties["width" | "height"];
}

const LOADING_COLORS_ITEMS = ["#b7b7b7", "#dfdfdf", "#ffffff"];

export const DodamLoading = ({ size = "8px" }: Props) => {
  const [currentColorIdx, setCurrentColorIdx] = useState(
    LOADING_COLORS_ITEMS.length - 1
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIdx((prev) =>
        prev === 0 ? LOADING_COLORS_ITEMS.length - 1 : prev - 1
      );
    }, 160);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <LoadingEllipseWrap>
      {LOADING_COLORS_ITEMS.map((_, idx) => (
        <LoadingEllipseItem
          key={idx}
          $size={size}
          $backgroundColor={
            LOADING_COLORS_ITEMS[
              (currentColorIdx + idx) % LOADING_COLORS_ITEMS.length
            ]
          }
        />
      ))}
    </LoadingEllipseWrap>
  );
};

const LoadingEllipseWrap = styled.div`
  ${FlexLayout({ $columnGap: "8px" })}
`;

const LoadingEllipseItem = styled.div<{
  $size: CSSProperties["width" | "height"];
  $backgroundColor: CSSProperties["backgroundColor"];
}>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};

  transition: all 0.16s ease-in-out;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 100%;
`;
