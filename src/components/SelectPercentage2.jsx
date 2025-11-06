function SelectPercentage2({ percentage2, onSetPercentage2 }) {
  return (
    <div>
      <select
        value={percentage2}
        onChange={(e) => onSetPercentage2(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5"> It was okay (5%)</option>
        <option value="10"> It was good (10%)</option>
        <option value="20">Absolute Amazing (20%)</option>
      </select>
    </div>
  );
}

export default SelectPercentage2;
