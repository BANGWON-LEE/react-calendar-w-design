import React, { useContext } from "react";
import RangeCalendar from "../RangeCalendar";
import DateInputMain from "../input/DateInputMain";
import { RangeBtnContextType } from "../../type/contextType";
import { openModalContext } from "../../context/input-btn/OpenModalProvider";

const Range = () => {
  const { openModal, setOpenModal } =
    useContext<RangeBtnContextType>(openModalContext);

  return (
    <>
      {openModal === true && <RangeCalendar />}
      <DateInputMain />
    </>
  );
};

export default Range;
