import React from "react";

const Dropdown = () => {
  return (
    <div>
      {/* ============== DROPDOWN ============== */}
      <details className="dropdown px-4">
        <summary className="btn bg-[#005DB9] text-white hover:bg-blue-700">
          bidang
        </summary>
        <ul className="p-2 shadow menu dropdown-content  z-[1] bg-base-100 rounded-box w-52">
          <li>PE</li>
          {/* <li>
            <a
              onClick={() => {
                semua();
              }}
            >
              semua
            </a>
          </li> */}
          {/* {tahunFromDB.map((th,index) => (
            <li key={index}>
              <a
                onClick={() => {
                  tahunFilter(th);
                }}
              >
                {th}
              </a>
            </li>
          ))} */}
        </ul>
      </details>
    </div>
  );
};

export default Dropdown;
