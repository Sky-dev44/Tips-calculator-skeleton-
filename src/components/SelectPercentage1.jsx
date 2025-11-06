function SelectPercentage({ percentage1, onSetPercentage1 }) {
  return (
    <div>
      <select
        value={percentage1}
        onChange={(e) => onSetPercentage1(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5"> It was okay (5%)</option>
        <option value="10"> It was good (10%)</option>
        <option value="20">Absolute Amazing (20%)</option>
      </select>
    </div>
  );
}

export default SelectPercentage;
