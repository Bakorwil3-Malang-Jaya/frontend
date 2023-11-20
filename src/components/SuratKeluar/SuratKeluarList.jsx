import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AddSurat from "./AddSuratKeluar";
import { getSuratKeluar, deleteSuratKeluar } from "./apiSuratKeluar";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { ConfirmDeleteSuratKeluar } from "./confirmDeleteSuratKeluar";
import EditSurat from "./EditSuratKeluar";
import dayjs from "dayjs";
import ReactPaginate from "react-paginate";
// import BtnTambahSuratKeluar from "./BtnTambahSuratKeluar";
// import Dropdown from "./Dropdown";

const SuratKeluarList = () => {
  const [dataSuratKeluar, setDataSuratKeluar] = useState([]);
  const [pickOfSuratKeluarEdit, setpickOfSuratKeluarEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // =========== PAGINATION ===========
  const [pageNumber, setPageNumber] = useState(0);
  const SuratKeluarPerPage = 10;
  const pageVisited = pageNumber * SuratKeluarPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
                <th className="text-center">No Urut</th>
                <th className="text-center">Klas</th>
                <th className="text-center">Tanggal</th>
                <th className="text-center">No Urut</th>
                <th className="text-center">Klas</th>
                <th className="text-center">Tanggal</th>
                <th className="text-center">No Urut</th>
                <th className="text-center">Klas</th>
                <th className="text-center">Tanggal</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            {/* ==================== TABEL BODY ==================== */}
            <tbody className="text-center">
              {dataSuratKeluar
                .slice(pageVisited, pageVisited + SuratKeluarPerPage)
                .map((surat) => (
                  <tr key={surat.id}>
                    <th>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: surat.nomorurut_satu,
                        }}
                      />
                    </th>
                    <td>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: surat.klas_satu,
                        }}
                      />
                    </td>
                    <td>
                      {surat.tanggal_satu === ""
                        ? " "
                        : dayjs(surat.tanggal_satu).format("DD-MM-YYYY")}
                    </td>
                    <th>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: surat.nomorurut_dua,
                        }}
                      />
                    </th>
                    <td>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: surat.klas_dua,
                        }}
                      />
                    </td>
                    <td>
                      {surat.tanggal_dua === "" ? " " : dayjs(surat.tanggal_dua).format("DD-MM-YYYY")}
                    </td>
                    <th>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: surat.nomorurut_tiga,
                        }}
                      />
                    </th>
                    <td>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: surat.klas_tiga,
                        }}
                      />
                    </td>
                    <td>
                      {
                        surat.tanggal_tiga === "" ? " " : dayjs(surat.tanggal_tiga).format("DD-MM-YYYY")
                      }
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
                            nomorurut_satu: surat.nomorurut_satu,
                            klas_satu: surat.klas_satu,
                            tanggal_satu: surat.tanggal_satu,
                            nomorurut_dua: surat.nomorurut_dua,
                            klas_dua: surat.klas_dua,
                            tanggal_dua: surat.tanggal_dua,
                            nomorurut_tiga: surat.nomorurut_tiga,
                            klas_tiga: surat.klas_tiga,
                            tanggal_tiga: surat.tanggal_tiga,
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
          {/* ==================== PAGINATION ==================== */}
          <div className="w-full flex justify-end shadow-md bg-whiterounded-md h-14 p-4 items-center">
            <ReactPaginate
              className="flex gap-4"
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              pageCount={Math.ceil(dataSuratKeluar.length / SuratKeluarPerPage)}
              onPageChange={changePage}
              marginPagesDisplayed={2}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              activeClassName={"paginationActivate"}
              nextLinkClassName={"nextBttn"}
              disabledLinkClassName={"paginationDisabled"}
            />
          </div>
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
