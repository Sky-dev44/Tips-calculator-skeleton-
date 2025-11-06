function Bill({ bill, onSetBill }) {
  return (
    <div>
      <p>How much was the bill ?</p>
      <input
        value={bill}
        placeholder="Write down the bill"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

export default Bill;
