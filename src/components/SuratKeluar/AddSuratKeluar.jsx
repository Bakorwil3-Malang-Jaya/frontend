import { useFormik } from "formik";
import React from "react";
// import * as Yup from "yup";
import { toast } from "react-toastify";
import { addDataSuratKeluar } from "./apiSuratKeluar";

// ============== VALIDATION KOLOM ==============
// const Schema = Yup.object({
//   nomor_urut: Yup.string().required(),
//   klas: Yup.string().required(),
//   tanggal: Yup.string().required(),
// });

const AddSuratKeluar = ({ handleAddSuratKeluar }) => {
  const handleCloseModal = () => {
    window.my_modal_addSuratKeluar.close();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nomorurut_satu: "",
      klas_satu: "",
      tanggal_satu: "",
      nomorurut_dua: "",
      klas_dua: "",
      tanggal_dua: "",
      nomorurut_tiga: "",
      klas_tiga: "",
      tanggal_tiga: "",
    },
    // validationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddData = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("nomorurut_satu", values.nomorurut_satu);
      formData.append("klas_satu", values.klas_satu);
      formData.append("tanggal_satu", values.tanggal_satu);
      formData.append("nomorurut_dua", values.nomorurut_dua);
      formData.append("klas_dua", values.klas_dua);
      formData.append("tanggal_dua", values.tanggal_dua);
      formData.append("nomorurut_tiga", values.nomorurut_tiga);
      formData.append("klas_tiga", values.klas_tiga);
      formData.append("tanggal_tiga", values.tanggal_tiga);

      addDataSuratKeluar(
        formData,
        values,
        handleAddSuratKeluar,
        notifyAddData,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <>
      <dialog id="my_modal_addSuratKeluar" className="modal backdrop-blur-sm ">
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

          {/* ==================== KOLOM-KOLOM ISI Surat ==================== */}
          <h1 className="text-2xl my-3 mx-auto font-bold">Surat Keluar</h1>
          <div className="grid grid-cols-3 gap-4">

            {/* ==================== NOMOR URUT SATU ==================== */}
            <div className="grid mb-3 gap-2">
              <div>
                <label className="text-l" htmlFor="nomorurut_satu">
                  Nomor Urut
                </label>
                {formik.errors.nomorurut_satu &&
                  formik.touched.nomorurut_satu && (
                    <p className="mt-1 text-red-500 max-[640px]:text-sm">
                      {formik.errors.nomorurut_satu}
                    </p>
                  )}
                <input
                  className="input input-bordered input-info w-full "
                  id="nomorurut_satu"
                  name="nomorurut_satu"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.nomorurut_satu}
                />
              </div>
            </div>
            {/* ==================== KLAS SATU ==================== */}
            <div className="grid mb-3 gap-2">
              <div>
                <label className="text-l" htmlFor="klas_satu">
                  Klas
                </label>
                {formik.errors.klas_satu && formik.touched.klas_satu && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.klas_satu}
                  </p>
                )}
                <input
                  className="input input-bordered input-info w-full "
                  id="klas_satu"
                  name="klas_satu"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.klas_satu}
                />
              </div>
            </div>
            {/* ==================== TANGGAL SATU ==================== */}
            <div className="grid mb-3 gap-2">
              <div>
                <label className="text-l" htmlFor="tanggal_satu">
                  Tanggal
                </label>
                {formik.errors.tanggal_satu && formik.touched.tanggal_satu && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.tanggal_satu}
                  </p>
                )}
                <input
                  className="input input-bordered input-info w-full "
                  id="tanggal_satu"
                  name="tanggal_satu"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.tanggal_satu}
                />
              </div>
            </div>

            {/* ==================== NOMOR URUT DUA ==================== */}
            <div className="grid mb-3 gap-2">
              <div>
                <label className="text-l" htmlFor="nomorurut_dua">
                  Nomor Urut
                </label>
                {formik.errors.nomorurut_dua &&
                  formik.touched.nomorurut_dua && (
                    <p className="mt-1 text-red-500 max-[640px]:text-sm">
                      {formik.errors.nomorurut_dua}
                    </p>
                  )}
                <input
                  className="input input-bordered input-info w-full "
                  id="nomorurut_dua"
                  name="nomorurut_dua"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.nomorurut_dua}
                />
              </div>
            </div>
            {/* ==================== KLAS DUA ==================== */}
            <div className="grid mb-3 gap-2">
              <div>
                <label className="text-l" htmlFor="klas_dua">
                  Klas
                </label>
                {formik.errors.klas_dua && formik.touched.klas_dua && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.klas_dua}
                  </p>
                )}
                <input
                  className="input input-bordered input-info w-full "
                  id="klas_dua"
                  name="klas_dua"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.klas_dua}
                />
              </div>
            </div>
            {/* ==================== TANGGAL DUA ==================== */}
            <div className="grid mb-3 gap-2">
              <div>
                <label className="text-l" htmlFor="tanggal_dua">
                  Tanggal
                </label>
                {formik.errors.tanggal_dua && formik.touched.tanggal_dua && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.tanggal_dua}
                  </p>
                )}
                <input
                  className="input input-bordered input-info w-full "
                  id="tanggal_dua"
                  name="tanggal_dua"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.tanggal_dua}
                />
              </div>
            </div>
            
            {/* ==================== NOMOR URUT TIGA ==================== */}
            <div className="grid mb-3 gap-2">
              <div>
                <label className="text-l" htmlFor="nomorurut_tiga">
                  Nomor Urut
                </label>
                {formik.errors.nomorurut_tiga &&
                  formik.touched.nomorurut_tiga && (
                    <p className="mt-1 text-red-500 max-[640px]:text-sm">
                      {formik.errors.nomorurut_tiga}
                    </p>
                  )}
                <input
                  className="input input-bordered input-info w-full "
                  id="nomorurut_tiga"
                  name="nomorurut_tiga"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.nomorurut_tiga}
                />
              </div>
            </div>
            {/* ==================== KLAS TIGA ==================== */}
            <div className="grid mb-3 gap-2">
              <div>
                <label className="text-l" htmlFor="klas_tiga">
                  Klas
                </label>
                {formik.errors.klas_tiga && formik.touched.klas_tiga && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.klas_tiga}
                  </p>
                )}
                <input
                  className="input input-bordered input-info w-full "
                  id="klas_tiga"
                  name="klas_tiga"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.klas_tiga}
                />
              </div>
            </div>
            {/* ==================== TANGGAL TIGA ==================== */}
            <div className="grid mb-3 gap-2">
              <div>
                <label className="text-l" htmlFor="tanggal_tiga">
                  Tanggal
                </label>
                {formik.errors.tanggal_tiga && formik.touched.tanggal_tiga && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.tanggal_tiga}
                  </p>
                )}
                <input
                  className="input input-bordered input-info w-full "
                  id="tanggal_tiga"
                  name="tanggal_tiga"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.tanggal_tiga}
                />
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
    </>
  );
};

export default AddSuratKeluar;
