import { DodamFlexLayout } from "@dds-web/styles";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSSProperties } from "styled-components";

export interface Props {
  length?: number;
  size?: CSSProperties["width" | "height"];
  loadingColors?: CSSProperties["backgroundColor"][];
}

export const DodamLoading = ({
  length = 3,
  size = "8px",
  loadingColors = ["#b7b7b7", "#dfdfdf", "#ffffff"],
}: Props) => {
  const [currentColorIdx, setCurrentColorIdx] = useState(
    loadingColors.length - 1
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIdx((prev) =>
        prev === 0 ? loadingColors.length - 1 : prev - 1
      );
    }, 160);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <LoadingEllipseWrap>
      {Array.from({ length }).map((_, idx) => (
        <LoadingEllipseItem
          key={idx}
          $size={size}
          $backgroundColor={
            loadingColors[(currentColorIdx + idx) % loadingColors.length]
          }
        />
      ))}
    </LoadingEllipseWrap>
  );
};

const LoadingEllipseWrap = styled.div`
  ${DodamFlexLayout({ $columnGap: "8px" })}
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
