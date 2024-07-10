import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainNews from "../components/MainNews";
import Rightbar from "../components/Rightbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <MainNews />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
