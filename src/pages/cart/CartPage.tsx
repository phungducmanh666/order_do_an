import React, { useEffect, useState } from "react";

import orders from "../../mocks/orders.json";

import styles from "./styles.module.scss";
import FoodItem from "../../components/FoodItem/FoodItem";
import Tag from "../../components/tag/Tag";
import { getFoodRealPrice } from "../../utils/FoodUtil";
import { formatMoney } from "../../utils/MoneyFormat";
import Button from "../../components/button/Button";

function CartPage() {
  const [totalMoney, setTotalMoney] = useState(0);

  useEffect(() => {
    let ttmoney = 0;

    orders.map((order) => {
      const originalPrice: number = order.originalPrice;
      const discountType: number = order.discountType;
      const discountValue: number = order.discountValue;

      const num: number | null = getFoodRealPrice({
        originalPrice: originalPrice,
        discountType: discountType,
        discountValue: discountValue,
      });

      console.log(num);

      if (num !== null) {
        ttmoney = ttmoney + (num as number);
      }
    });

    console.log(ttmoney);

    setTotalMoney(ttmoney);
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["order-foods-container"]}>
        {orders.map((order) => (
          <div key={order.id} className={styles["food-item"]}>
            <FoodItem {...order} noActions={true} />

            {order.status === 1 && (
              <Tag text={"Đang chuẩn bị"} variant="secondary" />
            )}

            {order.status === 2 && (
              <Tag text={"Đã lên món"} variant="primary" />
            )}
          </div>
        ))}
      </div>

      <div className={styles["footer"]}>
        <div className={styles["bill-money"]}>
          <strong>Tổng: </strong>
          <span className={styles["money"]}>{formatMoney(totalMoney)} VNĐ</span>
        </div>
        <Button text={"Thanh toán"} variant={"primary"} />
      </div>
    </div>
  );
}

export default CartPage;
