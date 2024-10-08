import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import LogoButton from "../../assets/img/LogoutButton.png";
import ConfirmLogout from "./ConfirmLogout";

const NavbarDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ============ HALAMAN SAAT INI ============
  const currentPage = useMemo(() => {
    const pathName = location.pathname.split("/")[1];
    if (pathName === "homepage") return "Homepage";
    if (pathName === "surat") return "Surat Masuk";
    if (pathName === "suratkeluar") return "Daftar Kendali";
    if (pathName === "request") return "Request";
    if (pathName === "admin") return "Admin";
  }, [location]);

  // ============ HANDLE LOG OUT ============
  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    const accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      navigate("/", { replace: true });
      window.location.reload();
    }
  };

  const userName = sessionStorage.getItem("name");
  const userEmail = sessionStorage.getItem("email");

  return (
    <div className="w-full border-b shadow-sm border-gray-400 h-24 flex items-center px-8">
      <div className="flex w-1/2">
        <h1 className="text-lg font-semibold">{currentPage}</h1>
      </div>
      <div className="flex w-1/2 justify-end  items-center  gap-4">
        <div className="flex items-center mr-11 gap-5">
          <FaUserAlt className="w-[36px] h-[36px]" />
          <div>
            <p className="font-semibold">{userName}</p>
            <span>{userEmail}</span>
          </div>
        </div>
        <button
          onClick={() => {
            window.my_modal_confirmLogout.show();
          }}
          className="border hover:bg-slate-100 duration-500 border-gray-300 rounded-full p-4">
          <img src={LogoButton} alt="Logo Button" />
        </button>
      </div>
      <ConfirmLogout handleLogout={handleLogout} />
    </div>
  );
};

export default NavbarDashboard;
