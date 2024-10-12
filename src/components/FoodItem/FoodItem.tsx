import React, { useMemo } from "react";
import { FoodTypes } from "../../interfaces/food.interfaces";

import styles from "./styles.module.scss";
import Button from "../button/Button";
import { formatMoney } from "../../utils/MoneyFormat";
import { DISCOUNT_TYPE, getFoodRealPrice } from "../../utils/FoodUtil";

const FoodItem: React.FC<FoodTypes> = ({
  photoURL,
  foodName,
  originalPrice,
  discountType,
  discountValue,
  quantity,
  noActions,
}) => {
  // price components
  const priceComponent = useMemo(() => {
    let realPrice = getFoodRealPrice({
      originalPrice,
      discountType,
      discountValue,
    });

    if (realPrice === null) {
      realPrice = 0;
    }

    return (
      <div className={styles["price-com"]}>
        <span className={styles["price"]}>{formatMoney(realPrice)} VNĐ</span>
        {discountType !== DISCOUNT_TYPE.NO_DISCONT && (
          <span className={`${styles["original-price"]} ${styles["disabled"]}`}>
            {formatMoney(originalPrice)} VNĐ
          </span>
        )}
      </div>
    );
  }, [originalPrice, discountType, discountValue]);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["info"]}>
        <img src={photoURL} alt={foodName} className={styles["photo"]} />
        <div className={styles["text-info"]}>
          <span className={styles["food-name"]}>{foodName}</span>
          {priceComponent}
        </div>
      </div>
      {/* actions */}
      {noActions !== true && (
        <div className={styles["actions"]}>
          <Button text={"Gọi món"} variant={"primary"} />
          <Button text={"Xóa"} variant={"danger"} />
        </div>
      )}
    </div>
  );
};

export default FoodItem;
