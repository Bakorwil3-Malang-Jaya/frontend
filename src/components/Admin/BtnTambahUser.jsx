import React from "react";

const BtnTambahUser = () => {
  return (
    <div>
      <div className="ml-[82%] mb-3">
        <button
          onClick={() => {
            window.my_modal_addUser.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700">
          + Tambah User
        </button>
      </div>
      {/* ============ MODAL ADD DATA USER ============ */}
      <dialog id="my_modal_addUser" className="modal backdrop-blur-sm ">
        <form
          method="dialog"
          data-testid="form"
          className=" bg-white overflow-y-scroll  px-6 py-3 relative min-w-[600px] max-h-screen max-w-3xl rounded-md z-10"
          name="form">
          <form
            method="dialog"
            className="modal-box shadow-none right-0  absolute w-full bg-transparent mx-auto">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl my-3 mx-auto font-bold">Tambah User</h1>
          <div className="grid grid-cols-1 mb-3 gap-2">
            {/* ==================== NOMOR SURAT ==================== */}
            <div>
              <label className="text-l" htmlFor="name">
                Name
              </label>
              <input
                className="input input-bordered input-info w-full "
                id="name"
                name="name"
                type="text"
              />
            </div>
            {/* ==================== PENGIRIM ==================== */}
            <div>
              <label className="text-l" htmlFor="email">
                Email
              </label>
              <input
                className="input input-bordered input-info w-full "
                id="email"
                name="email"
                type="text"
              />
            </div>
            {/* ==================== PASSWORD ==================== */}
            <div>
              <label className="text-l" htmlFor="password">
                Password
              </label>
              <input
                className="input input-bordered input-info w-full "
                id="password"
                name="password"
                type="password"
              />
            </div>
            {/* ==================== ACCOUNT PASSWORD  ==================== */}
            <div>
              <label className="text-l" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="input input-bordered input-info w-full "
                id="confirmPassword"
                name="confirmPassword"
                type="password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-300 hover:bg-green-200 hover:text-green-100 rounded-md p-2">
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default BtnTambahUser;
