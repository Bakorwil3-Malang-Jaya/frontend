import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { addDataRequest } from "./apiRequest";

// ============== VALIDATION KOLOM ==============
const Schema = Yup.object({
  bidang: Yup.string().required(),
  tanggal: Yup.string().required(),
  img: Yup.string().required(),
  // nomor_surat: Yup.string().required(),
});

const AddRequest = ({ handleAddRequest }) => {
  const handleCloseModal = () => {
    window.my_modal_addRequest.close();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      bidang: "",
      tanggal: "",
      nomor_surat: "",
      img: "",
    },
    validationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddData = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("bidang", values.bidang);
      formData.append("tanggal", values.tanggal);
      formData.append("img", values.img);
      formData.append("nomor_surat", values.nomor_surat);

      addDataRequest(
        formData,
        values,
        handleAddRequest,
        notifyAddData,
        handleCloseModal,
        formik
      );
    },
  });

  return (
    <>
      <dialog id="my_modal_addRequest" className="modal backdrop-blur-sm ">
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
          <h1 className="text-2xl my-3 mx-auto font-bold">Request</h1>

          {/* ==================== BIDANG ==================== */}
          <div className="grid mb-3 gap-2">
            <div>
              <label className="text-l" htmlFor="bidang">
                Bidang
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
          {/* ==================== img ==================== */}
          <div className="grid mb-3 gap-2">
            <div>
              <div>
                <label className="text-l" htmlFor="img">
                  img
                </label>
                {formik.errors.img && formik.touched.img && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.img}
                  </p>
                )}
              </div>
              <div>
                <input
                  id="img"
                  name="img"
                  accept=".jpg,.jpeg,.png"
                  type="file"
                  onChange={(e) =>
                    formik.setFieldValue("img", e.target.files[0])
                  }
                  className="file-input file-input-bordered file-input-info w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          {/* ==================== NOMOR SURAT ==================== */}
          {/* <div className="grid mb-3 gap-2">
            <div>
              <label className="text-l" htmlFor="nomor_surat">
                nomor_surat
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
                placeholder="Petugas Arsip Yang Menginput"
                onChange={formik.handleChange}
                value={formik.values.nomor_surat}
              />
            </div>
          </div> */}

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

export default AddRequest;
