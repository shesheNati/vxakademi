import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../../store/slices/employees/employeesSlice";

export const AddEmpleado = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [empleado, setEmpleado] = useState({
    id: Date.now(), //te devuelva la fecha actual
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    hire_date: "",
    salary: "",
    commission_pct: "",
  });

  const handleChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(empleado));
    console.log(empleado);
    navigate("/home");
  };

  return (
    <form style={{ width: 500 }}>
      <div className="mb-3">
        <label for="firstname" className="form-label">
          Primer nombre:
        </label>
        <input
          name="firstname"
          onChange={handleChange}
          value={empleado.firstname}
          type="text"
          className="form-control"
          id="firstname"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="lastname" className="form-label">
          Apellidos:
        </label>
        <input
          name="lastname"
          onChange={handleChange}
          value={empleado.lastname}
          type="text"
          className="form-control"
          id="lastname"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Correo:
        </label>
        <input
          name="email"
          onChange={handleChange}
          value={empleado.email}
          placeholder="tucorreo@hotmail.com"
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label for="phone_number" className="form-label">
          Telefono:
        </label>
        <input
          name="phone_number"
          onChange={handleChange}
          value={empleado.phone_number}
          type="text"
          className="form-control"
          id="phone_number"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="hire_date" className="form-label">
          Fecha de Contratacion:
        </label>
        <input
          name="hire_date"
          onChange={handleChange}
          value={empleado.hire_date}
          type="text"
          className="form-control"
          id="hire_date"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="salary" className="form-label">
          Salario:
        </label>
        <input
          name="salary"
          onChange={handleChange}
          value={empleado.salary}
          type="text"
          className="form-control"
          id="salary"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="commission_pct" className="form-label">
          Comision:
        </label>
        <input
          name="commission_pct"
          onChange={handleChange}
          value={empleado.commission_pct}
          type="text"
          className="form-control"
          id="commission_pct"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
