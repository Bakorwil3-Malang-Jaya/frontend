import React from "react";

const Dropdown = ({ pickTahun, semua, tahunFromDB, tahunFilter }) => {
  return (
    <div>
      {/* ============== DROPDOWN ============== */}
      <details className="dropdown px-4">
        <summary className="btn bg-[#005DB9] text-white hover:bg-blue-700">
          {pickTahun}
        </summary>
        <ul className="p-2 shadow menu dropdown-content  z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a
              onClick={() => {
                semua();
              }}
            >
              semua
            </a>
          </li>
          {tahunFromDB.map((th) => (
            <li key={th.id}>
              <a
                onClick={() => {
                  tahunFilter(th);
                }}
              >
                {th}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default Dropdown;
