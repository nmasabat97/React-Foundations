import React from 'react'

function InputBox({
  label,
  amount, //amount to be changed
  onAmountChng, //the converted amt
  onCurrChng, //on switching the currency
  currOptions = [], //available currencies for change
  selCurrency = "usd", //the currency selected by user
  amtDisable = false, // 
  currDisable = false,
  className = ""
}) {
  //remember to mention Key in Map functions because if not, it will affect the performance.
  return (
    <div>
      <label>{label}</label>
      <input type="number" placeholder="Amount" disabled={amtDisable} value={amount}
        onChange={(e) => onAmountChng && onAmountChng(Number(e.target.value))}
      />
      <select value={selCurrency}
        onChange={(e) => onCurrChng && onCurrChng(e.target.value)}
        disabled={currDisable}>
          {currOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        

      </select>
    </div>
  )
}

export default InputBox
