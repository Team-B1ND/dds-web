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
        <Row columnGap={8}>
          <DodamFilledButton
            customStyle={type.dismiss.style}
            onClick={type.dismiss.onClick}
            radius="Medium"
          >
            {type.dismiss.content}
          </DodamFilledButton>
          <DodamFilledButton
            customStyle={type.confirm.style}
            onClick={type.confirm.onClick}
            radius="Medium"
          >
            {type.confirm.content}
          </DodamFilledButton>
        </Row>
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
  min-width: 280px;
  max-width: 560px;
  
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme === null ? theme.backgroundNormal : DodamColor.common100};
  padding: ${({ dialogType }) => (dialogType === "ALERT" ? "12px" : "18px")};

  ${({ radius }) => DodamShape[radius]}
  ${({ dialogType }) =>
    FlexLayout({
      flexDirection: "column",
      rowGap: dialogType === "CONFIRM" ? "18px" : "24px",
    })}
`;

const StyledTitle = (titleColor: CSSProperties["color"]) => css`
  color: ${({ theme }) => titleColor || theme.labelStrong};
`;

const StyledText = (textColor: CSSProperties["color"]) => css`
  color: ${({ theme }) => textColor || theme.labelAlternative};
`;
