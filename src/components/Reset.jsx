function Reset({ handleReset, bill }) {
  return <div>{bill > 0 && <button onClick={handleReset}>Reset</button>}</div>;
}

export default Reset;
