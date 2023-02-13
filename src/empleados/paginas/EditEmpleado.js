import React from 'react'
import { useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editEmployee } from '../../store/slices/employees/employeesSlice';




export const EditEmpleado = () => { 

  const { employeesId } = useParams();
  const navigate = useNavigate();

  const { employees } = useSelector((state) => state.employees)

  const employee = employees.find((employee) => {
      return employee.id == employeesId;
  })

  const dispatch = useDispatch();

  const [empleado, setEmpleado] = useState({
          id: employee.id,
          firstname: employee.firstname,
          lastname: employee.lastname,
          email: employee.email,
          phone_number: employee.phone_number,
          hire_date: employee.hire_date,
          salary: employee.salary,
          commission_pct: employee.commission_pct
        });

    console.log(employee)

  const handleChange = (e) => {
            setEmpleado({
              ...empleado,
              [e.target.name]: e.target.value,
            });
          };  

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(editEmployee(empleado));
      console.log(empleado);
      navigate("/home");     
  }

  const handleCancel = () => {
    navigate("/detail/"+ employeesId)
  }

  return (
    <form style={{width:500}}>
  <div className="mb-3">
    <label for="firstname" className="form-label">Primer nombre:</label>
    <input  name="firstname" onChange={handleChange} value={empleado.firstname} type="text" className="form-control" id="firstname" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="lastname" className="form-label">Apellidos:</label>
    <input name="lastname" onChange={handleChange} value={empleado.lastname} type="text" className="form-control" id="lastname" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Correo:</label>
    <input name="email" onChange={handleChange} value={empleado.email} placeholder="tucorreo@hotmail.com" type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label for="phone_number" className="form-label">Telefono:</label>
    <input name="phone_number" onChange={handleChange} value={empleado.phone_number} type="text" className="form-control" id="phone_number" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="hire_date" className="form-label">Fecha de Contratacion:</label>
    <input name="hire_date" onChange={handleChange} value={empleado.hire_date} type="text" className="form-control" id="hire_date" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="salary" className="form-label">Salario:</label>
    <input name="salary" onChange={handleChange} value={empleado.salary} type="text" className="form-control" id="salary" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="commission_pct" className="form-label">Comision:</label>
    <input name="commission_pct" onChange={handleChange} value={empleado.commission_pct} type="text" className="form-control" id="commission_pct" aria-describedby="emailHelp"/>
  </div>
  
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Editar</button>
  <button  onClick={handleCancel} className="btn btn-warning">Cancelar</button>
</form>
    
  )
}
