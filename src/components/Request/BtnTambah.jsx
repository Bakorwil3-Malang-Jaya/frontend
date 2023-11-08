import React from "react";

const BtnTambah = () => {
  return (
    <div className="absolute right-10 ">
      <button
        onClick={() => {
          window.my_modal_addRequest.showModal();
        }}
        className="btn bg-[#005DB9] text-white hover:bg-blue-700"
      >
        + Request
      </button>
    </div>
  );
};

export default BtnTambah;
