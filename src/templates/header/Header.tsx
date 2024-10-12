import React, { useContext, useEffect } from "react";

import styles from "./styles.module.scss";
import { AppContext } from "../../contexts/AppProvider/AppProvider";
import OrderPage from "../../pages/order/OrderPage";
import CartPage from "../../pages/cart/CartPage";
import SavedPage from "../../pages/saved/SavedPage";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { currentPage, setCurrentPage, currentMenu, setCurrentMenu } =
    useContext(AppContext);

  const myRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (myRef.current !== null) {
      myRef.current.click();
    }
  }, []);

  return (
    <div className={`${styles["wrapper"]} ${className}`}>
      <div className={styles["menus"]}>
        <div
          className={`${styles["menu-item"]} ${
            currentMenu === 0 && styles["active"]
          }`}
          onClick={() => {
            setCurrentPage(<OrderPage />);
            setCurrentMenu(0);
          }}
          ref={myRef}
        >
          Đặt món
        </div>
        <div
          className={`${styles["menu-item"]} ${
            currentMenu === 1 && styles["active"]
          }`}
          onClick={() => {
            setCurrentPage(<SavedPage />);
            setCurrentMenu(1);
          }}
        >
          Đã lưu
        </div>
        <div
          className={`${styles["menu-item"]} ${
            currentMenu === 2 && styles["active"]
          }`}
          onClick={() => {
            setCurrentPage(<CartPage />);
            setCurrentMenu(2);
          }}
        >
          Hóa đơn
        </div>
      </div>
    </div>
  );
};

export default Header;
