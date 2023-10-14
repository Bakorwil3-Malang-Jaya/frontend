import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddBerita from "./AddSuratMasuk";
import EditBerita from "./EditSuratMasuk";
import DetailBerita from "./DetailSuratMasuk";
import Dropdown from "./Dropdown";
import { ConfirmDeleteSuratMasuk } from "./ConfirmDeleteSuratMasuk";
import { deleteSuratMasuk, getSuratMasuk } from "./apiSuratMasuk";
import ReactPaginate from "react-paginate";
import { FaTrash, FaExclamation, FaPencil } from "react-icons/fa6";
import BtnTambah from "./BtnTambah";

const SuratMasukList = ({ search }) => {
  const [dataSuratMasuk, setDataSuratMasuk] = useState([]);
  const [pickOfSuratMasukEdit, setpickOfSuratMasukEdit] = useState("");
  const [pickOfSuratMasukDetail, setpickOfSuratMasukDetail] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");
  const [pickTahun, setPickTahun] = useState("semua");
  const [dataTahunFilter, setDataTahunFilter] = useState([]);
  const [tahunFromDB, setTahunFromDB] = useState([]);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const SuratMasukPerPage = 10;
  const pageVisited = pageNumber * SuratMasukPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // =========== GET DATA FROM DB ===========
  useEffect(() => {
    getSuratMasuk().then((data) => {
      setDataSuratMasuk(data);
      setDataTahunFilter(data);
      setTahunFromDB([...new Set(data.map((th) => th.tahun))]);
    });
  }, []);

  // =========== SURAT MASUK PER TAHUN ===========
  const tahunFilter = (th) => {
    const filterTahun = dataSuratMasuk.filter((surat) => surat.tahun === th);
    setDataTahunFilter(filterTahun);
    setPickTahun(th);
  };

  const semua = () => {
    setDataTahunFilter(dataSuratMasuk);
    setPickTahun("semua");
  };
  // =========== DELETE BERITA ===========
  const deleteSuratMasukId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteSuratMasuk(id, setDataSuratMasuk, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  // =========== EDIT SURAT MASUK ===========
  const handleEditSuratMasuk = (suratMasukData) => {
    setpickOfSuratMasukEdit(suratMasukData);
    setDataSuratMasuk((prevData) =>
      prevData.map((suratMasuk) =>
        suratMasuk.id === suratMasukData.id ? suratMasukData : suratMasuk
      )
    );
  };

  // =========== GET SURAT MASUK BY ID ===========
  const handleGetSuratMasuk = (suratMasukData) => {
    setpickOfSuratMasukDetail(suratMasukData);
    setDataSuratMasuk((prevData) =>
      prevData.map((suratMasuk) =>
        suratMasuk.id === suratMasukData.id ? suratMasukData : suratMasuk
      )
    );
  };

  // =========== ADD BERITA ===========
  const handleAddSuratMasuk = (newSuratMasuk) => {
    setDataSuratMasuk([...dataSuratMasuk, newSuratMasuk]);
  };

  const [balik, setBalik] = useState(false);
  const handlerBalik = () => {
    setBalik(!balik);
  };

  const dataToMap = balik
    ? [...dataTahunFilter]
        .slice(0, dataTahunFilter.length)
        .slice(pageVisited, pageVisited + SuratMasukPerPage)
        .filter((s) => (search === "" ? s : s.nomor_surat.includes(search)))
        .reverse()
    : [...dataTahunFilter]
        .slice(0, dataTahunFilter.length)
        .slice(pageVisited, pageVisited + SuratMasukPerPage)
        .filter((s) => (search === "" ? s : s.nomor_surat.includes(search)));

  return (
    <>
      {/* ============== DROPDOWN & BTN TAMBAH ============== */}
      <div className="flex">
        {/* ---------------- DROPDOWN ---------------- */}
        <Dropdown
          pickTahun={pickTahun}
          semua={semua}
          tahunFromDB={tahunFromDB}
          tahunFilter={tahunFilter}
        />

        {/* ---------------- BUTTON TAMBAH ---------------- */}
        <BtnTambah />
      </div>

      {/* ============== TABEL ============== */}
      <div className="flex flex-col  gap-2">
        <div className="overflow-x-auto">
          <table className="table">
            {/* ==================== TABEL HEADER ==================== */}
            <thead>
              <tr>
                <th className="text-center">
                  <button onClick={handlerBalik}>No</button>
                </th>
                <th className="text-center">Nomor Surat</th>
                <th className="text-center">Pengirim</th>
                <th className="text-center">Keterangan</th>
                <th className="text-center">Tahun</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>

            {/* ==================== TABEL BODY ==================== */}
            <tbody className="text-center">
              {dataToMap.map((surat) => (
                <tr key={surat.id}>
                  {pageVisited + surat.nomor_agenda}

                  {/* ---------------- KOLOM NOMOR SURAT ----------------  */}
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: surat.nomor_surat,
                      }}
                    />
                  </td>
                  {/* ---------------- KOLOM PENGIRIM ----------------  */}
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: surat.pengirim,
                      }}
                    />
                  </td>
                  {/* ---------------- KOLOM PERIHAL ----------------  */}
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: surat.perihal,
                      }}
                    />
                  </td>
                  {/* ---------------- KOLOM TAHUN ----------------  */}
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: surat.tahun,
                      }}
                    />
                  </td>

                  {/* =============== KOLOM ACTION ===============  */}
                  <td className="flex gap-2 justify-center items-center">
                    {/* ---------------- BUTTON HAPUS ----------------  */}
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteBerita.showModal();
                        setPickIdDelete(surat.id);
                      }}
                      className="btn-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                    >
                      <FaTrash />
                    </button>

                    {/* ---------------- BUTTON EDIT ----------------  */}
                    <button
                      onClick={() => {
                        handleEditSuratMasuk({
                          id: surat.id,
                          nomor_agenda: surat.nomor_agenda,
                          tgl_diterima: surat.tgl_diterima,
                          tgl_surat: surat.tgl_surat,
                          nomor_surat: surat.nomor_surat,
                          pengirim: surat.pengirim,
                          perihal: surat.perihal,
                          ditujukan: surat.ditujukan,
                          posisi: surat.posisi,
                          sifat: surat.sifat,
                          keterangan: surat.keterangan,
                          tahun: surat.tahun,
                          fileSurat: surat.fileSurat,
                        });
                        window.my_modal_editSuratMasuk.showModal();
                      }}
                      className="btn-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                    >
                      <FaPencil />
                    </button>

                    {/* ---------------- BUTTON DETAIL ----------------  */}
                    <button
                      onClick={() => {
                        handleGetSuratMasuk({
                          id: surat.id,
                          nomor_agenda: surat.nomor_agenda,
                          tgl_diterima: surat.tgl_diterima,
                          tgl_surat: surat.tgl_surat,
                          nomor_surat: surat.nomor_surat,
                          pengirim: surat.pengirim,
                          perihal: surat.perihal,
                          posisi: surat.posisi,
                          ditujukan: surat.ditujukan,
                          sifat: surat.sifat,
                          keterangan: surat.keterangan,
                          url: surat.url,
                          tahun: surat.tahun,
                          fileSurat: surat.fileSurat,
                        });
                        window.my_modal_getSuratMasuk.showModal();
                      }}
                      className="btn-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                    >
                      <FaExclamation />
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
              pageCount={Math.ceil(dataSuratMasuk.length / SuratMasukPerPage)}
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

        {/* ====== HANDLE ADD, EDIT, DETAIL, CONFIRM SURAT MASUK ====== */}
        <AddBerita handleAddSuratMasuk={handleAddSuratMasuk} />
        <EditBerita
          handleEditSuratMasuk={handleEditSuratMasuk}
          pickOfSuratMasukEdit={pickOfSuratMasukEdit}
        />
        <DetailBerita
          handleGetSuratMasuk={handleGetSuratMasuk}
          pickOfSuratMasukDetail={pickOfSuratMasukDetail}
        />
        <ConfirmDeleteSuratMasuk
          deleteSuratMasukId={deleteSuratMasukId}
          pickIdDelete={pickIdDelete}
        />
      </div>
    </>
  );
};

export default SuratMasukList;
