import React, { useContext } from "react";

import styles from "./styles.module.scss";
import Header from "../header/Header";
import { AppContext } from "../../contexts/AppProvider/AppProvider";

interface TemplateProps {}

const Template: React.FC<TemplateProps> = ({}) => {
  const { currentPage } = useContext(AppContext);

  return (
    <div className={styles["container"]}>
      <Header className={styles["header"]} />
      {currentPage}
    </div>
  );
};

export default Template;
