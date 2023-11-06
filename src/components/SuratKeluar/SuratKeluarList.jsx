import React, { useState, useEffect } from "react";
import AddSurat from "./AddSuratKeluar";
import { getSuratKeluar, deleteSuratKeluar } from "./apiSuratKeluar";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { ConfirmDeleteSuratKeluar } from "./confirmDeleteSuratKeluar";
import EditSurat from "./EditSuratKeluar";
import dayjs from "dayjs";
// import BtnTambahSuratKeluar from "./BtnTambahSuratKeluar";
// import Dropdown from "./Dropdown";

const SuratKeluarList = () => {
  const [dataSuratKeluar, setDataSuratKeluar] = useState([]);
  const [pickOfSuratKeluarEdit, setpickOfSuratKeluarEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // =========== GET DATA FROM DB ===========
  useEffect(() => {
    getSuratKeluar().then((data) => {
      setDataSuratKeluar(data);
    });
  }, []);

  // =========== ADD SURAT KELUAR ===========
  const handleAddSuratKeluar = (newSuratKeluar) => {
    if (Array.isArray(dataSuratKeluar)) {
      setDataSuratKeluar([...dataSuratKeluar, newSuratKeluar]);
    }
  };

  // =========== DELETE SURAT KELUAR ===========
  const deleteSuratKeluarId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteSuratKeluar(id, setDataSuratKeluar, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  // =========== EDIT SURAT KELUAR ===========
  const handleEditSuratKeluar = (suratKeluarData) => {
    setpickOfSuratKeluarEdit(suratKeluarData);
    setDataSuratKeluar((prevData) =>
      prevData.map((suratKeluar) =>
        suratKeluar.id === suratKeluarData.id ? suratKeluarData : suratKeluar
      )
    );
  };

  return (
    <>
      {/* ============== TABEL ============== */}
      <div className="flex flex-col  gap-2">
        <div className="overflow-x-auto">
          <table className="table">
            {/* ==================== TABEL HEADER ==================== */}
            <thead>
              <tr>
                <th className="text-center">
                  {/* <button onClick={handlerBalik}>
                    <div className="flex items-center">
                      No <FaArrowsUpDown />
                    </div>
                  </button> */}
                  No Urut
                </th>
                <th className="text-center">Klas</th>
                <th className="text-center">Tanggal</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            {/* ==================== TABEL BODY ==================== */}
            <tbody className="text-center">
              {dataSuratKeluar.map((surat) => (
                <tr key={surat.id}>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: surat.nomor_urut,
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: surat.klas,
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: dayjs(surat.tanggal).format("DD/MM/YYYY"),
                      }}
                    />
                  </td>

                  <td className="flex gap-2 justify-center items-center">
                    {/* =============== BUTTON HAPUS ===============  */}
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteSuratKeluar.showModal();
                        setPickIdDelete(surat.id);
                      }}
                      className="btn-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                    >
                      <FaTrash />
                    </button>

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

        <AddSurat handleAddSuratKeluar={handleAddSuratKeluar} />
        <EditSurat
          handleEditSuratKeluar={handleEditSuratKeluar}
          pickOfSuratKeluarEdit={pickOfSuratKeluarEdit}
        />
        <ConfirmDeleteSuratKeluar
          deleteSuratKeluarId={deleteSuratKeluarId}
          pickIdDelete={pickIdDelete}
        />
      </div>
    </>
  );
};

export default SuratKeluarList;
