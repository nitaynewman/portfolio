import { useState } from "react";
import "./calc.css";

export default function Tip() {
  return (
    <div className="Tip">
      <TipCalculator />
      {/* <Questions /> */}
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [pers1, setPers1] = useState(0);
  const [pers2, setPers2] = useState(0);

  const Tip = bill * ((pers1 + pers2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPers1(0);
    setPers2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage pers={pers1} onSelect={setPers1}>
        How did u like the servivce?
      </SelectPercentage>
      <SelectPercentage pers={pers2} onSelect={setPers2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={Tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How nuch was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, pers, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={pers} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was ok (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">amazing (20%)</option>
      </select>
    </div>
  );
}

function OutPut({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

// function Questions() {
//   const [amount, setAmount] = useState(0);
//   const [persent, setPersent] = useState(null);

//   return (
//     <div>
//       <h2>How nuch was the bill?</h2>
//       <input type="text" value={amount} />
//       <h2>How did you like the service? </h2>
//       <select value={persent}>
//         <option value="input">i didnt like it (0%)</option>
//         <option value="input">it was ok (10%)</option>
//         <option value="input">it was vary good (15%)</option>
//         <option value="input">it was amazing (20%)</option>
//       </select>
//       <h2>How did your friend like the service?</h2>
//       <select value={persent}>
//         <option value="input">i didnt like it (0%)</option>
//         <option value="input">it was ok (10%)</option>
//         <option value="input">it was vary good (15%)</option>
//         <option value="input">it was amazing (20%)</option>
//       </select>
//     </div>
//   );
// }
