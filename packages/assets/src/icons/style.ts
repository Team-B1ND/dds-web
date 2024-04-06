import styled, { RuleSet } from "styled-components";

export const StyledSvg = styled.svg<{ svgStyle: RuleSet }>`
  ${({ svgStyle }) => svgStyle}
`;

export const StyledPath = styled.path<{ pathStyle: RuleSet }>`
  fill: ${({ theme }) => theme.onSurface};
  ${({ pathStyle }) => pathStyle}
`;
