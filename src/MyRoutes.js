import MainPage from "./pages/MainPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "pages/AddUser";
import EditUser from "pages/EditUser";
import MyNavbar from "components/MyNavbar";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
