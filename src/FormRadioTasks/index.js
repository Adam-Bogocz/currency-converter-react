import "./style.css";

const FormRadioTasks = ({ tasks, target, setCur }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      {tasks.map((task) => {
        <label className="formRadioTasks__labelText">
          <input
            className="formRadioTasks__field"
            type="radio"
            name={"formRadioNew"}
            checked={target}
            value={task.cur}
            onChange={({ target }) => setCur(target.value)}
          />
          {task.cur}
        </label>;
      })}
      ;
    </form>
    //   <ul className="tasks">
    //
    //       <li
    //         key={task.id}
    //         className={`tasks__item${
    //           hideDone && task.done ? " tasks__item--hidden" : ""
    //         }`}
    //       >
    //         <button
    //           className="tasks__button tasks__button--toggleDone"
    //           onClick={() => toggleTaskDone(task.id)}
    //         >
    //           {task.done ? "✔" : ""}
    //         </button>
    //         <span
    //           className={`tasks__content${
    //             task.done ? " tasks__content--done" : ""
    //           }`}
    //         >
    //           {task.content}
    //         </span>
    //         <button
    //           className="tasks__button tasks__button--remove"
    //           onClick={() => removeTask(task.id)}
    //         >
    //           🗑
    //         </button>
    //       </li>
    //
    //   </ul>
  );
};

export default FormRadioTasks;
