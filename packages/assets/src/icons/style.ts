import styled, { RuleSet } from "styled-components";

export const StyledSvg = styled.svg<{ customStyle: RuleSet }>`
  ${({ customStyle }) => customStyle}
`;

export const StyledPath = styled.path<{ color: string }>`
  fill: ${({ color, theme }) => color || theme.onSurface};
`;
