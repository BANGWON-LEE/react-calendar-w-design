import React, { useContext } from "react";
import { DateRangeContextType } from "../../type/contextType";
// import {DateRange}
import { DateRangeContext } from "../../context/DateRangeProvider";
import { formatDate } from "../../util";

const InputText = () => {
  const { dateRange } = useContext<DateRangeContextType>(DateRangeContext);

  const startDate = formatDate(new Date(dateRange.start));
  const endDate = formatDate(new Date(dateRange.end));

  return (
    <input
      type="text"
      placeholder={`${startDate} ~ ${endDate}`}
      readOnly
      className="calendar_input"
    />
  );
};

export default InputText;
