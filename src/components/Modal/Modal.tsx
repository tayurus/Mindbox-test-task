import React from "react";
import { CSSTransition } from "react-transition-group";
import { Close } from "../Close";
import "./style.scss";

type Props = {
  opened: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ opened, onClose, children }) => {
  return (
    <CSSTransition
      classNames={{
        enter: "modal_enter",
        enterActive: "modal_enter-active",
        enterDone: "modal_enter-done",
        exit: "modal_exit",
        exitActive: "modal_exit-active",
        exitDone: "modal_exit-done",
      }}
      in={opened}
      timeout={300}
    >
      <div className="modal">
        <div className="modal--content">
          <Close onClick={onClose} />
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};
