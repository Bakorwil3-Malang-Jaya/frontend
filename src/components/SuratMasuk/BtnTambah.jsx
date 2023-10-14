import React from "react";

const BtnTambah = () => {
  return (
    <div className="pr-6 absolute right-0">
      <button
        onClick={() => {
          window.my_modal_addBerita.showModal();
        }}
        className="btn bg-[#005DB9] text-white hover:bg-blue-700"
      >
        + Tambah Surat Masuk
      </button>
    </div>
  );
};

export default BtnTambah;
