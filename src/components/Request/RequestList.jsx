import React, { useState, useEffect } from "react";
import BtnTambah from "./BtnTambah";
import { getRequest } from "./apiRequest";
import AddRequest from "./AddRequest";
import dayjs from "dayjs";
import { FaPencil } from "react-icons/fa6";
// import Dropdown from "./Dropdown";

const RequestList = () => {
  const [dataRequest, setDataRequest] = useState([]);
  const [pickOfRequestEdit, setpickOfRequestEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // =========== GET DATA FROM DB ===========
  useEffect(() => {
    getRequest().then((data) => {
      setDataRequest(data);
    });
  }, []);

  // =========== ADD REQUEST ===========
  const handleAddRequest = (newRequest) => {
    if (Array.isArray(dataRequest)) {
      setDataRequest([...dataRequest, newRequest]);
    }
  };

  return (
    <>
      <div className="mb-14">
        {/* ================= BUTTON DROPDOWN ================= */}
        {/* <Dropdown /> */}
        {/* ================= BUTTON REQUEST ================= */}
        <BtnTambah />
      </div>
      {/* ============== TABEL ============== */}
      <div className="flex flex-col  gap-2">
        <div className="overflow-x-auto">
          <table className="table">
            {/* ==================== TABEL HEADER ==================== */}
            <thead>
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Bidang</th>
                <th className="text-center">Perihal</th>
                <th className="text-center">Tanggal</th>
                <th className="text-center">Nomor Surat</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            {/* ==================== TABEL BODY ==================== */}
            <tbody className="text-center">
              {dataRequest.map((request) => (
                <tr key={request.id}>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: request.id,
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: request.bidang,
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: request.perihal,
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: dayjs(request.tanggal).format("DD/MM/YYYY"),
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: request.nomor_surat,
                      }}
                    />
                  </td>
                  <td className="flex gap-2 justify-center items-center">
                    {/* =============== BUTTON EDIT ===============  */}
                    <button
                      onClick={() => {
                        handleEditSuratKeluar({
                          id: surat.id,
                          nomor_urut: surat.nomor_urut,
                          klas: surat.klas,
                          tanggal: surat.tanggal,
                        });
                        window.my_modal_editSuratKeluar.showModal();
                      }}
                      className="btn-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                    >
                      <FaPencil />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AddRequest handleAddRequest={handleAddRequest} />
      </div>
    </>
  );
};

export default RequestList;
