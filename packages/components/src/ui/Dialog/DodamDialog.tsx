import { DodamShape, ShapeSizeType } from "@dds-web/styles";
import React from "react";
import styled, { RuleSet, css } from "styled-components";
import { Column, FlexLayout, Row } from "../../layout";
import { DodamBody, DodamTitle } from "../Typography";
import { DodamFilledButton } from "../Button";

type DialogHandlerType = {
  content: string;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  style?: RuleSet;
};

type DialogType =
  | {
      dialog: "ALERT";
      close: DialogHandlerType;
    }
  | {
      dialog: "CONFIRM";
      confirm: DialogHandlerType;
      dismiss: DialogHandlerType;
    };

export interface DodamDialogProps {
  title: string;
  text: string;
  radius?: ShapeSizeType;
  type: DialogType;
}

export const DodamDialog = ({
  title,
  text,
  radius = "ExtraLarge",
  type,
}: DodamDialogProps) => {
  return (
    <StyledDialog radius={radius} dialogType={type.dialog}>
      <Column rowGap={12} padding={type.dialog === "CONFIRM" ? "6px" : "12px"}>
        <DodamTitle fontScale="Large" text={title} customStyle={StyledTitle} />
        <DodamBody text={text} customStyle={StyledText} />
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
        <Row justifyContent="flex-end">
          <DodamBody
            fontScale="Large"
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
}>`
  min-width: 280px;
  max-width: 560px;

  background-color: ${({ theme }) => theme.surfaceContainerHigh};
  padding: ${({ dialogType }) => (dialogType === "ALERT" ? "12px" : "18px")};
  border: 1px solid #ddd;

  ${({ radius }) => DodamShape[radius]}
  ${({ dialogType }) =>
    FlexLayout({
      flexDirection: "column",
      rowGap: dialogType === "CONFIRM" ? "18px" : "24px",
    })}
`;

const StyledTitle = css`
  color: ${({ theme }) => theme.onSurface};
`;

const StyledText = css`
  color: ${({ theme }) => theme.tertiary};
`;
