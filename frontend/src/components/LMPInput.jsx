import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div className="w-full max-w-full mb-4">
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="w-full max-w-full flex items-center justify-between px-4 py-2 border rounded-lg text-left"
    >
      <span>{value || "Select a date"}</span>
      <FaRegCalendarAlt className="text-gray-500 ml-2" />
    </button>
  </div>
));

const LMPInput = ({ lmpDate, setLmpDate, setCycleLength, cycleLength , hTextColor}) => {
  const handleChange = (e) => {
    const newCycle = Number(e.target.value);
    setCycleLength(newCycle >= 0 && newCycle <= 44 ? newCycle : 28);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-2" style={{ color: hTextColor }}>
        First Day of Last Menstrual Period (LMP):
      </label>
      <div className="w-full mb-4">
        <DatePicker
          selected={new Date(lmpDate)}
          onChange={(date) => setLmpDate(date.toISOString().split("T")[0])}
          dateFormat="dd-MMM-yyyy"
          customInput={<CustomInput />}
          className="w-full"  
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cycleLength" className="font-semibold " style={{ color: hTextColor }}>
          Average Length of Cycles
        </label>
        <input
          id="cycleLength"
          type="number"
          value={cycleLength}
          onChange={handleChange}
          min="0"
          max="44"
          className="w-full px-4 py-2 border rounded-lg mb-2"  // Ensure input has w-full and padding
        />
        <p className="text-sm" style={{ color: hTextColor }}>
          From first day of your period to the first day of next. Ranges from 22 to 44. Default = 28.
        </p>
      </div>
    </div>
  );
};

export default LMPInput;
