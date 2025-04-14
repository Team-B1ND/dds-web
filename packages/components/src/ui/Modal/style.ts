import styled, { CSSObject } from "styled-components";

export const Background = styled.div<{ 
  customStyle?: CSSObject;
  $background?: boolean;
}>`
  ${({ customStyle }) => customStyle && Object.entries(customStyle)
    .map(([key, value]) => `${key}: ${value} !important;`)
    .join("\n")
  };

  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  ${({ $background }) => $background ? `background-color: rgba(0, 0, 0, 0.4);` : `background-color: transparent;`};
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0;
  overflow: auto;
`;
