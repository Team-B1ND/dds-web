import { type CSSProperties, css } from "styled-components";

export interface DodamFlexLayoutProps {
  $flexDirection?: CSSProperties["flexDirection"];
  $justifyContent?: CSSProperties["justifyContent"];
  $alignItems?: CSSProperties["alignItems"];
  $columnGap?: CSSProperties["columnGap"];
  $rowGap?: CSSProperties["rowGap"];
  $gap?: CSSProperties["gap"];
}

export const DodamFlexLayout = ({ ...props }: DodamFlexLayoutProps) => {
  return css`
    display: flex;

    flex-direction: ${props.$flexDirection};
    justify-content: ${props.$justifyContent};
    align-items: ${props.$alignItems};

    column-gap: ${props.$columnGap};
    row-gap: ${props.$rowGap};
    gap: ${props.$gap};
  `;
};
