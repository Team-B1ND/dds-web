import styled, { RuleSet } from "styled-components";

export const StyledSvg = styled.svg<{ $svgStyle: RuleSet }>`
  ${({ $svgStyle }) => $svgStyle}
`;

export const StyledPath = styled.path<{ color: string, $pathStyle: RuleSet }>`
  fill: ${({ color }) => color};
  ${({ $pathStyle }) => $pathStyle}
`;
