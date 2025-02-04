import { DodamShape, ShapeSizeType } from "@dds-web/styles";
import { DodamColor } from "@dds-web/foundations";
import React, { MouseEventHandler } from "react";
import styled, { CSSProperties, RuleSet, css } from "styled-components";
import { Column, FlexLayout, Row } from "../../layout";
import { DodamBody1 , DodamHeading1 } from "../Typography";
import { DodamFilledButton } from "../Button";


type DialogHandlerType = {
  content: string;
  onClick: MouseEventHandler<HTMLButtonElement | HTMLParagraphElement>;
  style?: RuleSet;
};

type DialogType = AlertTProps | ConfirmProps;

interface AlertTProps{
  dialog: "ALERT";
  close: DialogHandlerType;
}

interface ConfirmProps{
  dialog: "CONFIRM";
  confirm: DialogHandlerType;
  dismiss: DialogHandlerType;
}

export interface DodamDialogProps {
  title: string;
  text: string;
  type: DialogType;
  color?: {
    dialogBackgroundColor?: CSSProperties["backgroundColor"];
    titleColor?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
  };
  radius?: ShapeSizeType;
}

export const Dialog = ({
  title,
  text,
  type,
  color,
  radius = "ExtraLarge",
}: DodamDialogProps) => {
  
  return (
    <StyledDialog
      dialogType={type.dialog}
      radius={radius}
      backgroundColor={color?.dialogBackgroundColor}
    >
      <Column rowGap={12} padding={type.dialog === "CONFIRM" ? "6px" : "12px"}>
        <DodamHeading1
          fontScale="Bold"
          text={title}
          customStyle={StyledTitle(color?.titleColor)}
        />
        <DodamBody1 text={text} customStyle={StyledText(color?.textColor)} />
      </Column>
    
      {type.dialog === "CONFIRM" ? (
        <ButtonStyle>
          <DodamFilledButton 
          text="닫기"
          width={130}
          enabled={true}
          size="Large"
          backgroundColorType="Assisitive"
          onClick={type.dismiss.onClick}
          >
            {type.dismiss.content}
          </DodamFilledButton>
          <DodamFilledButton
           text="확인"
           width={130}
           backgroundColorType="Primary"
           enabled={true}
           size="Large"
           customStyle={{
            color:"white"
          }}
            onClick={type.confirm.onClick}
           
          >
            {type.confirm.content}
          </DodamFilledButton>
        </ButtonStyle>
      ) : (
        <Row justifyContent="flex-end" style={{cursor:"pointer"}}>
          <DodamBody1
            fontScale="Bold"
            text={type.close.content}
            onClick={type.close.onClick}
            customStyle={type.close.style}
          />
        </Row>
      )}
    </StyledDialog>
  );
};

const StyledDialog = styled.div<{
  radius: ShapeSizeType;
  dialogType: "ALERT" | "CONFIRM";
  backgroundColor: CSSProperties["backgroundColor"];
}>`
  min-width: 300px;
  max-width: 620px;
  
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;

  /* background-color: white; */
  background-color: ${({  theme }:any) =>
    theme === null ? theme.staticWhite : theme.backgroundNormal };
    
  padding: ${({ dialogType }) => (dialogType === "ALERT" ? "12px" : "18px")};

  ${({ radius }) => DodamShape[radius]}
  ${({ dialogType }) =>
    FlexLayout({
      flexDirection: "column",
      rowGap: dialogType === "CONFIRM" ? "18px" : "24px",
    })}
`;

const ButtonStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const StyledTitle = (titleColor: CSSProperties["color"]) => css`
  color: ${({ theme }) => titleColor || theme.labelStrong};
`;

const StyledText = (textColor: CSSProperties["color"]) => css`
  color: ${({ theme }) => textColor || theme.labelAlternative};
`;
