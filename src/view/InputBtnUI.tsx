import React from "react";
import CalendarIcon from "../assets/calendar_events_schedule.svg";
import { OpenModalType } from "../type";

const InputBtnUI = (props: OpenModalType) => {
  const { handleOpenModal } = props;

  return (
    <div className="calendar_btn_block">
      <button className="calendar_btn" onClick={handleOpenModal}>
        <img className="calendar_btn_img" src={CalendarIcon} />
      </button>
    </div>
  );
};

export default InputBtnUI;
