import { useSearchParams } from "react-router-dom";
import CalculatorCard from "./CalculatorCard";

const EmbedCalculator = () => {
  const [params] = useSearchParams();
  const textColor = params.get("textColor") || "#000000";
  const bgColor = params.get("bgColor") || "#ffffff";
  const btnColor = params.get("btnColor") || "#16a34a"; // default green-600

  return (
    <div className="min-h-screen flex justify-center items-center" style={{ backgroundColor: bgColor }}>
      <div className="w-full max-w-xl" style={{ color: textColor }}>
        <CalculatorCard
          embedMode={true}
          textColor={textColor}
          bgColor={bgColor}
          btnColor={btnColor}
        />
      </div>
    </div>
  );
};

export default EmbedCalculator;
