import { useState } from "react";

import Bill from "./Bill";
import Reset from "./Reset";
import Output from "./Output";
import Percentage from "./Percentage";

function TipsCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  return (
    <div>
      <p>Tips-Calculator</p>
      <Bill bill={bill} onSetBill={setBill} />
      <Percentage
        percentage1={percentage1}
        percentage2={percentage2}
        setPercentage1={setPercentage1}
        setPercentage2={setPercentage2}
      />
      <Output bill={bill} tip={tip} />
      <Reset handleReset={handleReset} bill={bill} />
    </div>
  );
}

export default TipsCalculator;
