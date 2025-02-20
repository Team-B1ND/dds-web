import styled, { CSSObject, CSSProperties, RuleSet } from "styled-components";

export type Align = "center" | "flex-start" | "flex-end";

export interface BaseFlexProps {
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  justifyContent?: Align | "space-between";
  fill?: string;
  alignItems?: Align;
  padding?: CSSProperties["padding"];
  wrap?: boolean;
  backgroundColor?: CSSProperties["backgroundColor"];

  customStyle?: CSSObject;
}

const BaseFlex = styled.div<BaseFlexProps>`
  display: flex;

  gap: ${({ gap }) => gap || 0}px;
  row-gap: ${({ rowGap }) => rowGap || 0}px;
  column-gap: ${({ columnGap }) => columnGap || 0}px;

  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};

  width: ${({ fill }) => fill || "auto"};

  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};

  padding: ${({ padding }) => padding};

  ${({ customStyle }) => customStyle}
`;

export const Column = styled(BaseFlex)`
  flex-direction: column;
`;

export const Row = styled(BaseFlex)`
  flex-direction: row;
`;
