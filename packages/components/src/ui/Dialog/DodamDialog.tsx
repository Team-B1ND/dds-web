import { DodamShape, type ShapeSizeType } from "@dds-web/styles";
import React from "react";
import styled, { css } from "styled-components";
import type { CSSProperties, RuleSet } from "styled-components";
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
      confirm: DialogHandlerType & {
        isLoading?: boolean;
        isDisabled?: boolean;
      };
      dismiss: DialogHandlerType;
    };

export interface DodamDialogProps {
  type: DialogType;
  title: string;
  text?: string;
  color?: {
    dialogBackgroundColor?: CSSProperties["backgroundColor"];
    titleColor?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
  };
  radius?: ShapeSizeType;
  customStyle?: RuleSet;
}

export const DodamDialog = ({
  title,
  text,
  type,
  color,
  radius = "ExtraLarge",
  customStyle,
}: DodamDialogProps) => {
  return (
    <StyledDialog
      $dialogType={type.dialog}
      $radius={radius}
      $backgroundColor={color?.dialogBackgroundColor}
      $customStyle={customStyle!}
    >
      <Column
        $rowGap={"12px"}
        $padding={type.dialog === "CONFIRM" ? "6px" : "12px"}
      >
        <DodamTitle
          fontScale="Large"
          text={title}
          customStyle={StyledTitle(color?.titleColor)}
        />
        {text && (
          <DodamBody text={text} customStyle={StyledText(color?.textColor)} />
        )}
      </Column>

      {type.dialog === "CONFIRM" ? (
        <Row $columnGap={"8px"}>
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
            isLoading={type.confirm.isLoading}
            isDisabled={type.confirm.isDisabled}
            radius="Medium"
          >
            {type.confirm.content}
          </DodamFilledButton>
        </Row>
      ) : (
        <Row $justifyContent="flex-end">
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
  $radius: ShapeSizeType;
  $dialogType: "ALERT" | "CONFIRM";
  $backgroundColor: CSSProperties["backgroundColor"];
  $customStyle: RuleSet;
}>`
  min-width: 280px;
  max-width: 560px;

  border: 1px solid #ddd;

  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.surfaceContainerHigh};
  padding: ${({ $dialogType }) => ($dialogType === "ALERT" ? "12px" : "18px")};

  ${({ $radius }) => DodamShape[$radius]}

  ${({ $dialogType }) =>
    FlexLayout({
      $flexDirection: "column",
      $rowGap: $dialogType === "CONFIRM" ? "18px" : "24px",
    })}

  ${({ $customStyle }) => $customStyle}
`;

const StyledTitle = (titleColor: CSSProperties["color"]) => css`
  color: ${({ theme }) => titleColor || theme.onSurface};
`;

const StyledText = (textColor: CSSProperties["color"]) => css`
  color: ${({ theme }) => textColor || theme.tertiary};
`;
