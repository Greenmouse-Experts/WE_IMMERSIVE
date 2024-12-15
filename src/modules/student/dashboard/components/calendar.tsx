import { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay(); // Sunday = 0, Monday = 1, etc.
  };

  const prevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const renderDays = () => {
    const days = [];
    const totalDays = getDaysInMonth(currentDate);
    const startDay = firstDayOfMonth(currentDate);

    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < (startDay === 0 ? 6 : startDay - 1); i++) {
      days.push(
        <div key={`empty-${i}`} className="text-transparent">
          00
        </div>
      );
    }

    // Add days of the month
    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <div
          key={i}
          className={`flex items-center justify-center w-10 h-10 rounded-full ${
            i === 11
              ? "bg-blue-500 text-white"
              : i === 24
              ? "bg-[rgba(253,201,105,0.2)]"
              : "text-gray-700"
          }`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full mx-auto p-2 bg-white rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex w-auto">
          <h2 className="text-lg font-bold text-gray-900">
            {currentDate.toLocaleString("default", { month: "long" })},{" "}
            {currentDate.getFullYear()}
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="text-gray-700 bg-white shadow-lg px-3 py-3 rounded-full hover:text-black"
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 5.99995H1"
                stroke="#1B1D21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.2 10.2L1 6.00005L5.2 1.80005"
                stroke="#1B1D21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextMonth}
            className="text-gray-700 bg-white shadow-lg px-3 py-3 rounded-full hover:text-black"
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.99995H13"
                stroke="#1B1D21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.8 10.2L13 6.00005L8.8 1.80005"
                stroke="#1B1D21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 text-center text-[rgba(54,73,249,1)] font-semibold">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-center">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
