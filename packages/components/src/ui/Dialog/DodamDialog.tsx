import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { Dialog } from "./Dialog";
import { DodamColor } from "@dds-web/foundations";

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
  

  class DodamDialogCalss {
    private static instance: DodamDialogCalss;

    private constructor() {} // 생성자를 private으로 제한
  
    // 싱글톤 인스턴스 반환
    public static getInstance(): DodamDialogCalss {
      if (!DodamDialogCalss.instance) {
        DodamDialogCalss.instance = new DodamDialogCalss();
      }
      return DodamDialogCalss.instance;
    }

    public alert(message: string, content?: string) {
      /**
       * Create container in DOM
       *  */ 
      const container = document.createElement("div");
      document.body.appendChild(container);
  
      /** 
       * Scroll limit
       * */ 
      this.disableScroll();
  
      /**
       * Close function
       */
      const close = () => {
        this.enableScroll();
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
      };
  
      /**
       * Transfer to ReactDOM
       */
      ReactDOM.render(
        <DodamAlertComponent message={message} content={content} onClose={close} />,
        container
      );
    }
  
    public confirm(message: string, content?: string): Promise<boolean> {
      return new Promise((resolve) => {
      /**
       * Create container in DOM
       *  */ 
        const container = document.createElement("div");
        document.body.appendChild(container);
  
      /** 
       * Scroll limit
       * */ 
        this.disableScroll();
        
        const handleClose = (result: boolean) => {
          this.enableScroll();
          ReactDOM.unmountComponentAtNode(container);
          document.body.removeChild(container);
          resolve(result); 
        };
  
      /**
       * Transfer to ReactDOM
       */
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
  
    /**
     * Scroll limit
     *  */ 
    private disableScroll() {
      document.body.style.overflow = "hidden";
    }
  
    /**
     * Scroll Restore
     *  */ 
    private enableScroll() {
      document.body.style.overflow = "";
    }
  }
  
  export const DodamDialog = {
    alert: (message: string, content?: string) => DodamDialogCalss.getInstance().alert(message, content),
    confirm: (message: string, content?: string) => DodamDialogCalss.getInstance().confirm(message, content),
  };
  


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
  z-index: 3;
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
  color: ${({ theme }:any) => theme === null ? theme.staticWhite : DodamColor.common100};
  background-color: ${({ theme }:any) => theme === null ? theme.primaryNormal : DodamColor.blue45};

`;