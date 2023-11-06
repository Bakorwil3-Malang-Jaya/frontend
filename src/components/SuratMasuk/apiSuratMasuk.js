import axios from "axios";

const URL = "http://localhost:4000";

export const getSuratMasuk = async () => {
  const res = await axios.get(`${URL}/surat`);
  return res.data;
};

export const getSuratMasukCount = async () => {
  const res = await axios.get(`${URL}/suratcount`);
  return res.data;
};

export const deleteSuratMasuk = async (id, setDataSuratMasuk, notifyDelete) => {
  try {
    await axios.delete(`${URL}/surat/${id}`);
    setDataSuratMasuk((prevData) =>
      prevData.filter((surat) => surat.id !== id)
    );
    notifyDelete("Data Surat Berhasil Dihapus!");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const addDataSuratMasuk = async (
  formData,
  values,
  handleAddSuratMasuk,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post(`${URL}/surat`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddSuratMasuk({
      nomor_agenda: values.nomor_agenda,
      tgl_diterima: values.tgl_diterima,
      tgl_surat: values.tgl_surat,
      nomor_surat: values.nomor_surat,
      pengirim: values.pengirim,
      perihal: values.perihal,
      sifat: values.sifat,
      ditujukan: values.ditujukan,
      posisi: values.posisi,
      keterangan: values.keterangan,
      tahun: values.tahun,
      fileSurat: values.fileSurat,
    });
    notifyAddData("Data Surat berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const editDataSuratMasuk = async (
  pickOfSuratEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(`${URL}/surat/${pickOfSuratEdit.id}`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleEdit({
      id: pickOfSuratEdit.id,
      nomor_agenda: values.nomor_agenda,
      tgl_diterima: values.tgl_diterima,
      tgl_surat: values.tgl_surat,
      nomor_surat: values.nomor_surat,
      pengirim: values.pengirim,
      perihal: values.perihal,
      ditujukan: values.ditujukan,
      posisi: values.posisi,
      sifat: values.sifat,
      keterangan: values.keterangan,
      tahun: values.tahun,
      fileSurat: values.fileSurat,
    });
    notifyEdit("Data Surat Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
