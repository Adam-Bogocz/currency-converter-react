import "./style.css";

const FormRadio = ({ name, target, option1, option2, setTarget }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label className="formRadio__labelText">
        <input
          className="formRadio__field"
          type="radio"
          name={name}
          checked={target}
          value={option1}
          onChange={({ target }) => setTarget(target.value)}
        />
        {option1}
      </label>
      <label className="formRadio__labelText">
        <input
          className="formRadio__field"
          type="radio"
          name={name}
          value={option2}
          onChange={({ target }) => setTarget(target.value)}
        />
        {option2}
      </label>
    </form>
  );
};

export default FormRadio;
