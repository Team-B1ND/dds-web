import React, { useEffect, useState } from "react";
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
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);


    /**
   * Create the modal root when the component mounts
   */
  useEffect(() => {
    let existingModalRoot = document.getElementById("modal");

    if (!existingModalRoot) {
      existingModalRoot = document.createElement("div");
      existingModalRoot.id = "modal";
      document.body.appendChild(existingModalRoot);
    }

    setModalRoot(existingModalRoot);

    return () => {
         /** 
       * Cleanup when the modal is unmounted.
      */
      if (!document.getElementById("modal")?.hasChildNodes()) {
        existingModalRoot?.remove();
      }
    };
  }, []);

  if (!isOpen || !modalRoot) return null;

   /**
   * Render into modalRoot using React Portal
   */
  return ReactDOM.createPortal(
    <Background onClick={close} customStyle={customStyle} background={background}>
      {children}
    </Background>,
    modalRoot
  );
};