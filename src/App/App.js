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
    <div className="calculator">
      <section className="section__result">
        <Result result={result} />
      </section>
      <section className="section__clock">
        <NDate />
      </section>
      <section className="section__form">
        <Form result={result} calculateResult={calculateResult} />
      </section>
    </div>
  );
}

export default App;
