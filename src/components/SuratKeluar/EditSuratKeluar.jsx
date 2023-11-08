import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { editDataSuratKeluar } from "./apiSuratKeluar";

// ============== VALIDATION KOLOM ==============
const Schema = Yup.object({
  nomor_urut: Yup.string().required(),
  klas: Yup.string().required(),
  tanggal: Yup.string().required(),
});

const EditSuratKeluar = ({ handleEditSuratKeluar, pickOfSuratKeluarEdit }) => {
  const c = console.log;
  const handleCloseModal = () => {
    window.my_modal_editSuratKeluar.close();
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nomor_urut: pickOfSuratKeluarEdit?.nomor_urut || "",
      klas: pickOfSuratKeluarEdit?.klas || "",
      tanggal: pickOfSuratKeluarEdit?.tanggal || "",
    },
    validationSchema: Schema,

    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("nomor_urut", values.nomor_urut);
      formData.append("klas", values.klas);
      formData.append("tanggal", values.tanggal);

      editDataSuratKeluar(
        pickOfSuratKeluarEdit,
        formData,
        values,
        handleEditSuratKeluar,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <div>
      <dialog id="my_modal_editSuratKeluar" className="modal backdrop-blur-sm ">
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
          <h1 className="text-2xl my-3 mx-auto font-bold">Edit Surat Keluar</h1>

          {/* ==================== NOMOR URUT ==================== */}
          <div className="grid mb-3 gap-2">
            <div>
              <label className="text-l" htmlFor="nomor_urut">
                Nomor Urut
              </label>
              {formik.errors.nomor_urut && formik.touched.nomor_urut && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.nomor_urut}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="nomor_urut"
                name="nomor_urut"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nomor_urut}
              />
            </div>
          </div>
          {/* ==================== KLAS ==================== */}
          <div className="grid mb-3 gap-2">
            <div>
              <label className="text-l" htmlFor="klas">
                Klas
              </label>
              {formik.errors.klas && formik.touched.klas && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.klas}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="klas"
                name="klas"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.klas}
              />
            </div>
          </div>
          {/* ==================== TANGGAL ==================== */}
          <div className="grid mb-3 gap-2">
            <div>
              <label className="text-l" htmlFor="tanggal">
                Tanggal
              </label>
              {formik.errors.tanggal && formik.touched.tanggal && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.tanggal}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="tanggal"
                name="tanggal"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.tanggal}
              />
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

export default EditSuratKeluar;
