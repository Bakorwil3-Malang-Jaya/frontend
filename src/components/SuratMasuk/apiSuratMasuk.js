import axios from "axios";

export const getSuratMasuk = async () => {
  const res = await axios.get("http://localhost:4000/surat");
  return res.data;
};

export const getSuratMasukCount = async () => {
  const res = await axios.get("http://localhost:4000/suratcount");
  return res.data;
};

export const deleteSuratMasuk = async (id, setDataSuratMasuk, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/surat/${id}`);
    setDataSuratMasuk((prevData) =>
      prevData.filter((surat) => surat.id !== id)
    );
    notifyDelete("Data Berita Berhasil Dihapus!");
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
    await axios.post("http://localhost:4000/surat", formData, {
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
    notifyAddData("Data Berita berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const editDataSuratMasuk = async (
  pickOfBeritaEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/surat/${pickOfBeritaEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEdit({
      id: pickOfBeritaEdit.id,
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
    notifyEdit("Data Berita Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
