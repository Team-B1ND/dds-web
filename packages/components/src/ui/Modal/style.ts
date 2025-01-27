import styled,{CSSObject} from "styled-components";

export const Background = styled.div<{ customStyle?: CSSObject }>`
  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0;
  overflow: auto;
  ${({ customStyle }) => customStyle}
`