import ReactDom from "react-dom";
import type { ReactNode, ReactPortal } from "react";

interface DodamPortalProps {
  children: ReactNode;
  id: string;
}

export const DodamPortal = ({
  children,
  id,
}: DodamPortalProps): ReactPortal | null => {
  const portalId = document.getElementById(id);

  return portalId && ReactDom.createPortal(children, portalId);
};
