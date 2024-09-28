import React, { useContext } from "react";
import InputBtnUI from "../../view/InputBtnUI";
import { openModalContext } from "../../context/input-btn/OpenModalProvider";
import { RangeBtnContextType } from "../../type/contextType";

const InputBtn = () => {
  const { openModal, setOpenModal } =
    useContext<RangeBtnContextType>(openModalContext);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return <InputBtnUI handleOpenModal={handleOpenModal} />;
};

export default InputBtn;
