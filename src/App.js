import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Courses from "./components/Courses/Courses";
import Contacts from "./components/Contacts/Contacts";
import Course from "./components/Courses/Course";
import Login from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";
import Download from "./components/Download/Download";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" exact={true} element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route path={"/courses/:id"} element={<Course />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
