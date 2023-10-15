import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/img/logo1.png";
import { FaHouseUser } from "react-icons/fa6";

const SidebarDashboard = () => {
  return (
    <div className="relative min-w-[270px] pt-8 border-r-2 border-gray-300 ">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-whiterounded-full cursor-pointer"></div>
        <img className="h-16" src={logo1} alt="Logo" />
      </div>

      <NavLink to={"/admin"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300"
            } cursor-pointer`}>
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <FaHouseUser className="h-[28px] w-[28px]" />
              <span className="text-start font-medium pl-8 w-full text-sm">
                Dashboard Admin
              </span>
            </li>
          </ul>
        )}
      </NavLink>
    </div>
  );
};

export default SidebarDashboard;
