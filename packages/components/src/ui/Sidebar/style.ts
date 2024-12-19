import styled from "styled-components";
import { DodamShape } from "@dds-web/styles";


export const DodamSidebarBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height:  800px;
@media (min-width: 768px) {  
        width: 16rem;
    }
`

export const DodamSidebar = styled.div`
display: flex;
flex-direction: column;
width: 90%;
height: 100%;
padding: 12px;
${DodamShape.Large};
background-color: ${({ theme }) => theme.backgroundNormal};
`
export const DodamLogo = styled.div`
display: flex;
align-items: start;
width: 100%;
height: 20px;
`


export const DodamContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const DodamButtonBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 55%;
`

export const DodamButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.primaryNormal};
 
  ${DodamShape.Medium}
  cursor: pointer;
  &:active{
    box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  }
  color: white;
  img{
    background-color: white;
  }
`