import axios from "axios";

const URL = "http://localhost:4000";

export const deleteUsers = async (id, setDataUsers, notifyDelete) => {
  try {
    await axios.delete(`${URL}/users/${id}`);
    setDataUsers((prevData) => prevData.filter((users) => users.id !== id));
    notifyDelete("Data Berita Berhasil Dihapus!");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const addDataUsers = async (
  formData,
  values,
  handleAddUsers,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post(`${URL}/users`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddUsers({
      name: values.name,
      email: values.email,
      role: values.role,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
    notifyAddData("Data Surat berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
