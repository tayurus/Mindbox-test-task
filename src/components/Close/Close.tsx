import React, { FC } from "react";
import cx from "classnames";
import { ReactComponent as Icon } from "./images/close.svg";
import "./style.scss";
import { cn } from "src/helpers/bem";
const b = cn("close");

type Props = {
  className?: string;
  onClick?: () => void;
};

export const Close: FC<Props> = ({ className, onClick }) => (
  <div className={cx(b(), className)} onClick={onClick}>
    <Icon className={b("icon")} />
  </div>
);
