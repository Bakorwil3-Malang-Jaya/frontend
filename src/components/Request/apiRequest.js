import axios from "axios";

const URL = "http://localhost:4000";

export const getRequest = async () => {
  const res = await axios.get(`${URL}/requestt`);
  return res.data;
};

export const getRequestCount = async () => {
  const res = await axios.get(`${URL}/requesttcount`);
  return res.data;
};

export const deleteRequest = async (id, setDataRequest, notifyDelete) => {
  try {
    await axios.delete(`${URL}/requestt/${id}`);
    setDataRequest((prevData) =>
      prevData.filter((request) => request.id !== id)
    );
    notifyDelete("Data request Berhasil Dihapus!");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const addDataRequest = async (
  formData,
  values,
  handleAddRequest,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post(`${URL}/requestt`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddRequest({
      bidang: values.bidang,
      tanggal: values.tanggal,
      nomor_surat: values.nomor_surat,
      img: values.img,
    });
    notifyAddData("request data berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const editDataRequest = async (
  pickOfRequestEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(`${URL}/requestt/${pickOfRequestEdit.id}`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleEdit({
      id: pickOfRequestEdit.id,
      bidang: values.bidang,
      tanggal: values.tanggal,
      nomor_surat: values.nomor_surat,
      img: values.img,
    });
    notifyEdit("request data Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
