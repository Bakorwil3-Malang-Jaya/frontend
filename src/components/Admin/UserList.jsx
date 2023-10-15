import React from "react";
import BtnTambahUser from "./BtnTambahUser";
import { useEffect } from "react";
import { getUser } from "./apiUser";
import { useState } from "react";

const UserList = () => {
  const c = console.log;
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
      if (Array.isArray(data)) {
        setUser(data);
      }
    });
  }, []);

  c(user);
  return (
    <div className="p-4">
      <BtnTambahUser />

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
              </tr>
            </thead>
            <tbody className="text-center">
              <td>1</td>
              <td>Dewandra</td>
              <td>dewandra@gmail.com </td>
              <td>admin</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
