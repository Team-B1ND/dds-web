import {
  DodamDarkTheme,
  DodamFlexLayout,
  DodamGlobalStyles,
  DodamLightTheme,
  DodamShape,
  DodamThemeProvider,
  type ShapeSizeType,
} from "@dds-web/styles";
import React, { ParamHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import type { CSSProperties, RuleSet } from "styled-components";
import { Column, Row } from "../../layout";
import { DodamBody, DodamTitle } from "../Typography";
import { DodamFilledButton, type DodamFilledButtonProps } from "../Button";
import "../../fonts/font.css";
import { useDetectThemeMode } from "@dds-web/hooks";

type DialogHandlerType = {
  content: string;
};

type DialogType =
  | {
      type: "ALERT";
      close: DialogHandlerType & ParamHTMLAttributes<HTMLParagraphElement>;
      customStyle?: RuleSet;
    }
  | {
      type: "CONFIRM";
      confirm: DialogHandlerType & Omit<DodamFilledButtonProps, "children">;
      dismiss: DialogHandlerType & Omit<DodamFilledButtonProps, "children">;
    };

export interface DodamDialogProps {
  dialog: DialogType;
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
  dialog,
  color,
  radius = "ExtraLarge",
  customStyle,
}: DodamDialogProps) => {
  const { isDarkMode } = useDetectThemeMode();

  return (
    <DodamThemeProvider theme={isDarkMode ? DodamDarkTheme : DodamLightTheme}>
      <DodamGlobalStyles />
      <StyledDialog
        $dialogType={dialog.type}
        $radius={radius}
        $backgroundColor={color?.dialogBackgroundColor}
        $customStyle={customStyle!}
      >
        <Column
          $rowGap={"12px"}
          $padding={dialog.type === "CONFIRM" ? "6px" : "12px"}
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

        {dialog.type === "CONFIRM" ? (
          <Row $columnGap={"8px"}>
            <DodamFilledButton radius="Medium" {...dialog.dismiss}>
              {dialog.dismiss.content}
            </DodamFilledButton>
            <DodamFilledButton radius="Medium" {...dialog.confirm}>
              {dialog.confirm.content}
            </DodamFilledButton>
          </Row>
        ) : (
          <Row $justifyContent="flex-end">
            <DodamBody
              fontScale="Large"
              text={dialog.close.content}
              customStyle={dialog.customStyle}
              {...dialog.close}
            />
          </Row>
        )}
      </StyledDialog>
    </DodamThemeProvider>
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
    DodamFlexLayout({
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
