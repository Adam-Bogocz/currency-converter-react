import { useState } from "react";
import FormNumber from "./FormNumber";
import FormRadio from "./FormRadio";

function App() {
  const [cash, setCash] = useState("100");
  const [exchangeRate, setExchangeRate] = useState("4.3");
  const [currency, setCurrency] = useState("EUR");
  const [direction, setDirection] = useState(true);
  let result; 
   
const toggleDirection = () => {
    setDirection((direction) => !direction);
  };

  const calculateResult = (cash, exchangeRate, direction) => {
    switch (direction) {
      case true:
        return (result = cash * exchangeRate);
      case false:
        return (result = cash / exchangeRate);
    }
  };

  console.log(`cash = ${cash}`);
  console.log(`kurs${currency} = ${exchangeRate}`);
  console.log(`waluta = ${currency}`);
  console.log(`direction = ${direction}`);

  return (
    <div className="container">
      <p className="container--result js-result">100.00 PLN = 430.00 EUR</p>

      <form className="form__fieldset--currency js-form">
        <fieldset className="fieldset">
          <FormRadio
            // labelName={[
            //   { id: 1, content: EUR },
            //   { id: 2, content: USD },
            // ]}
            option1={"EUR"}
            option2={"USD"}
            target={currency}
            setTarget={setCurrency}
            name={"currency"}
          />
          <FormRadio
            option1={`PLN » ${currency}`}
            option2={`${currency} » PLN`}
            target={direction}
            setTarget={toggleDirection}
            name={"direction"}
          />
          {/* <p>
            <input
              className="js-directionFromPLN"
              type="radio"
              name="direction"
              // checked
            />
            <span className="form__labelText js-directionFromPlnText">
              {" "}
              PLN » EUR
            </span>
            <input
              className="js-directionToPLN"
              type="radio"
              name="direction"
            />
            <span className="form__labelText js-directionToPlnText">
              EUR » PLN
            </span>
          </p> */}
        </fieldset>

        <fieldset className="form__fieldset">
          <FormNumber
            title={`Podaj kwotę`}
            target={cash}
            setTarget={setCash}
            value={cash}
            step={"1"}
          />
          <FormNumber
            title={`kurs ${currency}`}
            target={exchangeRate}
            setTarget={setExchangeRate}
            value={exchangeRate}
            step={"0.1"}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
