import React from "react";
import styles from "./styles.module.scss";

interface modalTypes {
  children: any;
  open: boolean;
  centered?: boolean;
  handleClose: () => void;
}

const Modal: React.FC<modalTypes> = ({
  children,
  open,
  handleClose,
  centered,
}) => {
  console.log("chid", children);

  return (
    <div
      className={`${styles["wrapper"]} ${
        open !== true ? styles["disabled"] : ""
      } ${centered === true && open === true ? styles["centered"] : ""}`}
    >
      {children}
    </div>
  );
};

export default Modal;
