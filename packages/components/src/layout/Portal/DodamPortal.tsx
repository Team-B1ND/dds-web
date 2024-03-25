import ReactDom from "react-dom";
import { ReactNode } from "react";

interface DodamPortalProps {
  children: ReactNode;
  id: string;
}

export const DodamPortal = ({ children, id }: DodamPortalProps) => {
  const portalId = document.getElementById(id);

  return portalId && ReactDom.createPortal(children, portalId);
};
