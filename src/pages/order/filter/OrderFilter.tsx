import React, { useContext } from "react";

import styles from "./styles.module.scss";
import Tag from "../../../components/tag/Tag";

import groups from "../../../mocks/groups.json";
import { AppContext } from "../../../contexts/AppProvider/AppProvider";

interface OrderFilterTypes {
  className?: string;
}

const OrderFilter: React.FC<OrderFilterTypes> = ({ className }) => {
  const { groupsIDSelected, setGroupsIDSelected } = useContext(AppContext);

  return (
    <div className={`${styles["wrapper"]} ${className}`}>
      <div className={styles["block"]}>
        <span className={styles["title"]}>Phân loại</span>
        <div className={styles["filter-container"]}>
          {groups.map((group) => (
            <Tag
              key={group.id}
              text={group.name}
              variant={groupsIDSelected.includes(group.id) && "primary"}
              onClick={() => {
                let newGroups = null;
                if (groupsIDSelected.includes(group.id)) {
                  newGroups = groupsIDSelected.filter(
                    (groupID: number) => groupID !== group.id
                  );
                } else {
                  newGroups = [...groupsIDSelected, group.id];
                }

                setGroupsIDSelected(newGroups);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderFilter;
