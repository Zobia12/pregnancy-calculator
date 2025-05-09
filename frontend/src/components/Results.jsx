const Results = ({ result, dueDate ,textColor, resultBgColor, hTextColor}) => {
  if (!result && !dueDate) return null;

  return (
    <div className="flex flex-col gap-6 flex-1"
    style={{color: textColor, background:resultBgColor}}>

      {/* Container for API-based result */}
      {/* {result && (
        <div className="bg-pink-50 p-6 rounded-2xl shadow-lg">
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-800">Weeks Pregnant</p>
            <p className="text-right font-medium">{result.weeks_pregnant} Week(s)</p>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-gray-800 text-lg">Estimated Due Date</p>
            <p className="text-4xl font-bold text-pink-600">{result.days_to_due}</p>
            <p className="text-sm text-gray-600">Days to Due Date</p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-lg">Prepare for Your Baby's Arrival</p>
            <p className="text-sm text-gray-600 mt-1">
              Make every step of your pregnancy smoother. Plan ahead, stay informed, and feel supported all the way to your due date.
            </p>
          </div>

          <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-pink-600">
            Get Support
          </button>
        </div>
      )} */}

      {/* Container for LMP-based result */}

       {dueDate && (
        <div className=" p-6 shadow-lg rounded" style={{ background:resultBgColor}}>
          <div className="mb-4">
            <p className="font-semibold text-lg" style={{ color: hTextColor}}>Estimated LMP-Based Due Date:</p>
            <p className="text-2xl font-bold">{dueDate}</p>
          </div>



          <div className="mt-4 bg-yellow-100 p-4 rounded">
          <h3 className="text-lg font-bold mb-2 text-gray-800">What Now?</h3>
          <ul className="list-disc ml-5 text-base text-gray-800">
            <li>Consider your options with a pregnancy or pre-abortion screening appointment</li>
            <li>Planning to parent? Find support here</li>
          </ul>
        </div>
          {/* // <div className="mb-6">
          //   <p className="text-sm text-gray-600">
          //     This is your estimated due date based on your last menstrual period.
          //     Please consult your doctor for a full evaluation.
          //   </p>
          // </div>

          // <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded w-full hover:bg-green-600">
          //   View Timeline
          // </button> */}
        </div>
      )} 
      
    </div>
  );
};

export default Results;
