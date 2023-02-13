import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    filter: "All",
    employees: [],
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },

    addEmployee: (state, action) => {
      console.log(action);
      state.employees = [...state.employees, action.payload];
    },

    editEmployee: (state, action) => {
      state.employees = state.employees.map((empleado) => {
        if (empleado.id == action.payload.id) {
          empleado = action.payload;
        }
        return empleado;
      });
    },

    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter((empleado) => {
        if (empleado.id != action.payload) {
          return empleado;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmployees, addEmployee, editEmployee, deleteEmployee } =
  employeesSlice.actions;
