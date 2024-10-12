import React from "react";
import styles from "./styles.module.scss";

interface ButtonType {
  text?: string | null;
  variant?: string | null;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonType> = ({ text, variant, onClick }) => {
  return (
    <button
      className={`${styles["wrapper"]} ${styles[`${variant}`]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
