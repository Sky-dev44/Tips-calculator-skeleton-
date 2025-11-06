function Output({ bill, tip }) {
  return (
    <div>
      {bill > 0 && (
        <p>
          You pay ${bill + tip} (${bill} + ${tip} tip)
        </p>
      )}
    </div>
  );
}

export default Output;
