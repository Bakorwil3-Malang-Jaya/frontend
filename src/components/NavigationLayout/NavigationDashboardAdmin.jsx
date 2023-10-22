import React from "react";
import { Outlet } from "react-router-dom";
import NavbarDashboard from "../DahsboardNavbar/NavbarDashboard";
import SidebarAdmin from "../Sidebar/SidebarAdmin";

const NavigationDashboardAdmin = () => {
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="min-h-screen flex grow flex-col">
        <NavbarDashboard />
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationDashboardAdmin;
