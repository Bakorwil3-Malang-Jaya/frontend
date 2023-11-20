import axios from "axios";

const URL = "http://localhost:4000";

export const getSuratKeluar = async () => {
  const res = await axios.get(`${URL}/suratkeluar`);
  return res.data;
};

export const getSuratKeluarCount = async () => {
  const res = await axios.get(`${URL}/suratkeluarcount`);
  return res.data;
};

export const deleteSuratKeluar = async (
  id,
  setDataSuratKeluar,
  notifyDelete
) => {
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
      nomorurut_satu: values.nomorurut_satu,
      klas_satu: values.klas_satu,
      tanggal_satu: values.tanggal_satu,
      nomorurut_dua: values.nomorurut_dua,
      klas_dua: values.klas_dua,
      tanggal_dua: values.tanggal_dua,
      nomorurut_tiga: values.nomorurut_tiga,
      klas_tiga: values.klas_tiga,
      tanggal_tiga: values.tanggal_tiga,
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
      nomorurut_satu: values.nomorurut_satu,
      klas_satu: values.klas_satu,
      tanggal_satu: values.tanggal_satu,
      nomorurut_dua: values.nomorurut_dua,
      klas_dua: values.klas_dua,
      tanggal_dua: values.tanggal_dua,
      nomorurut_tiga: values.nomorurut_tiga,
      klas_tiga: values.klas_tiga,
      tanggal_tiga: values.tanggal_tiga,
    });
    notifyEdit("Data Surat Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
