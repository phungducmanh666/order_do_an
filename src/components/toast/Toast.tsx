import React, { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";

interface ToastTypes {
  open?: boolean;
  variant?: string;
  text: string;
  timeout: number;
  handleClose: () => void;
}

const Toast: React.FC<ToastTypes> = ({
  open,
  variant,
  text,
  timeout,
  handleClose,
}) => {
  useEffect(() => {
    if (open === true) {
      const timer = setTimeout(() => {
        handleClose();
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div
      className={`${styles["wrapper"]} ${open === false && styles["disabled"]}`}
    >
      {text}
    </div>
  );
};

export default Toast;
