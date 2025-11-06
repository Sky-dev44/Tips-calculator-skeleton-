import SelectPercentage1 from "./SelectPercentage1";
import SelectPercentage2 from "./SelectPercentage2";

function Percentage({
  percentage1,
  percentage2,
  setPercentage1,
  setPercentage2,
}) {
  return (
    <div>
      <p>How did you like the service ?</p>
      <SelectPercentage1
        percentage1={percentage1}
        onSetPercentage1={setPercentage1}
      />
      <p>How did your friend like the service ?</p>
      <SelectPercentage2
        percentage2={percentage2}
        onSetPercentage2={setPercentage2}
      />
    </div>
  );
}

export default Percentage;
