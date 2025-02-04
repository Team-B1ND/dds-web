import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Background } from "./style";
import { CSSObject } from "styled-components";

interface ModalProps {
  isOpen: boolean;
  close?: () => void;
  children: React.ReactNode;
  customStyle?: CSSObject;
  background?: boolean;
}

export const DodamModal = ({ isOpen, close, children, customStyle, background }: ModalProps) => {
  const modalRootRef = useRef<HTMLDivElement | null>(null);

  /**
   * Create the modal root when the component mounts
   */
  useEffect(() => {
    if (!modalRootRef.current) {
      modalRootRef.current = document.createElement("div");
      modalRootRef.current.id = "modal";
      document.body.appendChild(modalRootRef.current);
    }

    return () => {
      /** 
       * Cleanup when the modal is unmounted.
      */
      if (modalRootRef.current) {
        document.body.removeChild(modalRootRef.current);
        modalRootRef.current = null;
      }
    };
  }, []);


  if (!isOpen || !modalRootRef.current) return null;



  /**
   * Render into modalRoot using React Portal
   */
  return ReactDOM.createPortal(
    <Background onClick={close} customStyle={customStyle} background={background}>
      {children}
    </Background>,
    modalRootRef.current!
  );
};
