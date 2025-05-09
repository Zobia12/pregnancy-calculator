import { useState } from "react";
import Header from "./Header";
import Results from "./Results";
import LMPInput from "./LMPInput";
import axios from "axios";


const setupTheme = ({ embedMode = false, textColor: embedTextColor, bgColor: embedBgColor, btnColor: embedBtnColor }) => {
  const [days, setDays] = useState(0);
  const [apiResult, setApiResult] = useState(null); 
  const [lmpDate, setLmpDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(null);
  const [cycleLength, setCycleLength] = useState(28);

  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#f0fdf4");
  const [btnColor, setBtnColor] = useState("#16a34a");

  const calculateDueDateFromLMP = () => {
    if (!lmpDate) return;
    const lmp = new Date(lmpDate);
    const cycle = cycleLength ? Number(cycleLength) : 28;
    const adjustment = cycle - 28;

    lmp.setDate(lmp.getDate() + 280 + adjustment);
    const formattedDate = lmp.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setDueDate(formattedDate);
  };

  const finalTextColor = embedMode ? embedTextColor : textColor;
  const finalBgColor = embedMode ? embedBgColor : bgColor;
  const finalBtnColor = embedMode ? embedBtnColor : btnColor;

  return (
    <div
      className="flex flex-col md:flex-row gap-12 w-full max-w-5xl p-6 rounded-lg shadow-lg"
      style={{color: finalTextColor,  backgroundColor: finalBgColor }}
    >
      <div className="flex-1">        
        <Header />
        <div className="mb-6">
          <LMPInput lmpDate={lmpDate} setLmpDate={setLmpDate} setCycleLength={setCycleLength} cycleLength={cycleLength} />
          <br />
          <button
            onClick={calculateDueDateFromLMP}
            className="text-white font-bold py-2 px-4 rounded w-full md:w-1/2 mb-4"
            style={{ backgroundColor: finalBtnColor }}
          >
            Get Due Date
          </button>
        </div>
      </div>

      <Results apiResult={apiResult} dueDate={dueDate} textColor={textColor}/>
    </div>
  );
};

export default setupTheme;