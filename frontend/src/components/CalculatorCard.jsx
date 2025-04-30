import { useState } from "react";
import Header from "./Header";
import Results from "./Results";
import LMPInput from "./LMPInput";
import axios from "axios";

const CalculatorCard = () => {
  const [days, setDays] = useState(0);
  const [apiResult, setApiResult] = useState(null); // For API response
  const [lmpDate, setLmpDate] = useState("");
  const [dueDate, setDueDate] = useState(null);     // For LMP-based date
  const [cycleLength, setCycleLength] = useState(28);

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
  
  return (
    <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
      <div className="flex-1">
        <Header />

        <div className="mb-6">
          <LMPInput lmpDate={lmpDate} setLmpDate={setLmpDate} setCycleLength={setCycleLength} cycleLength={cycleLength}/>
          <br />
          <button
            onClick={calculateDueDateFromLMP}
            className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded w-full md:w-1/2 mb-4"
          >
            Get Due Date from LMP
          </button>
        </div>

        <hr className="my-4" />
       
      </div>
      <Results apiResult={apiResult} dueDate={dueDate} />
    </div>

    
  );
   {
    
  // const handleChange = (e) => {
  //   const newDays = Number(e.target.value);
  //   setDays(newDays >= 0 && newDays <= 280 ? newDays : 280);
  // };
    
     // const handleCalculate = async () => {
  //   try {
  //     const response = await axios.post("http://204.48.22.252:5172/calculate", {
  //       days_since_conception: Number(days),
  //     });

  //     if (response.status !== 200) {
  //       throw new Error("Network response was not ok");
  //     }

  //     setApiResult(response.data);
  //     console.log("setApiResult",response.data)
  //   } catch (err) {
  //     console.error("Error calling backend:", err);
  //   }
  // };
    
    /* <div className="mb-6">
          <label className="font-semibold text-lg text-gray-800 block mb-2">
            Days Since Conception
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="280"
              value={days}
              onChange={handleChange}
              className="w-full accent-pink-500"
            />
            <input
              type="number"
              value={days}
              min="0"
              max="280"
              onChange={handleChange}
              className="w-20 px-2 py-1 border rounded-md"
            />
          </div>
          <p className="text-gray-500 mt-1 text-sm">
            Or enter the number of days since conception.
          </p>
        </div>

        <button
          onClick={handleCalculate}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full md:w-1/2"
        >
          Calculate
        </button> */}
};

export default CalculatorCard;
