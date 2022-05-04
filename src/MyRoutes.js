import MainPage from "./pages/MainPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
