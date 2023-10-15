import "./BillSplit.css";

// const BillSplit = () => {
//   const [inDataArr, setinDataArr] = useState([]);
//   const [inData, setinData] = useState({
//     number: "",
//     customtip: "",
//     nopeople: "",
//   });

//   const changehandle = (e) => {
//     setinData({
//       ...inData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   let { number, customtip, nopeople } = inData;
//   const billgenerate = () => {
//     setinDataArr([...inDataArr, { number, customtip, nopeople }]);
//     console.log(inDataArr);
//     console.log(inData);
//   };

//   return (
//     <>
//       <main>
//         {inDataArr}
//         <div className="bill-input">
//           <p>Bill</p>
//           <div className="input-container">
//             <span>₹</span>
//             <input
//               id="bill-amount"
//               type="number"
//               name="number"
//               value={inData.number}
//               onChange={changehandle}
//             />
//           </div>
//           <p>Select Tip</p>
//           <div className="tip-container disabled">
//             <button className="tip">5%</button>
//             <button className="tip">10%</button>
//             <button className="tip">15%</button>
//             <button className="tip">25%</button>
//             <button className="tip">50%</button>
//             <button className="tip">75%</button>
//           </div>
//           <input
//             className="custom-tip gray-input"
//             type="number"
//             placeholder="Custom Tip in Percentage"
//             name="customtip"
//             value={inData.customtip}
//             onChange={changehandle}
//             // disabled
//           />
//           <p>Number of People</p>
//           <input
//             className="number-of-people gray-input"
//             type="number"
//             placeholder="Number of people"
//             name="nopeople"
//             value={inData.nopeople}
//             onChange={changehandle}
//             // disabled
//           />
//           <button className="generate-bill-btn" onClick={billgenerate}>
//             Generate Bill
//           </button>
//         </div>
//         <div className="bill-output">
//           <p className="tip-amount">
//             Tip amount <span>24.15</span>
//           </p>
//           <p className="total">
//             Total <span>24.15</span>
//           </p>
//           <p className="each-person-bill">
//             Each Person Bill <span>24.15</span>
//           </p>
//           <button className="reset-btn" disabled>
//             Reset
//           </button>
//         </div>
//       </main>
//       {/* {billAmount}
//       {customtip}
//       {nopeople} */}
//     </>
//   );
// };

// export default BillSplit;

import { useState } from "react";

const BillSplitter = () => {
  const [billAmount, setBillAmount] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState("");
  const [totalBill, setTotalBill] = useState("");
  const [eachPersonBill, setEachPersonBill] = useState("");
  const [isGenerateButtonDisabled, setIsGenerateButtonDisabled] =
    useState(true);

  const handleBillAmountChange = (event) => {
    setBillAmount(event.target.value);
    updateGenerateButtonState();
  };

  const handleCustomTipChange = (event) => {
    setCustomTip(event.target.value);
    updateGenerateButtonState();
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
    updateGenerateButtonState();
  };

  const handleTipButtonClick = (percentage) => {
    setTipPercentage(percentage);
    setCustomTip("");
    updateGenerateButtonState();
  };

  const handleGenerateBillClick = () => {
    const billAmountValue = parseFloat(billAmount);
    const numberOfPeopleValue = parseFloat(numberOfPeople);

    const tipAmountValue = (billAmountValue * tipPercentage) / 100;
    const totalBillValue = billAmountValue + tipAmountValue;
    const eachPersonBillValue = totalBillValue / numberOfPeopleValue;

    setTipAmount(tipAmountValue.toFixed(2));
    setTotalBill(totalBillValue.toFixed(2));
    setEachPersonBill(eachPersonBillValue.toFixed(2));
  };

  const handleResetClick = () => {
    setBillAmount("");
    setCustomTip("");
    setNumberOfPeople("");
    setTipPercentage(0);
    setTipAmount("");
    setTotalBill("");
    setEachPersonBill("");
    setIsGenerateButtonDisabled(true);
  };

  const updateGenerateButtonState = () => {
    const isDisabled =
      !billAmount || !numberOfPeople || (!customTip && customTip !== "0");
    setIsGenerateButtonDisabled(isDisabled);
  };

  return (
    <main>
      <div className="bill-input">
        <p>Bill</p>
        <div className="input-container">
          <span>₹</span>
          <input
            type="number"
            value={billAmount}
            onChange={handleBillAmountChange}
          />
        </div>
        <p>Select Tip</p>
        <div className="tip-container">
          {[5, 10, 15, 25, 50, 75].map((percentage) => (
            <button
              key={percentage}
              className={`tip ${
                tipPercentage === percentage ? "selected" : ""
              }`}
              onClick={() => handleTipButtonClick(percentage)}
            >
              {percentage}%
            </button>
          ))}
        </div>
        <input
          className="custom-tip gray-input"
          type="number"
          placeholder="Custom Tip in Percentage"
          value={customTip}
          onChange={handleCustomTipChange}
        />
        <p>Number of People</p>
        <input
          className="number-of-people gray-input"
          type="number"
          placeholder="Number of people"
          value={numberOfPeople}
          onChange={handleNumberOfPeopleChange}
        />
        <button
          className="generate-bill-btn"
          disabled={isGenerateButtonDisabled}
          onClick={handleGenerateBillClick}
        >
          Generate Bill
        </button>
      </div>
      <div className="bill-output">
        <p className="tip-amount">
          Tip amount <span>₹{tipAmount}</span>
        </p>
        <p className="total">
          Total <span>₹{totalBill}</span>
        </p>
        <p className="each-person-bill">
          Each Person Bill <span>₹{eachPersonBill}</span>
        </p>
        <button className="reset-btn" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </main>
  );
};

export default BillSplitter;
