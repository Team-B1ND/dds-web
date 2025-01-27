import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { Dialog } from "./Dialog";

interface DodamAlertProps {
  message: string;
  content?: string;
  onClose: () => void;
}

interface DodamConfirmProps {
    message: string;
    content?: string;
}
/**
 * 
 * Alert
 * title = message
 * text = content?
 */
const DodamAlertComponent = ({ message, onClose, content }: DodamAlertProps) => {
  return (
    <Container>
      <Dialog
        title={message}
        text={content!}
        type={{
          dialog: "ALERT",
          close: {
            content: "닫기",
            onClick: onClose,
          },
        }}
        radius="Large"
      />
    </Container>
  );
};


/**
 * 
 * Confirm
 * title = message
 * text = content?
 * return true ? false
 */
const DodamConfirmComponent = ({
    message,
    content,
    onClose,
  }: DodamConfirmProps & { onClose: (result: boolean) => void }) => {
    return (
      <Container>
        <Dialog
          title={message}
          text={content!}
          type={{
            dialog: "CONFIRM",
            confirm: {
              content: "확인",
              onClick: () => onClose(true), 
              style: StyledButton,
            },
            dismiss: {
              content: "취소",
              onClick: () => onClose(false), 
              style: DismissButton,
            },
          }}
          radius="Large"
        />
      </Container>
    );
  };
  

export class DodamDialog {
    public alert(message: string, content?: string) {
      // DOM에 컨테이너 생성
      const container = document.createElement("div");
      document.body.appendChild(container);
  
      // 닫기 핸들러
      const close = () => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
      };
  
      // ReactDOM으로 렌더링
      ReactDOM.render(
        <DodamAlertComponent message={message} content={content} onClose={close} />,
        container
      );
    }
  
    public confirm(message: string, content?: string): Promise<boolean> {
      return new Promise((resolve) => {
        // DOM에 컨테이너 생성
        const container = document.createElement("div");
        document.body.appendChild(container);
  
        const handleClose = (result: boolean) => {
          ReactDOM.unmountComponentAtNode(container);
          document.body.removeChild(container);
          resolve(result); // 확인(true) 또는 취소(false) 반환
        };
  
        // ReactDOM으로 렌더링
        ReactDOM.render(
          <DodamConfirmComponent
            message={message}
            content={content}
            onClose={handleClose}
          />,
          container
        );
      });
    }
  }
  


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const DismissButton = css`
  color: ${({ theme }) => theme.labelNetural};
  background-color: ${({ theme }) => theme.fillNormal};
  width: 50%;
  height: 50px;
  min-height: 50px;
`;

const StyledButton = css`
  width: 50%;
  height: 50px;
  min-height: 50px;
  color: ${({ theme }) => theme.staticWhite};
  background-color: ${({ theme }) => theme.primaryNormal};

`;