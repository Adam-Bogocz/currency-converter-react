import "./style.css";

const Result = ({
  cash,
  currency,
  exchangeRate,
  direction,
  result,
  calculateResult,
  visualResult,
  setVisualResult,
}) => {
  const sourceCurrency = "PLN";

  calculateResult(direction, cash, exchangeRate);
  setVisualResult(() => {
    switch (direction) {
      case true: {
        return `${cash} ${sourceCurrency} = ${result.toFixed(2)} ${currency}`;
      }
      case false: {
        return `${cash} ${currency} = ${result.toFixed(2)} ${sourceCurrency}`;
      }
    }
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return <form onSubmit={onFormSubmit}>{visualResult}</form>;
};

export default Result;
