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
  const [embedCode, setEmbedCode] = useState(null);

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
      className={`w-full p-4 ${embedMode ? 'flex flex-col md:flex-row gap-12 max-w-5xl mx-auto' : 'flex flex-col md:flex-row gap-12 max-w-6xl mx-auto'}`}
    >
      {!embedMode && (
        <div className="md:w-1/3">
          <div className="rounded-xl shadow-lg p-6 bg-white">
            <h2 className="text-2xl font-bold text-black">Customize Calculator Colors</h2>
  
            <div className="mt-4">
              <label className="block font-medium mb-1 text-black">Input Text Color</label>
              <div className="flex items-center gap-4 mb-4">
                <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                <input type="text" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
              </div>
            </div>
  
            <div className="mt-4">
              <label className="block font-medium mb-1 text-black">Headings Text Color</label>
              <div className="flex items-center gap-4 mb-4">
                <input type="color" value={hTextColor} onChange={(e) => setHTextColor(e.target.value)} />
                <input type="text" value={hTextColor} onChange={(e) => setHTextColor(e.target.value)} />
              </div>
            </div>
  
            <div className="mt-4">
              <label className="block font-medium mb-1 text-black">Background Color</label>
              <div className="flex items-center gap-4 mb-4">
                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
                <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
              </div>
            </div>
  
            <div className="mt-4">
              <label className="block font-medium mb-1 text-black">Result Background Color</label>
              <div className="flex items-center gap-4 mb-4">
                <input type="color" value={resultBgColor} onChange={(e) => setResultBgColor(e.target.value)} />
                <input type="text" value={resultBgColor} onChange={(e) => setResultBgColor(e.target.value)} />
              </div>
            </div>
  
            <div className="mt-4">
              <label className="block font-medium mb-1 text-black">Button Color</label>
              <div className="flex items-center gap-4 mb-4">
                <input type="color" value={btnColor} onChange={(e) => setBtnColor(e.target.value)} />
                <input type="text" value={btnColor} onChange={(e) => setBtnColor(e.target.value)} />
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

                  setEmbedCode(iframeCode);
                  navigator.clipboard.writeText(iframeCode);
                }}
                className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
              >
                Generate Embed Code
            </button>
            {embedCode && (
                <div className="mt-4 bg-gray-100 p-4 rounded-lg border border-gray-300">
                  <p className="text-sm font-medium text-gray-800 mb-2">Embed Code:</p>
                  <textarea
                    readOnly
                    className="w-full text-xs p-2 border rounded bg-white text-gray-800"
                    rows={5}
                    value={embedCode}
                    onClick={(e) => e.target.select()}
                  />
                  <p className="text-green-600 text-sm mt-2">Embed code copied to clipboard!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
  
      {/* Right Column - Live Calculator */}
      <div className={`${embedMode ? 'flex-1' : 'md:w-2/3'}`}>
        <div
          className="rounded-xl shadow-lg p-6"
          style={{ color: finalTextColor, backgroundColor: finalBgColor }}
        >
          <Header hTextColor={finalHTextColor} />
          <div className="mb-6">
            <LMPInput
              lmpDate={lmpDate}
              setLmpDate={setLmpDate}
              setCycleLength={setCycleLength}
              cycleLength={cycleLength}
              hTextColor={finalHTextColor}
            />
            <br />
            <button
              onClick={calculateDueDateFromLMP}
              className="text-white font-bold py-2 px-4 rounded w-full md:w-1/2 mb-4"
              style={{ backgroundColor: finalBtnColor }}
            >
              Get Due Date
            </button>
          </div>
          <hr className="my-4" />
          <Results
            apiResult={apiResult}
            dueDate={dueDate}
            textColor={finalTextColor}
            resultBgColor={finalResultBgColor}
            hTextColor={finalHTextColor}
          />
        </div>
      </div>
    </div>
  );
  
};

export default CalculatorCard;
