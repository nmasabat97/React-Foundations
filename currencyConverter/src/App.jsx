import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amt, setAmt] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmt(amt * currencyInfo[to])
    setAmt(convertedAmt)
  }

  const convert = () => {
    setConvertedAmt(amt * currencyInfo[to])
  }

  return (
    <>
    <h1>Currency Converter</h1>
    <form
    onSubmit={(e)=>{
      e.preventDefault()
      convert()
    }}
    >
      <InputBox 
        label="From"
        amount={amt}
        currOptions = {options}
        onCurrChng={(amt)=>setAmt(amt)}
        selCurrency={from}
        onAmountChng={(amt)=>setAmt(amt)}
      />
      <button type="button" onClick={swap}>Swap</button>
      <InputBox 
        label="To"
        amount={convertedAmt}
        currOptions = {options}
        onCurrChng={(currency)=>setTo(currency)}
        selCurrency={to}
      />
      <button>Convert from {from} to {to}</button>
    </form>
    </>
  )
}

export default App
