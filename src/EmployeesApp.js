import { useSelector } from "react-redux"

export const EmployeesApp = ()=> {

    const { employees } = useSelector((state) => state.employees)

    console.log( employees );
    return (
        <>
            <h1> Employees App</h1>
            <hr/>
            <ul> { employees.map( (employee) => {
                return <li>Nombre Completo: {employee.firstname} {employee.lastname}</li>
            } )}</ul>
        </>
    )
}