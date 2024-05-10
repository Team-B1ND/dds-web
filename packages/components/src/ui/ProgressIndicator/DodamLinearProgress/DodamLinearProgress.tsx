import {
  DodamDarkTheme,
  DodamGlobalStyles,
  DodamLightTheme,
  DodamThemeProvider,
} from "@dds-web/styles";
import React from "react";
import styled, { CSSProperties } from "styled-components";
import "../../../fonts/font.css";
import { useDetectThemeMode } from "@dds-web/hooks";

export interface LinearProps {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  gauge: number;

  borderRadius?: CSSProperties["borderRadius"];
  color?: {
    trail?: CSSProperties["backgroundColor"];
    path?: CSSProperties["backgroundColor"];
  };
}

export const DodamLinearProgress = ({
  width,
  height,
  gauge,
  borderRadius = "7px",
  color,
}: LinearProps) => {
  const { isDarkMode } = useDetectThemeMode();

  return (
    <DodamThemeProvider theme={isDarkMode ? DodamDarkTheme : DodamLightTheme}>
      <DodamGlobalStyles />
      <LinearWrap
        $width={width}
        $height={height}
        $borderRadius={borderRadius}
        $trailColor={color?.trail!}
      >
        <LinearGuage
          $gauge={gauge}
          $borderRadius={borderRadius}
          $pathColor={color?.path!}
        />
      </LinearWrap>
    </DodamThemeProvider>
  );
};

const LinearWrap = styled.div<{
  $width: CSSProperties["width"];
  $height: CSSProperties["height"];
  $borderRadius: CSSProperties["borderRadius"];
  $trailColor: CSSProperties["backgroundColor"];
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ $trailColor, theme }) =>
    $trailColor || theme.secondary};

  position: relative;
  overflow: hidden;
`;

const LinearGuage = styled.div<{
  $gauge: number;
  $borderRadius: CSSProperties["borderRadius"];
  $pathColor: CSSProperties["backgroundColor"];
}>`
  width: ${({ $gauge }) => $gauge}%;
  height: 100%;

  background-color: ${({ $pathColor, theme }) => $pathColor || theme.primary};
  transition: width 0.7s ease;

  border-top-right-radius: ${({ $borderRadius }) => $borderRadius};
  border-bottom-right-radius: ${({ $borderRadius }) => $borderRadius};

  position: absolute;
  top: 0;
  left: 0;
`;
