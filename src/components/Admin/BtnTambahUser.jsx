import React from "react";

const BtnTambahUser = () => {
  return (
    <div className="pr-6 absolute right-0">
      <button
        onClick={() => {
          window.my_modal_addUsers.showModal();
        }}
        className="btn bg-[#005DB9] text-white hover:bg-blue-700"
      >
        + Tambah Users
      </button>
    </div>
  );
};
export default BtnTambahUser;
