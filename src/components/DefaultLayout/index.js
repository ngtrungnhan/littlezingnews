import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeComponent from "./../Pages/Home/index";
import BookComponent from "./../Pages/Books/index";
import BookDetail from "./../Pages/BookDetailPage/index";
import Students from "./../Pages/Students";
import HeaderComponent from "../Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const DefaultLayout = () => {
  const loggedInUser = localStorage.getItem("user");

  if (loggedInUser === null) {
    return (
      <Navigate
        to={{
          pathname: "/login"
        }}
      />
    );
  }
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />{" "}
        <Route path="/book" element={<BookComponent />} />{" "}
        <Route path="/book/:data" element={<BookDetail />} />{" "}
        <Route path="/students" element={<Students />} />{" "}
      </Routes>{" "}
    </>
  );
};

export default DefaultLayout;
