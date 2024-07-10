import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./page/Profile";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
