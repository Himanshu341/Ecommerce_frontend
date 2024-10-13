import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Layout from "../pages/user/layout/Layout";
import Home from "../pages/user/home/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
