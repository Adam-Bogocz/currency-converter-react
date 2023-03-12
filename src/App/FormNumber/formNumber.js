import "./formNumberStyle.css";

const FormNumber = ({ title, step, target, setTarget }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label className="formNumber__labelText">{title}</label>
      <input
        className="formNumber__field"
        type="number"
        value={target}
        onChange={({ target }) => setTarget(target.value)}
        step={step}
        required
      />
    </form>
  );
};

export default FormNumber;
