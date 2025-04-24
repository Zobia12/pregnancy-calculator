const Results = ({ result }) => {
  if (!result) return null;

  return (
    <div className="bg-pink-50 p-6 rounded-2xl shadow-lg flex-1">
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
  );
};

export default Results;
