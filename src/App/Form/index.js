import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import FormNumber from "../FormNumber";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState();
  const [cash, setCash] = useState(100);
  const [exchangeRate, setExchangeRate] = useState("4.3");
  const [direction, setDirection] = useState();

  const directions = [
    {key:0, name: `PLN » ${currency}`, direction: `PLN »` },
    {key:1, name: `${currency} » PLN`, direction: `» PLN` },
  ];

  const setDefaultRate = () => {
    setExchangeRate(currencies.find(({ short }) => short === currency).rate);
  };

  const onFormRadioChange = () => {
    calculateResult(direction, cash, currency, exchangeRate);
  };

  console.log(`cash = ${cash}`);
  console.log(`kurs${currency} = ${exchangeRate}`);
  console.log(`waluta = ${currency}`);
  console.log({ currency });
  console.log({ direction });
  console.log(result);

  return (
    <section>
      <fieldset className="section__formRadio">
        <form>
          <p>Podaj walutę:</p>
          {currencies.map((currencies) => (
            <label className="formRadio__labelText">
              <input
                className="formRadio__field"
                type="radio"
                name="radioAuto"
                value={currencies.short}
                onChange={({ target }) => setCurrency(target.value)}
              />
              {currencies.short}
            </label>
          ))}
        </form>
        <form>
          {currency !== undefined && (
            <>
              {directions.map((directions) => (
                <label className="formRadio__labelText">
                  <input
                    className="formRadio__field"
                    type="radio"
                    name="direction"
                    value={directions.direction}
                    onChange={({ target }) => setDirection(target.value)}
                  />
                  {directions.name}
                </label>
              ))}
            </>
          )}
        </form>
      </fieldset>

      <fieldset className="section__formNumber">
        {direction !== undefined && (
          <>
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
            <button onClick={onFormRadioChange}>Oblicz</button>
          </>
        )}
      </fieldset>
    </section>
  );
};

export default Form;
