import { createSlice } from '@reduxjs/toolkit'

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [
        {
            firstname:'Jessica',
            lastname: 'Acosta'
        },
        {
            firstname:'1',
            lastname: '2'
        }
    
    ]
  },
  reducers: {
    setEmployees: (state, action) => {
        state.employees = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmployees } = employeesSlice.actions
