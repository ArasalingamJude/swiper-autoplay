import React, { useState } from "react";
import MenuIcon from "../assets/menu.png";
import CloseIcon from "../assets/close.png";

export default function Navbar() {
  //we use react hooks for toggling the menu
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };

  return (
    <div className="fixed flex flex-row justify-between w-full h-12 bg-green-400 text-white items-center">
      <div className="band-logo text-xl font-bold px-2">Dashboard</div>
      <ul className="hidden menu-list lg:flex lg:flex-row text-xs font-bold">
        <li className="menu-list-item px-2">
          <a href="www.google.com">Home</a>
        </li>
        <li className="menu-list-item px-2">
          <a href="www.google.com">About</a>
        </li>
        <li className="menu-list-item px-2">
          <a href="www.google.com">Courses</a>
        </li>
      </ul>

      <button onClick={() => showSideMenu()} className="menu-button lg:hidden">
        {isSideMenuOpen ? (
          <img src={CloseIcon} className="w-8 h-8 " alt="close"></img>
        ) : (
          <img src={MenuIcon} className="w-8 h-8" alt="menu"></img>
        )}
      </button>
      {isSideMenuOpen ? SideMenu() : ""}
    </div>
  );
}

function SideMenu() {
  return (
    <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-green-500 top-12">
      <ul className="menu-list flex flex-col justify-between items-center text-s font-bold">
        <li className="menu-list-item py-2 hover:bg-white hover:text-green-700">
          <a href="www.google.com">Home</a>
        </li>
        <li className="menu-list-item py-2 hover:bg-white hover:text-green-700">
          <a href="www.google.com">About</a>
        </li>
        <li className="menu-list-item py-2 hover:bg-white hover:text-green-700">
          <a href="www.google.com">Courses</a>
        </li>
      </ul>
    </div>
  );
}
