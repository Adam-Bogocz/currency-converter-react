import "./formStyle.css";
import { useState, useEffect } from "react";
import { currencies } from "../currencies";
import FormNumber from "../FormNumber/formNumber";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState();
  const [cash, setCash] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [direction, setDirection] = useState();

  const directions = [
    { key: 0, name: `PLN » ${currency}`, direction: `PLN »` },
    { key: 1, name: `${currency} » PLN`, direction: `» PLN` },
  ];

  const setDefaultRate = () => {
    setExchangeRate(currencies.find(({ short }) => short === currency).rate);
  };

  useEffect(() => {
    if (
      cash !== undefined &&
      direction !== undefined &&
      currency !== undefined &&
      exchangeRate !== undefined
    )
      calculateResult(direction, cash, currency, exchangeRate);
  }, [currency, exchangeRate, cash, direction]);

  useEffect(() => {
    if (currency !== undefined) setDefaultRate();
  }, [currency]);

  return (
    <>
      <fieldset className="formRadio">
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

      <fieldset className="formNumberBlock">
        <FormNumber
          title={`Podaj kwotę`}
          target={cash}
          setTarget={setCash}
          value={cash}
          step={"1"}
        />
        {currency !== undefined && (
          <>
            <FormNumber
              title={`kurs ${currency}`}
              target={exchangeRate}
              setTarget={setExchangeRate}
              value={exchangeRate}
              step={"0.1"}
            />
          </>
        )}
      </fieldset>
    </>
  );
};

export default Form;
