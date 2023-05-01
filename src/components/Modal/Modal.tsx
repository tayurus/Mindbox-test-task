import React from "react";
import { CSSTransition } from "react-transition-group";
import { Close } from "../Close";
import "./style.scss";
import { cn } from "src/helpers/bem";
const b = cn("modal");

type Props = {
  opened: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ opened, onClose, children }) => {
  return (
    <CSSTransition
      classNames={{
        enter: b({ enter: true }),
        enterActive: b({ "enter-active": true }),
        enterDone: b({ "enter-done": true }),
        exit: b({ exit: true }),
        exitActive: b({ "exit-active": true }),
        exitDone: b({ "exit-done": true }),
      }}
      in={opened}
      timeout={300}
    >
      <div className={b()}>
        <div className={b("content")}>
          <Close onClick={onClose} />
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};
