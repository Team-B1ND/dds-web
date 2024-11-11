import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { DodamLightTheme } from "@dds-web/styles";
import {Checkmark} from "@dds-web/assets";

interface DodamCheckBoxProps extends HTMLAttributes<HTMLButtonElement> {
    isDisabled: boolean;
}

export const DodamCheckBox = ({ isDisabled = false }: DodamCheckBoxProps) => {
    return (
    <>
    {isDisabled ? 
           <DisabledCheckBox>
            <Checkmark size={14} color="white" />
           </DisabledCheckBox>
           :<StyledCheckBox></StyledCheckBox>
    }
    </>
    );
};

const StyledCheckBox = styled.div`
    width: 18px;
    height: 18px;
    border: 2px solid ${({ theme }) => theme.labelNormal};
    border-radius: 4px;
`;

const DisabledCheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px solid ${DodamLightTheme.primaryNormal};
    background-color: ${DodamLightTheme.primaryNormal};
    border-radius: 4px;
`