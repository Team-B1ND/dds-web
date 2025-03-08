import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { Dialog } from "./Dialog";
import { DodamColor } from "@dds-web/foundations";
import { DodamThemeProvider } from "@dds-web/styles";

interface DodamAlertProps {
  message: string;
  title?: string;
  onClose: () => void;
}

interface DodamConfirmProps {
    message: string;
    title?: string;
}
/**
 * 
 * Alert
 * title = message
 * text = content?
 */
const DodamAlertComponent = ({ message, onClose, title }: DodamAlertProps) => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <DodamThemeProvider theme={isDarkMode ? "DARK" : "LIGHT"}>
      <Container>
        <Dialog
          title={title!}
          text={message}
          type={{
            dialog: "ALERT",
            close: {
              content: "확인",
              onClick: onClose,
              cloeButton:true,
            },
          }}
          radius="Large"
        />
      </Container>
    </DodamThemeProvider>
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
    title,
    onClose,
  }: DodamConfirmProps & { onClose: (result: boolean) => void }) => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
      <DodamThemeProvider theme={isDarkMode ? "DARK" : "LIGHT"}>
      <Container>
        <Dialog
          title={title!}
          text={message}
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
      </DodamThemeProvider>
    );
  };
  

  class DodamDialogClass {
    private static instance: DodamDialogClass;
    private blockedEvents: EventListener[] = [];
    private routerBlocked = false;
  
    private constructor() {}
  
    public static getInstance(): DodamDialogClass {
      if (!DodamDialogClass.instance) {
        DodamDialogClass.instance = new DodamDialogClass();
      }
      return DodamDialogClass.instance;
    }
  
    public alert(message: string, title?: string) {
      const container = document.createElement("div");
      document.body.appendChild(container);
      this.disableScroll();
      this.blockAllEvents();
      this.blockRouterNavigation();
  
      const close = () => {
        this.enableScroll();
        this.unblockAllEvents();
        this.unblockRouterNavigation();
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
      };
  
      ReactDOM.render(
        <DodamAlertComponent message={message} title={title} onClose={close} />,
        container
      );
    }
  
    public confirm(message: string, title?: string): Promise<boolean> {
      return new Promise((resolve) => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        this.disableScroll();
        this.blockAllEvents();
        this.blockRouterNavigation();
  
        const handleClose = (result: boolean) => {
          this.enableScroll();
          this.unblockAllEvents();
          this.unblockRouterNavigation();
          ReactDOM.unmountComponentAtNode(container);
          document.body.removeChild(container);
          resolve(result);
        };
  
        ReactDOM.render(
          <DodamConfirmComponent
            message={message}
            title={title}
            onClose={handleClose}
          />,
          container
        );
      });
    }
  
    private blockRouterNavigation() {
      window.addEventListener("beforeunload", this.blockNavigation);
    }
  
    private unblockRouterNavigation() {
      window.removeEventListener("beforeunload", this.blockNavigation);
    }
  
    private blockNavigation(e: BeforeUnloadEvent) {
      e.returnValue = "정말 이 페이지를 떠나시겠습니까?";
    }
  
    private blockAllEvents() {
      const preventEvent = (e: Event) => {
        const container = document.getElementById("dodam-dialog-container");
        if (container && container.contains(e.target as Node)) {
          // 다이얼로그 내부에서 발생한 이벤트는 막지 않음
          return;
        }
        e.stopPropagation();
        e.preventDefault();
      };
    
      const events = ["click", "touchstart", "wheel"];
      events.forEach((event) => {
        document.addEventListener(event, preventEvent, true);
        this.blockedEvents.push(preventEvent);
      });
    }
  
    private unblockAllEvents() {
      const events = ["click", "keydown", "touchstart", "wheel"];
      events.forEach((event, index) => {
        document.removeEventListener(event, this.blockedEvents[index], true);
      });
      this.blockedEvents = [];
    }
  
    private disableScroll() {
      document.body.style.overflow = "hidden";
    }
  
    private enableScroll() {
      document.body.style.overflow = "";
    }
  }
  
  
  export const DodamDialog = {
    alert: (message: string, title: string = window.location.origin) =>
      DodamDialogClass.getInstance().alert(message, title),
  
    confirm: (message: string, title: string = window.location.origin) =>
      DodamDialogClass.getInstance().confirm(message, title),
  };
  
  
  
  


  const Container = styled.div.attrs({ id: "dodam-dialog-container" })`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 13;
`;

const DismissButton = css`
  color: ${({ theme }) => theme.labelNeutral};
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