import "./appStyle.css";
import { useState } from "react";
import { Result } from "./Result/result";
import Form from "./Form/form";
import NDate from "./Clock/clock";

function App() {
  const [result, setResult] = useState();
  
  const calculateResult = (direction, cash, currency, exchangeRate) => {
    if (direction === `PLN »`) {
      setResult({
        key: 0,
        cash: cash,
        sourceCurrency: `PLN`,
        targetAmount: cash / exchangeRate,
        targetCurrency: currency,
      });
    } else {
      setResult({
        key: 1,
        cash: cash,
        sourceCurrency: currency,
        targetAmount: cash * exchangeRate,
        targetCurrency: `PLN`,
      });
    }
  };

  return (
    <container>
      <div className="app">
        <section className="section__result">
          <Result result={result} />
        </section>
        <section className="section__formRadio">
          <NDate/>
          <Form result={result} calculateResult={calculateResult} />
        </section>
      </div>
    </container>
  );
}

export default App;
