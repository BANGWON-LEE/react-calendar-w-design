import React, { createContext, useState } from "react";
import { RangeBtnContextType } from "../../type/contextType";

// 1. Context 생성

export const openModalContext = createContext<RangeBtnContextType>({
  openModal: false,
  setOpenModal: () => {},
});

// 2. Provider 컴포넌트
const OpenModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <openModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </openModalContext.Provider>
  );
};

export default OpenModalProvider;
