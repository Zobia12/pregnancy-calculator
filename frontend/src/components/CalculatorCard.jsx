import { useState } from "react";
import Header from "./Header";
import Results from "./Results";
import axios from "axios";

const CalculatorCard = () => {
  const [days, setDays] = useState(0);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const newDays = Number(e.target.value);
    if (newDays >= 0 && newDays <= 280) {
      setDays(newDays);
    }
    else{
      setDays(280);
    }
  };
  const handleCalculate = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5172/calculate', {
      // const response = await axios.post('http://204.48.22.252:5172/calculate', {

        days_since_conception: Number(days),
      });
  
      if (!response.status===200) {
        throw new Error('Network response was not ok');
      }
      setResult(response.data);
    } catch (err) {
      console.error("Error calling backend:", err);
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
      <div className="flex-1">
        <Header />
        <div className="mb-6">
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
            Enter the number of days since conception.
          </p>
        </div>
        <button
          onClick={handleCalculate}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full md:w-1/2"
        >
          Calculate
        </button>
      </div>

      <Results result={result} />
    </div>
  );
};

export default CalculatorCard;
