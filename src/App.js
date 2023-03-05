import { useState } from "react";
import FormNumber from "./FormNumber";
import FormRadio from "./FormRadio";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [cash, setCash] = useState("100");
  const [exchangeRate, setExchangeRate] = useState("4.3");
  const [currency, setCurrency] = useState("EUR");
  const [direction, setDirection] = useState(true);
  const [result, setResult] = useState();

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
  console.log(`wynik = ${result}`);

  return (
    <Container>
      <Section className="section__result">100.00 PLN = 430.00 EUR</Section>
      <Section className="section__formRadio">
        <FormRadio
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
      </Section>
      <Section className="section__formNumber">
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
        </>
      </Section>
    </Container>
  );
}

export default App;
