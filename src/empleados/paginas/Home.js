import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../store/slices/employees/employeesSlice";

export const Home = () => {
  // esto es para traer del store informacion los empleados
  const { employees } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const eliminar = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <>
      <div>
        <div>
          {employees.length == 0 ? (
            <h1> No hay empleados</h1>
          ) : (
            <h1>Listado de empleados</h1>
          )}
          <ul>
            {employees.map((employee) => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <div key={employee.id} className="card-body">
                    <h5 className="card-title">
                      {employee.firstname} {employee.lastname}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {employee.email}
                    </h6>

                    <Link
                      to={`/detail/${employee.id}`}
                      className="btn btn-info"
                    >
                      Detalles{" "}
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(employee.id);
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
