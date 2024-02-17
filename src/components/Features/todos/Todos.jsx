import { useState } from "react";
import { CustomButton } from "../../UI/customButton/CustomButton";
import "./Todos.css";

export const Todos = () => {
  const [todos, setTodos] = useState("");
  const [lists, setLists] = useState([]); // ["todo1", "todo2"]
  const addTodo = (event) => setTodos(event.target.value);

  const todoResult = (event) => {
    event.preventDefault();
    if (todos === "") return alert("Please add a todo");
    setLists((prevState) => [...prevState, todos]);
    setTodos("");
  };

  console.log(lists);
  return (
    <div className="todo-wrapper">
      <h1>Todos</h1>
      <form onSubmit={todoResult}>
        <input
          type="text"
          className="todo-input"
          onChange={addTodo}
          value={todos}
        />
        <CustomButton text="Add Todo" className="todo-btn" type="submit" />
      </form>

      <ul>
        {lists.map((list, index) => (
          <li key={index} className="todo-list">
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};
