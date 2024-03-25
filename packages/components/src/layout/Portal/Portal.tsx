import ReactDom from "react-dom";
import { ReactNode } from "react";

interface PortalProps {
  children: ReactNode;
  id: string;
}

export const Portal = ({ children, id }: PortalProps) => {
  const portalId = document.getElementById(id);

  return portalId && ReactDom.createPortal(children, portalId);
};
