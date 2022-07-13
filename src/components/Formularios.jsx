import { useState } from "react";

const Formularios = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescription: "",
    todoState: "pendiente",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h2>Controlado</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="todoName"
          placeholder="Ingrese To do"
          type="text"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescription"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del to do"
          onChange={handleChange}
          value={todo.todoDescription}
        />
        <select
          className="form-control mb-2"
          name="todoState"
          onChange={handleChange}
          value={todo.todoState}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>

        <button className="btn btn-outline-dark" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formularios;
