import React,{useEffect} from "react";
import ReactDOM from "react-dom";
import { Background } from "./style";
import { CSSObject } from "styled-components";


interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
  customStyle?: CSSObject;
}

export const DodamModal = ({ isOpen, close, children,customStyle }: ModalProps) => {
  useEffect(() => {
    let modalRoot: HTMLDivElement | null = null;

    if (isOpen) {
      /**
       * 모달을 열 때 <div id="modal"> 동적 생성
       *  */ 
      modalRoot = document.createElement("div");
      modalRoot.id = "modal";
      document.body.appendChild(modalRoot);
    }

    return () => {
      /**
       * 모달 닫힐 때 <div id="modal"> 제거
       *  */ 
      if (modalRoot) {
        document.body.removeChild(modalRoot);
      }
    };
  }, [isOpen]);

  /**
   * 모달이 열려있지 않으면 아무것도 렌더링하지 않음
   *  */ 
  if (!isOpen) return null;

  /**
   * modal id 없을떄 아무것도 렌더링 하지 않음
   *  */ 
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  /** 
   * 
   * 동적으로 생성된 modalRoot에 React Portal로 렌더링
   * 
   * */ 
  return ReactDOM.createPortal(
    <Background onClick={close} customStyle={customStyle}>
        {children}
    </Background>,
    modalRoot
  );
};

