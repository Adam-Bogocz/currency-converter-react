import "./style.css";

export const Result = ({ result }) => {
  
  return (
    <>
      {!!result && (
        <>
          {result.cash}&nbsp;{result.sourceCurrency} ={" "}
          {result.targetAmount.toFixed(2)}&nbsp;{result.targetCurrency}
        </>
      )}
    </>
  );
};
