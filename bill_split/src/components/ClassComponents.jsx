// import { Component } from "react";

// class BillSplitter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       billAmount: "",
//       customTip: "",
//       numberOfPeople: "",
//       tipPercentage: 0,
//       tipAmount: "",
//       totalBill: "",
//       eachPersonBill: "",
//     };
//   }

//   handleBillAmountChange = (event) => {
//     const billAmount = event.target.value;
//     this.setState({ billAmount }, this.updateGenerateButtonState);
//   };

//   handleCustomTipChange = (event) => {
//     const customTip = event.target.value;
//     this.setState({ customTip }, this.updateGenerateButtonState);
//   };

//   handleNumberOfPeopleChange = (event) => {
//     const numberOfPeople = event.target.value;
//     this.setState({ numberOfPeople }, this.updateGenerateButtonState);
//   };

//   handleTipButtonClick = (tipPercentage) => {
//     this.setState(
//       { tipPercentage, customTip: "" },
//       this.updateGenerateButtonState
//     );
//   };

//   handleGenerateBillClick = () => {
//     const { billAmount, numberOfPeople, tipPercentage } = this.state;

//     const tipAmount = (billAmount * tipPercentage) / 100;
//     const totalBill = parseFloat(billAmount) + tipAmount;
//     const eachPersonBill = totalBill / numberOfPeople;

//     this.setState({ tipAmount, totalBill, eachPersonBill });
//   };

//   handleResetClick = () => {
//     this.setState({
//       billAmount: "",
//       customTip: "",
//       numberOfPeople: "",
//       tipPercentage: 0,
//       tipAmount: "",
//       totalBill: "",
//       eachPersonBill: "",
//     });
//   };

//   updateGenerateButtonState = () => {
//     const { billAmount, numberOfPeople, customTip } = this.state;
//     const isGenerateButtonDisabled =
//       !billAmount || !numberOfPeople || (!customTip && customTip !== 0);
//     this.setState({ isGenerateButtonDisabled });
//   };

//   render() {
//     const {
//       billAmount,
//       customTip,
//       numberOfPeople,
//       tipAmount,
//       totalBill,
//       eachPersonBill,
//       isGenerateButtonDisabled,
//       tipPercentage,
//     } = this.state;

//     return (
//       <>
//         <div className="bill-input">
//           <p>Bill</p>
//           <div className="input-container">
//             <span>₹</span>
//             <input
//               type="number"
//               value={billAmount}
//               onChange={this.handleBillAmountChange}
//             />
//           </div>
//           <p>Select Tip</p>
//           <div className="tip-container">
//             {[5, 10, 15, 25, 50, 75].map((percentage) => (
//               <button
//                 key={percentage}
//                 className={`tip ${
//                   tipPercentage === percentage ? "selected" : ""
//                 }`}
//                 onClick={() => this.handleTipButtonClick(percentage)}
//               >
//                 {percentage}%
//               </button>
//             ))}
//           </div>
//           <input
//             className="custom-tip gray-input"
//             type="number"
//             placeholder="Custom Tip in Percentage"
//             value={customTip}
//             onChange={this.handleCustomTipChange}
//           />
//           <p>Number of People</p>
//           <input
//             className="number-of-people gray-input"
//             type="number"
//             placeholder="Number of people"
//             value={numberOfPeople}
//             onChange={this.handleNumberOfPeopleChange}
//           />
//           <button
//             className="generate-bill-btn"
//             disabled={isGenerateButtonDisabled}
//             onClick={this.handleGenerateBillClick}
//           >
//             Generate Bill
//           </button>
//         </div>
//         <div className="bill-output">
//           <p className="tip-amount">
//             Tip amount <span>₹{tipAmount}</span>
//           </p>
//           <p className="total">
//             Total <span>₹{totalBill}</span>
//           </p>
//           <p className="each-person-bill">
//             Each Person Bill <span>₹{eachPersonBill}</span>
//           </p>
//           <button className="reset-btn" onClick={this.handleResetClick}>
//             Reset
//           </button>
//         </div>
//       </>
//     );
//   }
// }

// export default BillSplitter;
