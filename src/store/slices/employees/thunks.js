import { setEmployees } from './employeesSlice';
import dataJson from '../../../employees.json';

export const getEmployees = () => {
    return (dispatch, getState) => {
        const data = dataJson;
        dispatch(setEmployees(data.employees));
    };
};