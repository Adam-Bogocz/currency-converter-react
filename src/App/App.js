import "./app.css";
import { useState } from "react";
import { Result } from "./Result";
import Form from "./Form";

function App() {
  const [result, setResult] = useState(0);

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
    <p>
      <div className="app">
        <section className="section__result">
          <p>
            <Result result={result} />
          </p>
        </section>
        {/* <Section className="section__formRadio"> */}
        <Form result={result} calculateResult={calculateResult} />
      </div>
    </p>
  );
}

export default App;
