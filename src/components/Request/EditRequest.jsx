import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { editDataRequest } from "./apiRequest";

// ============== VALIDATION KOLOM ==============
const Schema = Yup.object({
  bidang: Yup.string().required(),
  perihal: Yup.string().required(),
  tanggal: Yup.string().required(),
  nomor_surat: Yup.string().required(),
});

const EditRequest = ({ handleEditRequest, pickOfRequestEdit }) => {
  const c = console.log;
  const handleCloseModal = () => {
    window.my_modal_editRequest.close();
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      bidang: pickOfRequestEdit?.bidang || "",
      perihal: pickOfRequestEdit?.perihal || "",
      tanggal: pickOfRequestEdit?.tanggal || "",
      nomor_surat: pickOfRequestEdit?.nomor_surat || "",
    },
    validationSchema: Schema,

    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("bidang", values.bidang);
      formData.append("perihal", values.perihal);
      formData.append("tanggal", values.tanggal);
      formData.append("nomor_surat", values.nomor_surat);

      editDataRequest(
        pickOfRequestEdit,
        formData,
        values,
        handleEditRequest,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <div>
      <dialog id="my_modal_editRequest" className="modal backdrop-blur-sm ">
        <form
          method="dialog"
          data-testid="form"
          className=" bg-white overflow-y-scroll  px-6 py-3 relative min-w-[600px] max-h-screen max-w-3xl rounded-md z-10"
          name="form"
          onSubmit={formik.handleSubmit}>
          <form
            method="dialog"
            className="modal-box shadow-none right-0  absolute w-full bg-transparent mx-auto">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2">
              ✕
            </button>
          </form>
          {/* ==================== KOLOM-KOLOM ISI Surat ==================== */}
          <h1 className="text-2xl my-3 mx-auto font-bold">Edit Request Data</h1>

          {/* ==================== BIDANG ==================== */}
          <div className="grid mb-3 gap-2">
            <div>
              <label className="text-l" htmlFor="bidang">
                BIDANG
              </label>
              {formik.errors.bidang && formik.touched.bidang && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.bidang}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="bidang"
                name="bidang"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.bidang}
              />
            </div>
          </div>
          {/* ==================== PERIHAL ==================== */}
          <div className="grid mb-3 gap-2">
            <div>
              <label className="text-l" htmlFor="perihal">
                perihal
              </label>
              {formik.errors.perihal && formik.touched.perihal && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.perihal}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="perihal"
                name="perihal"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.perihal}
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
                format="yyyy-MM-dd"
              />
            </div>
          </div>
          {/* ==================== NOMOR SURAT ==================== */}
          <div className="grid mb-3 gap-2">
            <div>
              <label className="text-l" htmlFor="nomor_surat">
                NOMOR SURAT
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

export default EditRequest;
