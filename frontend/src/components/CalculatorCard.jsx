import { useState } from "react";
import Header from "./Header";
import Results from "./Results";
import LMPInput from "./LMPInput";
import axios from "axios";
import { ChromePicker } from 'react-color';
const CalculatorCard = ({ embedMode = false, hTextColor:embedHTextColor, textColor: embedTextColor,resultBgColor:embedResultBgColor,
  bgColor: embedBgColor, btnColor: embedBtnColor }) => {
  const [days, setDays] = useState(0);
  const [apiResult, setApiResult] = useState(null); 
  const [lmpDate, setLmpDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(null);
  const [cycleLength, setCycleLength] = useState(28);
  const [textColor, setTextColor] = useState("#3b4f42");
  const [hTextColor, setHTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#e1e5e2");
  const [resultBgColor, setResultBgColor] = useState("#f0fdf4");
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
  const finalHTextColor = embedMode ? embedHTextColor : hTextColor;
  const finalBgColor = embedMode ? embedBgColor : bgColor;
  const finalResultBgColor = embedMode ? embedResultBgColor : resultBgColor;
  const finalBtnColor = embedMode ? embedBtnColor : btnColor;

  return (
    <div
    className="flex flex-col md:flex-row gap-12 w-full max-w-6xl p-6 mx-auto"    
  >
    {/* Left Column - Embed Config */}
    <div className="md:w-1/3">
      <div className="rounded-xl shadow-lg p-6 bg-white">
        <h2 className="text-2xl font-bold text-black">Customize Calculator Colors</h2>
    
        {/* <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Input Text Color</h2>
          <ChromePicker
            color={textColor}
            onChange={(updatedColor) => {
              setTextColor(updatedColor.hex);
            }}
            disableAlpha
          />
        </div> */}
        <div className="mt-4">
          <label className="block font-medium mb-1 text-black">Input Text Color</label>
          <div className="flex items-center gap-4 mb-4">
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
          <input
            type="text"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
          </div>      
        </div>
        <div className="mt-4">
          <label className="block font-medium mb-1 text-black">Headings Text Color</label>
          <div className="flex items-center gap-4 mb-4">
          <input
            type="color"
            value={hTextColor}
            onChange={(e) => setHTextColor(e.target.value)}
          />
           <input
            type="text"
            value={hTextColor}
            onChange={(e) => setHTextColor(e.target.value)}
          />
          </div>
        </div>
        <div className="mt-4">
          <label className="block font-medium mb-1 text-black">Background Color</label>
          <div className="flex items-center gap-4 mb-4">
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
           <input
            type="text"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
        </div>
        <div className="mt-4">
          <label className="block font-medium mb-1 text-black">Result Background Color</label>
          <div className="flex items-center gap-4 mb-4">
          <input
            type="color"
            value={resultBgColor}
            onChange={(e) => setResultBgColor(e.target.value)}
          />
           <input
            type="text"
            value={resultBgColor}
            onChange={(e) => setResultBgColor(e.target.value)}
          />
        </div>
        </div>
        <div className="mt-4">
          <label className="block font-medium mb-1 text-black">Button Color</label>
          <div className="flex items-center gap-4 mb-4">
          <input
            type="color"
            value={btnColor}
            onChange={(e) => setBtnColor(e.target.value)}
          />
           <input
            type="text"
            value={btnColor}
            onChange={(e) => setBtnColor(e.target.value)}
          />
        </div>
        </div>
  
        <div className="mt-6">
          <button
            onClick={() => {
              const iframeCode = `<iframe src="https://myapppcal.whitegloveppc.net/embed?textColor=${encodeURIComponent(
                textColor
              )}&hTextColor=${encodeURIComponent(hTextColor)}&bgColor=${encodeURIComponent(
                bgColor
              )}&resultBgColor=${encodeURIComponent(resultBgColor)}&btnColor=${encodeURIComponent(
                btnColor
              )}" width="100%" height="600" style="border:none;"></iframe>`;

              navigator.clipboard.writeText(iframeCode);  
              alert("Embed code copied to clipboard!");
            }}
            className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >
            Generate Embed Code 
          </button>
        </div>
      </div>
    </div>
  
    {/* Right Column - Live Calculator */}
    <div className="md:w-2/3">
      <div className="rounded-xl shadow-lg p-6" style={{ color: finalTextColor, backgroundColor: finalBgColor }}>
        <Header hTextColor={finalHTextColor} />
        <LMPInput lmpDate={lmpDate} setLmpDate={setLmpDate} setCycleLength={setCycleLength} cycleLength={cycleLength} hTextColor={finalHTextColor}/>
        <button
          onClick={calculateDueDateFromLMP}
          className="text-white font-bold py-2 px-4 rounded w-full md:w-1/2 mb-4"
          style={{ backgroundColor: finalBtnColor }}
        >
          Get Due Date
        </button>
  
        <Results apiResult={apiResult} dueDate={dueDate} textColor={finalTextColor} resultBgColor={finalResultBgColor} hTextColor={finalHTextColor}/>
      </div>
    </div>
  </div>
  
  );
};

export default CalculatorCard;
