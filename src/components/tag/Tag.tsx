import React from "react";
import styles from "./styles.module.scss";

interface TagTypes {
  text: string;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tag: React.FC<TagTypes> = ({ text, variant, onClick }) => {
  return (
    <span
      className={`${styles["wrapper"]}  ${
        variant && styles[`variant-${variant}`]
      }`}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

export default Tag;
