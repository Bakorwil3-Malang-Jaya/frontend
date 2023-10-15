import React from "react";
import { Outlet } from "react-router-dom";
import NavbarDashboard from "../DahsboardNavbar/NavbarDashboard";
import SidebarDashboard from "../Sidebar/SidebarDashboard";

const NavigationDashboardAdmin = () => {
  return (
    <div className="flex">
      <SidebarDashboard />
      <div className="min-h-screen flex grow flex-col">
        <NavbarDashboard />
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationDashboardAdmin;
