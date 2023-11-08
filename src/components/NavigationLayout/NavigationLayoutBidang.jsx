import React from "react";
import { Outlet } from "react-router-dom";
import SidebarBidang from "../Sidebar/SidebarBidang";
import NavbarDashboard from "../DahsboardNavbar/NavbarDashboard";

const NavigationLayoutBidang = () => {
  return (
    <div className="flex">
      <SidebarBidang />
      <div className="min-h-screen flex grow flex-col">
        <NavbarDashboard />
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationLayoutBidang;
