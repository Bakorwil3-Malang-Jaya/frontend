import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import BtnTambahUser from "../components/Admin/BtnTambahUser";
import { FaTrash } from "react-icons/fa6";
import { deleteUsers } from "../components/Admin/apiUsers";
import { ConfirmDeleteUsers } from "../components/Admin/confirmDeleteUsers";
import AddDataUsers from "../components/Admin/addDataUsers";

const Admin = () => {
  const c = console.log;
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [account, setAccont] = useState([]);
  const [pickIdDelete, setPickIdDelete] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const res = await axios.get("http://localhost:4000/token");
      setToken(res.data.accessToken);
      const decode = jwtDecode(res.data.accessToken);
      setExpire(decode.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const res = await axios.get("http://localhost:4000/token");
        config.headers.Authorization = `Bearer ${res.data.accessToken}`;
        setToken(res.data.accessToken);
        const decode = jwtDecode(res.data.accessToken);
        setExpire(decode.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // ============== GET USERS ==============
  const getUsers = async () => {
    const res = await axiosJWT.get("http://localhost:4000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAccont(res.data);
  };

  // ============== HANDLE DELETE USERS ==============
  const deleteUsersId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteUsers(id, setAccont, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddUsers = (newUsers) => {
    if (Array.isArray(account)) {
      setAccont([...account, newUsers]);
    }
  };
  return (
    <div>
      <div className="flex w-full p-4">
        <button
          onClick={getUsers}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          Lihat User
        </button>

        <BtnTambahUser />
      </div>
      <div className="flex flex-col  gap-2">
        <div className="overflow-x-auto">
          <table className="table">
            {/* ==================== TABEL HEADER ==================== */}
            <thead>
              <tr>
                <th className="text-center">
                  <button>No</button>
                </th>
                <th className="text-center">Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {account.map((acc, index) => (
                <tr key={acc.id}>
                  {index + 1}
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: acc.name,
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: acc.email,
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: acc.role,
                      }}
                    />
                  </td>
                  <td className="flex gap-2 justify-center items-center">
                    {/* ---------------- BUTTON HAPUS ----------------  */}
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteUsers.showModal();
                        setPickIdDelete(acc.id);
                      }}
                      className="btn-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddDataUsers handleAddUsers={handleAddUsers} />
      <ConfirmDeleteUsers
        deleteUsersId={deleteUsersId}
        pickIdDelete={pickIdDelete}
      />
    </div>
  );
};

export default Admin;
