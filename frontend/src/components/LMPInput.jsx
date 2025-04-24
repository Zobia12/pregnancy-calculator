const LMPInput = ({ lmpDate, setLmpDate }) => (
    <>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Last Menstrual Period (LMP):
      </label>
      <input
        type="date"
        value={lmpDate}
        onChange={(e) => setLmpDate(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />
    </>
  );
  
  export default LMPInput;
  