const LMPInput = ({ lmpDate, setLmpDate, setCycleLength, cycleLength }) => {
  const handleChange = (e) => {
    const newCycle = Number(e.target.value);
    // Accept only values from 0 to 44, otherwise fallback to 28
    setCycleLength(newCycle >= 0 && newCycle <= 44 ? newCycle : 28);
  };

  return (
    <>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        First Day of Last Menstrual Period (LMP):
      </label>
      <input
        type="date"
        value={lmpDate}
        onChange={(e) => setLmpDate(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="cycleLength" className="font-semibold">
          Average Length of Cycles
        </label>
        <input
          id="cycleLength"
          type="number"
          value={cycleLength}
          onChange={handleChange}
          min="0"
          max="44"
          className="p-2 border rounded-lg"
        />
        <p className="text-sm text-gray-500">
          From first day of your period to the first day of next. Ranges from 22 to 44. Default = 28.
        </p>
      </div>
    </>
  );
};

export default LMPInput;
