import styled from "styled-components";
import { DodamShape, DodamTypography } from "@dds-web/styles";

export const Popover = styled.div`
    
    position: absolute;
    
    left: 200px;
    bottom: 30px;
    display: inline-flex;
    min-width: 220px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    ${DodamShape.Large}
    background-color: ${({theme})=>theme.backgroundNormal};
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
    
    @media (max-width: 1068px) {
        width: 220px;
        bottom: 80px;
        right: 5rem;
        left: auto;
    }

`
export const ModalBox = styled.div`
    display: flex;
    height: 36px;
    padding: 8px 0px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    color: ${({theme})=>theme.labelNormal};
    cursor: pointer;
    p{
        ${DodamTypography.Body1.Bold};
    }
    span{
        ${DodamTypography.Headline.Medium};
    }

`