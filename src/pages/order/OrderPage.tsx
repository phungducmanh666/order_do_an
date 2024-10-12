import React, { useContext, useState } from "react";

import styles from "./styles.module.scss";

import foods from "../../mocks/foods.json";
import FoodCard from "../../components/FoodCard/FoodCard";
import OrderFilter from "./filter/OrderFilter";
import Toast from "../../components/toast/Toast";
import { AppContext } from "../../contexts/AppProvider/AppProvider";
import Modal from "../../components/modal/Modal";

function OrderPage() {
  const { toastData, setToastData, modalData } = useContext(AppContext);

  console.log(modalData);

  return (
    <div className={styles["container"]}>
      {/* global app modal */}
      <Modal
        children={modalData.children}
        open={modalData.open}
        handleClose={() => {}}
        centered={true}
      />
      {/* global app toast */}
      <Toast
        open={toastData.open}
        handleClose={() => setToastData({ open: false, text: "" })}
        text={toastData.text}
        timeout={1000}
      />
      <OrderFilter className={styles["filter"]} />
      {foods.map((food) => (
        <div
          key={food.id}
          className={`${styles["card"]} xs-col-6 sm-col-4 md-col-3`}
        >
          <div>
            <FoodCard {...food} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderPage;
