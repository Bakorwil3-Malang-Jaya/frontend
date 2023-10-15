import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { editDataSuratMasuk } from "./apiSuratMasuk";

// ============== VALIDATION KOLOM ==============
const Schema = Yup.object({
  tgl_diterima: Yup.string().required(),
  tgl_surat: Yup.string().required(),
  pengirim: Yup.string().required(),
  perihal: Yup.string().required(),
  sifat: Yup.string().required(),
  keterangan: Yup.string().required(),
  tahun: Yup.string().required(),
  fileSurat: Yup.string().required(),
});

const EditSuratMasuk = ({ handleEditSuratMasuk, pickOfSuratMasukEdit }) => {
  const [ditujukan, setditujukan] = useState([]);
  const [posisi, setposisi] = useState([]);

  useEffect(() => {
    if (pickOfSuratMasukEdit?.ditujukan) {
      setditujukan(pickOfSuratMasukEdit?.ditujukan.split(","));
    }
    if (pickOfSuratMasukEdit?.posisi) {
      setposisi(pickOfSuratMasukEdit?.posisi.split(","));
    }
  }, [pickOfSuratMasukEdit]);
  const handlerCheckDitujukan = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      setditujukan([...ditujukan, name]);
    } else {
      setditujukan(ditujukan.filter((data) => data !== name));
    }
  };
  const handlerCheckPosisi = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      setposisi([...posisi, name]);
    } else {
      setposisi(posisi.filter((data) => data !== name));
    }
  };
  const handleCloseModal = () => {
    window.my_modal_editSuratMasuk.close();
  };
  console.log(pickOfSuratMasukEdit)
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nomor_agenda: pickOfSuratMasukEdit?.nomor_agenda || "",
      tgl_diterima: pickOfSuratMasukEdit?.tgl_diterima || "",
      tgl_surat: pickOfSuratMasukEdit?.tgl_surat || "",
      nomor_surat: pickOfSuratMasukEdit?.nomor_surat || "",
      pengirim: pickOfSuratMasukEdit?.pengirim || "",
      perihal: pickOfSuratMasukEdit?.perihal || "",
      sifat: pickOfSuratMasukEdit?.sifat || "",
      posisi: pickOfSuratMasukEdit?.posisi || "",
      ditujukan: pickOfSuratMasukEdit?.ditujukan || "",
      keterangan: pickOfSuratMasukEdit?.keterangan || "",
      tahun: pickOfSuratMasukEdit?.tahun || "",
      fileSurat: pickOfSuratMasukEdit?.fileSurat || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);
      formik.values.posisi = posisi;
      formik.values.ditujukan = ditujukan;
      const formData = new FormData();
      formData.append("nomor_agenda", values.nomor_agenda);
      formData.append("nomor_surat", values.nomor_surat);
      formData.append("tgl_diterima", values.tgl_diterima);
      formData.append("tgl_surat", values.tgl_surat);
      formData.append("pengirim", values.pengirim);
      formData.append("perihal", values.perihal);
      formData.append("ditujukan", values.ditujukan);
      formData.append("posisi", values.posisi);
      formData.append("sifat", values.sifat);
      formData.append("keterangan", values.keterangan);
      formData.append("tahun", values.tahun);
      formData.append("fileSurat", values.fileSurat);

      editDataSuratMasuk(
        pickOfSuratMasukEdit,
        formData,
        values,
        handleEditSuratMasuk,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <div>
      <dialog id="my_modal_editSuratMasuk" className="modal backdrop-blur-sm ">
        <form
          method="dialog"
          data-testid="form"
          className=" bg-white overflow-y-scroll  px-6 py-3 relative min-w-[600px] max-h-screen max-w-3xl rounded-md z-10"
          name="form"
          onSubmit={formik.handleSubmit}
        >
          <form
            method="dialog"
            className="modal-box shadow-none right-0  absolute w-full bg-transparent mx-auto"
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl my-3 mx-auto font-bold">
            Edit Data Surat Masuk
          </h1>
          {/* ==================== NOMOR AGENDA ==================== */}
          <div className="grid mb-3 gap-2">
            {/* ==================== NOMOR AGENDA ==================== */}
            <div>
              <label className="text-l" htmlFor="nomor_agenda">
                Nomor Agenda
              </label>
              {formik.errors.nomor_agenda && formik.touched.nomor_agenda && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.nomor_agenda}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="nomor_agenda"
                name="nomor_agenda"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nomor_agenda}
              />
            </div>
          </div>

          {/* ==================== TGL DITERIMA & SURAT ==================== */}
          <div className="grid grid-cols-2 mb-3 gap-2">
            {/* ==================== TGL DITERIMA ==================== */}
            <div>
              <label className="text-l" htmlFor="tgl_diterima">
                Tanggal Diterima
              </label>
              {formik.errors.tgl_diterima && formik.touched.tgl_diterima && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.tgl_diterima}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="tgl_diterima"
                name="tgl_diterima"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.tgl_diterima}
              />
            </div>
            {/* ==================== TGL SURAT ==================== */}
            <div>
              <label className="text-l" htmlFor="tgl_surat">
                Tanggal Surat
              </label>
              {formik.errors.tgl_surat && formik.touched.tgl_surat && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.tgl_surat}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="tgl_surat"
                name="tgl_surat"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.tgl_surat}
              />
            </div>
          </div>

          {/* ==================== NOMOR SURAT & PENGIRIM ==================== */}
          <div className="grid grid-cols-2 mb-3 gap-2">
            {/* ==================== NOMOR SURAT ==================== */}
            <div>
              <label className="text-l" htmlFor="nomor_surat">
                Nomor Surat
              </label>
              {formik.errors.nomor_surat && formik.touched.nomor_surat && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.nomor_surat}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="nomor_surat"
                name="nomor_surat"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nomor_surat}
              />
            </div>
            {/* ==================== PENGIRIM ==================== */}
            <div>
              <label className="text-l" htmlFor="pengirim">
                Pengirim
              </label>
              {formik.errors.pengirim && formik.touched.pengirim && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.pengirim}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="pengirim"
                name="pengirim"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.pengirim}
              />
            </div>
          </div>

          {/* ==================== PERIHAL & SIFAT ==================== */}
          <div className="grid grid-cols-2 mb-3 gap-2">
            {/* ==================== SIFAT ==================== */}
            <div>
              <label className="text-l" htmlFor="sifat">
                Sifat
              </label>
              {formik.errors.sifat && formik.touched.sifat && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.sifat}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="sifat"
                name="sifat"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.sifat}
              />
            </div>
            {/* ==================== TAHUN ==================== */}
            <div>
              <label className="text-l" htmlFor="tahun">
                Tahun
              </label>
              {formik.errors.tahun && formik.touched.tahun && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.tahun}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="tahun"
                name="tahun"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.tahun}
              />
            </div>
          </div>

          {/* ==================== KETERANGAN & TAHUN ==================== */}
          <div className="grid grid-cols-2 mb-3 gap-2">
            {/* ==================== KETERANGAN ==================== */}
            <div>
              <label className="text-l" htmlFor="keterangan">
                Keterangan
              </label>
              {formik.errors.keterangan && formik.touched.keterangan && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.keterangan}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="keterangan"
                name="keterangan"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.keterangan}
              />
            </div>
            {/* ==================== FILE SURAT ==================== */}
            <div>
              <label className="text-l" htmlFor="fileSurat">
                file Surat
              </label>
              {formik.errors.fileSurat && formik.touched.fileSurat && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.fileSurat}
                </p>
              )}
              <input
                type="file"
                id="fileSurat"
                accept=".docx,.pdf"
                name="fileSurat"
                onChange={(e) =>
                  formik.setFieldValue("fileSurat", e.target.files[0])
                }
                className="file-input file-input-bordered file-input-info w-full max-w-xs"
              />
            </div>
          </div>

          {/* ==================== PERIHAL ==================== */}
          <div className="mb-4 flex flex-col">
            <label className="text-l" htmlFor="perihal">
              Perihal
            </label>
            {formik.errors.perihal && formik.touched.perihal && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.perihal}
              </p>
            )}
            <textarea
              className="input input-bordered input-info w-full "
              id="perihal"
              name="perihal"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.perihal}
            />
          </div>
          {/* ==================== DITUJUKAN SURAT KE & POSISI SURAT ==================== */}
          <div className="grid grid-cols-2 mb-3 gap-2">
            {/* ------------------- DITUJUKAN SURAT KE ------------------- */}
            <div>
              <label className="text-l" htmlFor="fileSurat">
                Ditujukan Ke
              </label>
              <div>
                <input
                  className="checkbox checkbox-info checkbox-xs"
                  onChange={handlerCheckDitujukan}
                  checked={ditujukan?.includes("TU")}
                  type="checkbox"
                  id="TU"
                  name="TU"
                />
                <label htmlFor="TU" className="ml-1">
                  TU
                </label>
                <input
                  className="ml-4 checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckDitujukan}
                  checked={ditujukan?.includes("Penyusunan Program")}
                  id="penyusunan program"
                  name="Penyusunan Program"
                />
                <label htmlFor="Penyusunan Program" className="ml-1">
                  Penyusunan Program
                </label>
                <br />
                <input
                  className="checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckDitujukan}
                  checked={ditujukan?.includes("Keuangan")}
                  name="Keuangan"
                />
                <label htmlFor="Keuangan" className="ml-1">
                  Keuangan
                </label>
                <input
                  className="ml-4 checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckDitujukan}
                  checked={ditujukan?.includes("Pembangunan Ekonomi")}
                  name="Pembangunan Ekonomi"
                />
                <label htmlFor="Pembangunan Ekonomi" className="ml-1">
                  Pembangunan Ekonomi
                </label>
                <br />
                <input
                  className="checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckDitujukan}
                  checked={ditujukan?.includes("Kemasyarakatan")}
                  name="Kemasyarakatan"
                />
                <label htmlFor="Kemasyarakatan" className="ml-1">
                  Kemasyarakatan
                </label>
                <input
                  className="ml-4 checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckDitujukan}
                  checked={ditujukan?.includes("Sarana Prasarana")}
                  name="Sarana Prasarana"
                />
                <label htmlFor="Sarana Prasarana" className="ml-1">
                  Sarana Prasarana
                </label>
                <br />
                <input
                  className="checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckDitujukan}
                  checked={ditujukan?.includes("Pemerintahan")}
                  name="Pemerintahan"
                />
                <label htmlFor="Pemerintahan" className="ml-1">
                  Pemerintahan
                </label>
                <input
                  className="ml-4 checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckDitujukan}
                  checked={ditujukan?.includes("Semua Bidang")}
                  name="Semua Bidang"
                />
                <label htmlFor="Semua Bidang" className="ml-1">
                  Semua Bidang
                </label>
              </div>
            </div>
            {/* ------------------- POSISI SURAT ------------------- */}
            <div>
              <label className="text-l" htmlFor="keterangan">
                Posisi Surat
              </label>
              <div>
                <input
                  className="checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckPosisi}
                  checked={posisi?.includes("AE")}
                  id="AE"
                  name="AE"
                />
                <label htmlFor="AE" className="ml-1">
                  AE
                </label>
                <input
                  className="ml-4 checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckPosisi}
                  checked={posisi?.includes("TU")}
                  id="TU"
                  name="TU"
                />
                <label htmlFor="TU" className="ml-1">
                  TU
                </label>
                <input
                  className="ml-4 checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckPosisi}
                  checked={posisi?.includes("SEKBAN")}
                  id="SEKBAN"
                  name="SEKBAN"
                />
                <label htmlFor="SEKBAN" className="ml-1">
                  SEKBAN
                </label>
                <input
                  className="ml-4 checkbox checkbox-info checkbox-xs"
                  type="checkbox"
                  onChange={handlerCheckPosisi}
                  checked={posisi?.includes("KABAN")}
                  id="KABAN"
                  name="KABAN"
                />
                <label htmlFor="KABAN" className="ml-1">
                  KABAN
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-300 hover:bg-green-200 hover:text-green-100 rounded-md p-2"
          >
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default EditSuratMasuk;
