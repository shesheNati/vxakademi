import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../ui";

import {
  Home,
  Detalles,
  AddEmpleado,
  EditEmpleado,
} from "../empleados/paginas";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="add" element={<AddEmpleado />} />
          <Route path="edit/:employeesId" element={<EditEmpleado />} />

          <Route path="/detail/:employeesId" element={<Detalles />} />

          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  );
};
