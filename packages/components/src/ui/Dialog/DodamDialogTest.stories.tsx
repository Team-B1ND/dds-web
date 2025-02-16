import React from "react";
import { DodamDialog } from "./DodamDialog";
import { DodamFilledButton } from "../Button/FilledButton";

export default {
  title: "ui/DodamDialog",
  component: DodamDialog,
};

export const DodamAlert = () => {
  const handleShowAlert = () => {
    DodamDialog.alert("알림 메시지");
  };

  return (
    <DodamFilledButton onClick={handleShowAlert} text="Alert 테스트" size="Large"></DodamFilledButton>
  );
};

export const DodamConfirm = () => {
  const handleShowConfirm = async () => {
    
    const result = await DodamDialog.confirm("확인 메시지");
    if (result) {
      alert("확인 버튼을 눌렀습니다.");
    } else {
      alert("취소 버튼을 눌렀습니다.");
    }
  };

  return (
    <DodamFilledButton onClick={handleShowConfirm} text="Confirm 테스트" size="Large"></DodamFilledButton>
  );
};
