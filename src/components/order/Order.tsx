import React, { FC, useContext, useState } from "react";

import styles from "./styles.module.scss";
import FoodCard from "../FoodCard/FoodCard";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Button from "../button/Button";
import { AppContext } from "../../contexts/AppProvider/AppProvider";
import { formatMoney } from "../../utils/MoneyFormat";
import { FoodTypes } from "../../interfaces/food.interfaces";
import { getFoodRealPrice } from "../../utils/FoodUtil";

const Order: FC<FoodTypes> = ({
  photoURL,
  foodName,
  originalPrice,
  discountType,
  discountValue,
  quantity,
}) => {
  const [number, setNumber] = useState(1);
  const { toastData, setToastData, modalData, setModalData } =
    useContext(AppContext);

  let realPrice = getFoodRealPrice({
    originalPrice,
    discountType,
    discountValue,
  });

  if (realPrice === null) {
    realPrice = 0;
  }

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["card"]}>
        <FoodCard
          photoURL={photoURL}
          foodName={foodName}
          originalPrice={originalPrice}
          discountType={discountType}
          discountValue={discountValue}
          quantity={quantity}
          noActions={true}
        />
      </div>

      <div className={styles["quantity-com"]}>
        <FaMinus
          className={styles["number-icon"]}
          onClick={() => {
            if (number > 1) {
              setNumber(number - 1);
            }
          }}
        />
        <span className={styles["number"]}>{number}</span>
        <FaPlus
          className={styles["number-icon"]}
          onClick={() => {
            if (number < quantity || quantity === -1) {
              setNumber(number + 1);
            }
          }}
        />
      </div>

      <span>{formatMoney(number * realPrice)} VNĐ</span>

      <div className={styles["actions-com"]}>
        <Button
          text={"Gọi món"}
          variant={"primary"}
          onClick={() => {
            setToastData({ open: true, text: "Gọi món thành công" });
          }}
        />
        <Button
          text={"Đóng"}
          variant={"danger"}
          onClick={() => {
            setModalData({ open: false });
          }}
        />
      </div>
    </div>
  );
};

export default Order;
