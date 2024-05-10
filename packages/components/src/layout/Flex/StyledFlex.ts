import styled, { type CSSProperties, type RuleSet } from "styled-components";

export interface BaseFlexProps {
  $gap?: CSSProperties["gap"];
  $columnGap?: CSSProperties["columnGap"];
  $rowGap?: CSSProperties["rowGap"];

  $alignItems?: CSSProperties["alignItems"];
  $justifyContent?: CSSProperties["justifyContent"];

  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];

  $flexWrap?: CSSProperties["flexWrap"];
  $padding?: CSSProperties["padding"];
  $margin?: CSSProperties["margin"];
  $backgroundColor?: CSSProperties["backgroundColor"];

  $customStyle?: RuleSet;
}

const BaseFlex = styled.div<BaseFlexProps>`
  display: flex;

  gap: ${({ $gap }) => $gap || "0px"};
  row-gap: ${({ $rowGap }) => $rowGap || "0px"};
  column-gap: ${({ $columnGap }) => $columnGap || "0px"};

  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "flex-start"};
  flex-wrap: ${({ $flexWrap }) => ($flexWrap ? "wrap" : "nowrap")};

  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};

  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};

  ${({ $customStyle }) => $customStyle}
`;

export const Column = styled(BaseFlex)`
  flex-direction: column;
`;

export const Row = styled(BaseFlex)`
  flex-direction: row;
`;
