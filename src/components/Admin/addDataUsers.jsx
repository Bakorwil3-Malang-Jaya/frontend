import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { addDataUsers } from "./apiUsers";

// ============== VALIDATION KOLOM ==============
const Schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required(),
  role: Yup.string().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
});

const addUsers = ({ handleAddUsers }) => {
  const handleCloseModal = () => {
    window.my_modal_addUsers.close();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddUsers = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("role", values.role);
      formData.append("password", values.password);
      formData.append("confirmPassword", values.confirmPassword);

      addDataUsers(
        formData,
        values,
        handleAddUsers,
        notifyAddUsers,
        handleCloseModal,
        formik
      );
    },
  });

  return (
    <>
      <dialog id="my_modal_addUsers" className="modal backdrop-blur-sm ">
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

          <h1 className="text-2xl my-3 mx-auto font-bold">Tambah User</h1>
          <div className="grid grid-cols-1 mb-3 gap-2">
            {/* ==================== NAME ==================== */}
            <div>
              <label className="text-l" htmlFor="name">
                Name
              </label>
              {formik.errors.name && formik.touched.name && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.name}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            {/* ==================== EMAIL ==================== */}
            <div>
              <label className="text-l" htmlFor="email">
                Email
              </label>
              {formik.errors.email && formik.touched.email && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.email}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            {/* ==================== role ==================== */}
            <div>
              <label className="text-l" htmlFor="role">
                Role
              </label>
              {formik.errors.role && formik.touched.role && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.role}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="role"
                name="role"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.role}
              />
            </div>
            {/* ==================== PASSWORD ==================== */}
            <div>
              <label className="text-l" htmlFor="password">
                Password
              </label>
              {formik.errors.password && formik.touched.password && (
                <p className="mt-1 text-red-500 max-[640px]:text-sm">
                  {formik.errors.password}
                </p>
              )}
              <input
                className="input input-bordered input-info w-full "
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            {/* ==================== CONFIRM PASSWORD  ==================== */}
            <div>
              <label className="text-l" htmlFor="confirmPassword">
                Confirm Password
              </label>
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.confirmPassword}
                  </p>
                )}
              <input
                className="input input-bordered input-info w-full "
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
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
    </>
  );
};

export default addUsers;
