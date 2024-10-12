import React, { createContext, ReactNode, useState } from "react";
import Toast from "../../components/toast/Toast";

// define type of context provider value
interface AppProviderType {
  currentPage: React.FC | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<React.FC | null>>;
  currentMenu: number;
  setCurrentMenu: React.Dispatch<React.SetStateAction<number>>;
  groupsIDSelected: Array<number>;
  setGroupsIDSelected: React.Dispatch<React.SetStateAction<Array<number>>>;
  toastText: string;
  setToastText: React.Dispatch<React.SetStateAction<string>>;
  openToast: boolean;
  setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
}

interface toastData {
  open: boolean;
  text: string;
}

interface modalData {
  open: boolean;
  children: any;
}

// create context
export const AppContext = createContext<AppProviderType | any>(null);
// create context provider
const AppProvider: React.FC<{ chidlren: ReactNode }> = ({ chidlren }) => {
  const [currentPage, setCurrentPage] = useState<React.FC | null>(null);
  const [currentMenu, setCurrentMenu] = useState<number | null>(0);
  const [groupsIDSelected, setGroupsIDSelected] = useState<Array<number>>([]);

  const [toastData, setToastData] = useState<toastData>({
    open: false,
    text: "",
  });

  const [modalData, setModalData] = useState<modalData>({
    open: false,
    children: <></>,
  });

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        currentMenu,
        setCurrentMenu,
        groupsIDSelected,
        setGroupsIDSelected,
        toastData,
        setToastData,
        modalData,
        setModalData,
      }}
    >
      {chidlren}
    </AppContext.Provider>
  );
};

export default AppProvider;
