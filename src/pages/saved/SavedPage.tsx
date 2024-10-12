import React from "react";

import styles from "./styles.module.scss";

import foods from "../../mocks/foods.json";
import FoodItem from "../../components/FoodItem/FoodItem";

const SavedPage = () => {
  return (
    <div className={styles["wrapper"]}>
      {/* foods item container */}
      <div className={styles["foods-container"]}>
        {/* foodd item */}
        {foods.map((food) => (
          <div key={food.id} className={styles["food-item"]}>
            <FoodItem {...food} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPage;
