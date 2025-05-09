import { useSearchParams } from "react-router-dom";
import CalculatorCard from "./CalculatorCard";

const EmbedCalculator = () => {
    const [params] = useSearchParams();
    const textColor = params.get("textColor") || "#000000";
    const hTextColor = params.get("hTextColor") || "#000000";
    const resultBgColor = params.get("resultBgColor") || "#f0fdf4";
    const bgColor = params.get("bgColor") || "#ffffff";
    const btnColor = params.get("btnColor") || "#16a34a";
  
    return (
      <div className="min-h-screen p-4">
        <br />
        <br />
        <CalculatorCard
          embedMode={true}
          textColor={textColor}
          hTextColor={hTextColor}
          bgColor={bgColor}
          btnColor={btnColor}
          resultBgColor={resultBgColor}
        />
      </div>
    );
  };  

export default EmbedCalculator;
