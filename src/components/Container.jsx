import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const Container = () => {
  return (
    <div className="w-100 h-screen overflow-hidden text-white bg-[#121212] absolute inset-0">
      <Navbar />
      <div className="absolute flex gap-1 h-screen mt-10 w-full top-0">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Container;
