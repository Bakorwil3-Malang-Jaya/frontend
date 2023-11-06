import axios from "axios"
const URL = "http://localhost:4000";

export const getSuratKeluar = async () => {
    const res = await axios.get(`${URL}/suratkeluar`);
    return res.data;
  };

  export const getSuratKeluarCount = async () => {
    const res = await axios.get(`${URL}/suratkeluarcount`);
    return res.data;
  };

  export const deleteSuratKeluar = async (id, setDataSuratKeluar, notifyDelete) => {
    try {
      await axios.delete(`${URL}/suratkeluar/${id}`);
      setDataSuratKeluar((prevData) =>
        prevData.filter((surat) => surat.id !== id)
      );
      notifyDelete("Data Surat Berhasil Dihapus!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  export const addDataSuratKeluar = async (
    formData,
    values,
    handleAddSuratKeluar,
    notifyAddData,
    handleCloseModal,
    formik
  ) => {
    try {
      await axios.post(`${URL}/suratkeluar`, formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });
      handleAddSuratKeluar({
       nomor_urut: values.nomor_urut,
       klas: values.klas,
       tanggal: values.tanggal,
      });
      notifyAddData("Data Surat berhasil ditambahkan!");
      handleCloseModal();
      formik.resetForm();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  export const editDataSuratKeluar = async (
    pickOfSuratEdit,
    formData,
    values,
    handleEdit,
    notifyEdit,
    handleCloseModal,
    formik
  ) => {
    try {
      await axios.patch(`${URL}/suratkeluar/${pickOfSuratEdit.id}`, formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });
      handleEdit({
        id: pickOfSuratEdit.id,
        nomor_urut: values.nomor_urut,
        klas: values.klas,
        tanggal: values.tanggal,
      });
      notifyEdit("Data Surat Berhasil Di edit!");
      handleCloseModal();
      formik.resetForm();
      window.location.reload();
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };
  