import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const Container = () => {
  return (
    <div className="w-100 h-screen overflow-hidden text-white bg-[#121212]">
      <Navbar />
      <div className="flex gap-1">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Container;
