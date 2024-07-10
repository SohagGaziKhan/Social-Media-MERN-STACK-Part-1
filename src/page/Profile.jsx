import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainNews from "../components/MainNews";
import Rightbar from "../components/Rightbar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-[9]">
          <div>
            <div className="relative h-[320px] ">
              <img
                className="w-full h-[250px] object-cover"
                src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
                alt=""
              />
              <img
                className="w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] bprder-3 border-white"
                src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl ">ProjectWithSGK</h3>
              <span className="font-light"> Hello my Frients!</span>
            </div>
          </div>
          <div className="flex ">
            <MainNews className="w-[900px]" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
