import "./resultStyle.css";

export const Result = ({ result }) => {
  
  return (
    <p className="result">
      {!!result && (
        <>
          {result.cash}&nbsp;{result.sourceCurrency} ={" "}
          {result.targetAmount.toFixed(2)}&nbsp;{result.targetCurrency}
        </>
      )}
    </p>
  );
};
