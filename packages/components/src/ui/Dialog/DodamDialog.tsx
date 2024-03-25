import React from "react";

export interface DodamDialogProps {
  title: string;
  content: string;
  dialogType?: "ALERT" | "CONFIRM";
}

export const DodamDialog = ({
  title,
  content,
  dialogType = "ALERT",
}: DodamDialogProps) => {
  return <></>;
};
