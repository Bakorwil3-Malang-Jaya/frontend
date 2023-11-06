import React from "react";

const BtnTambahSuratKeluar = () => {
  return (
    <div className="absolute right-10">
      <button
        onClick={() => {
          window.my_modal_addSuratKeluar.showModal();
        }}
        className="btn bg-[#005DB9] text-white hover:bg-blue-700"
      >
        + Surat Keluar
      </button>
    </div>
  );
};

export default BtnTambahSuratKeluar;
