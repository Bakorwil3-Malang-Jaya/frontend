import axios from "axios"
const URL = "http://localhost:4000";

export const getRequest = async () => {
    const res = await axios.get(`${URL}/request`);
    return res.data;
  };

  export const getRequestCount = async () => {
    const res = await axios.get(`${URL}/requestcount`);
    return res.data;
  };

  export const deleteRequest = async (id, setDataRequest, notifyDelete) => {
    try {
      await axios.delete(`${URL}/request/${id}`);
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
      await axios.post(`${URL}/request`, formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });
      handleAddRequest({
       bidang: values.bidang,
       perihal: values.perihal,
       tanggal: values.tanggal,
       nomor_surat: values.nomor_surat,
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
    toast,
    formik
  ) => {
    try {
      await axios.patch(`${URL}/request/${pickOfRequestEdit.id}`, formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });
      handleEdit({
        id: pickOfRequestEdit.id,
        bidang: values.bidang,
       perihal: values.perihal,
       tanggal: values.tanggal,
       nomor_surat: values.nomor_surat,
      });
      notifyEdit("request data Berhasil Di edit!");
      handleCloseModal();
      formik.resetForm();
      window.location.reload();
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };
  