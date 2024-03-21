"use client";

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import tr from "dayjs/locale/tr";
import dayjs from "dayjs";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
dayjs.locale(tr);

const CustomDatepicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      i18n="tr"
      containerClassName="relative w-96 border border-slate-300 w-full rounded-lg focus:outline-none focus:ring-0 "
      inputClassName="w-full focus:outline-none focus:ring-0  transition-all duration-300 py-2.5 pl-8 pr-14 w-full border-gray-300 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-transparent disabled:cursor-not-allowed focus:outline-none focus:border-0 "
      value={value}
      onChange={handleValueChange}
      displayFormat="DD MMMM dddd"
      separator=" - "
      toggleClassName="absolute left-0 top-0 h-full flex items-center justify-center"
      toggleIcon={() => <CalendarDaysIcon className="w-6 h-6 text-slate-600" />}
    />
  );
};

export default CustomDatepicker;
