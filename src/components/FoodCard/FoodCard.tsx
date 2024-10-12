import React, { Children, useContext, useMemo } from "react";

import styles from "./styles.module.scss";
import { formatMoney } from "../../utils/MoneyFormat";
import Button from "../button/Button";
import { AppContext } from "../../contexts/AppProvider/AppProvider";
import Toast from "../toast/Toast";
import { text } from "stream/consumers";
import Order from "../order/Order";
import { FoodTypes } from "../../interfaces/food.interfaces";
import { DISCOUNT_TYPE, getFoodRealPrice } from "../../utils/FoodUtil";

const FoodCard: React.FC<FoodTypes> = ({
  photoURL,
  foodName,
  originalPrice,
  discountType,
  discountValue,
  quantity,
  noActions,
}) => {
  const { toastData, setToastData, modalData, setModalData } =
    useContext(AppContext);

  // discount component
  const discountComponent = useMemo(() => {
    if (discountType === DISCOUNT_TYPE.NO_DISCONT) return <></>;

    return (
      <div className={styles["discount-com"]}>
        <span className={styles["label"]}>Giảm: </span>
        <span className={styles["discount"]}>
          {formatMoney(discountValue)}
          {discountType === DISCOUNT_TYPE.PERCEN_DISCOUNT ? "%" : " VNĐ"}
        </span>
      </div>
    );
  }, [originalPrice, discountType, discountValue]);

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

  // quantity component
  const quantityComponent = useMemo(() => {
    if (quantity < 0) return <span className={styles["quantity-com"]}></span>;

    if (quantity > 0)
      return (
        <span className={styles["quantity-com"]}>
          Chỉ còn: <span className={styles["quantity"]}>{quantity}</span>
        </span>
      );

    return <span className={styles["quantity-com"]}>Hết hàng</span>;
  }, [quantity]);

  return (
    <div className={styles["wrapper"]}>
      {/* hình ảnh */}
      <div className={styles["photo"]}>
        <img src={photoURL} alt={foodName} />
        {discountComponent}
      </div>
      <div className={styles["info"]}>
        {/* tên */}
        <span className={styles["name"]}>{foodName}</span>
        {/* giá */}
        {priceComponent}
        {/* số lượng */}
        {quantityComponent}
        {/* actions */}
        {noActions !== true && (
          <div className={styles["actions"]}>
            <Button
              text="Gọi món"
              variant={"primary"}
              onClick={() => {
                setModalData({
                  open: true,
                  children: (
                    <Order
                      photoURL={photoURL}
                      foodName={foodName}
                      originalPrice={originalPrice}
                      discountType={discountType}
                      discountValue={discountValue}
                      quantity={quantity}
                    />
                  ),
                });
              }}
            />
            <Button
              text="Lưu"
              variant={"danger"}
              onClick={() => {
                setToastData({ open: true, text: "Đã lưu" });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
