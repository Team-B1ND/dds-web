import React from "react";
import { DodamDialog } from "./DodamDialog";
import { DodamFilledButton } from "../Button/FilledButton";

export default {
  title: "ui/DodamDialog",
  component: DodamDialog,
};

export const DodamAlert = () => {
  const handleShowAlert = () => {
    const dialog = new DodamDialog();
    dialog.alert("알림 메시지", "이것은 알림 테스트입니다.");
  };

  return (
    <DodamFilledButton onClick={handleShowAlert}>Alert 테스트</DodamFilledButton>
  );
};

export const DodamConfirm = () => {
  const handleShowConfirm = async () => {
    const dialog = new DodamDialog();
    const result = await dialog.confirm("확인 메시지", "이것은 확인 테스트입니다.");
    if (result) {
      alert("확인 버튼을 눌렀습니다.");
    } else {
      alert("취소 버튼을 눌렀습니다.");
    }
  };

  return (
    <DodamFilledButton onClick={handleShowConfirm}>Confirm 테스트</DodamFilledButton>
  );
};
