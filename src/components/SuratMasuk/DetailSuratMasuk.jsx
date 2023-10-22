import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Disposisi from "./Disposisi";
import { FaNewspaper } from "react-icons/fa6";
import dayjs from "dayjs";

const DetailSuratMasuk = ({ pickOfSuratMasukDetail }) => {
  const urlFile = "http://localhost:4000/SuratMasuk/";

  const tgl_diterima = dayjs(pickOfSuratMasukDetail.tgl_diterima).format(
    "DD-MM-YY"
  );
  const tgl_surat = dayjs(pickOfSuratMasukDetail.tgl_surat).format("DD-MM-YY");

  const componentRef = useRef();
  return (
    <div>
      <dialog id="my_modal_getSuratMasuk" className="modal backdrop-blur-sm ">
        <form
          method="dialog"
          data-testid="form"
          className=" bg-white overflow-y-scroll  px-6 py-3 relative min-w-[600px] max-h-screen max-w-3xl rounded-md z-10"
          name="form"
        >
          <form
            method="dialog"
            className="modal-box shadow-none right-0  absolute w-full bg-transparent mx-auto"
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl my-3 mx-auto font-bold">Detail Surat</h1>
          <div className="grid grid-cols mb-3 gap-2">
            <table className="table">
              <tbody>
                {/* row X */}
                <tr>
                  <td className="w-36">Nomor Agenda</td>
                  <td className="w-10">: </td>
                  <td>{pickOfSuratMasukDetail.nomor_agenda}</td>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>Nomor Surat</td>
                  <td>: </td>
                  <td>{pickOfSuratMasukDetail.nomor_surat}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Tanggal Diterima</td>
                  <td>: </td>
                  <td>{tgl_diterima}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Tanggal Surat</td>
                  <td>: </td>
                  <td>{tgl_surat}</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Pengirim</td>
                  <td>: </td>
                  <td>{pickOfSuratMasukDetail.pengirim}</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>Perihal</td>
                  <td>: </td>
                  <td>{pickOfSuratMasukDetail.perihal}</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <td>Sifat</td>
                  <td>: </td>
                  <td>{pickOfSuratMasukDetail.sifat}</td>
                </tr>
                {/* row 7 */}
                <tr>
                  <td>Keterangan</td>
                  <td>: </td>
                  <td>{pickOfSuratMasukDetail.keterangan}</td>
                </tr>
                {/* row 8 */}
                <tr>
                  <td>Tahun</td>
                  <td>: </td>
                  <td>{pickOfSuratMasukDetail.tahun}</td>
                </tr>
                {/* row 9 */}
                <tr>
                  <td>File Surat</td>
                  <td>: </td>
                  <td>
                    <a
                      className="ml-2"
                      href={`${urlFile}${pickOfSuratMasukDetail.fileSurat}`}
                      target="__blank"
                    >
                      <FaNewspaper />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="grid grid-cols-2 mb-3 gap-2">
              {/* ------------------- DITUJUKAN SURAT KE ------------------- */}
              <div>
                <label className="text-l" htmlFor="fileSurat">
                  Ditujukan Ke
                </label>
                <div>
                  <input
                    className="checkbox checkbox-info checkbox-xs"
                    checked={pickOfSuratMasukDetail.ditujukan?.includes("TU")}
                    type="checkbox"
                    id="TU"
                    name="TU"
                  />
                  <label htmlFor="TU" className="ml-1">
                    TU
                  </label>
                  <input
                    className="ml-4 checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.ditujukan?.includes(
                      "Penyusunan Program"
                    )}
                    id="penyusunan program"
                    name="Penyusunan Program"
                  />
                  <label htmlFor="Penyusunan Program" className="ml-1">
                    Penyusunan Program
                  </label>
                  <br />
                  <input
                    className="checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.ditujukan?.includes(
                      "Keuangan"
                    )}
                    name="Keuangan"
                  />
                  <label htmlFor="Keuangan" className="ml-1">
                    Keuangan
                  </label>
                  <input
                    className="ml-4 checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.ditujukan?.includes(
                      "Pembangunan Ekonomi"
                    )}
                    name="Pembangunan Ekonomi"
                  />
                  <label htmlFor="Pembangunan Ekonomi" className="ml-1">
                    Pembangunan Ekonomi
                  </label>
                  <br />
                  <input
                    className="checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.ditujukan?.includes(
                      "Kemasyarakatan"
                    )}
                    name="Kemasyarakatan"
                  />
                  <label htmlFor="Kemasyarakatan" className="ml-1">
                    Kemasyarakatan
                  </label>
                  <input
                    className="ml-4 checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.ditujukan?.includes(
                      "Sarana Prasarana"
                    )}
                    name="Sarana Prasarana"
                  />
                  <label htmlFor="Sarana Prasarana" className="ml-1">
                    Sarana Prasarana
                  </label>
                  <br />
                  <input
                    className="checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.ditujukan?.includes(
                      "Pemerintahan"
                    )}
                    name="Pemerintahan"
                  />
                  <label htmlFor="Pemerintahan" className="ml-1">
                    Pemerintahan
                  </label>
                  <input
                    className="ml-4 checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.ditujukan?.includes(
                      "Semua Bidang"
                    )}
                    name="Semua Bidang"
                  />
                  <label htmlFor="Semua Bidang" className="ml-1">
                    Semua Bidang
                  </label>
                </div>
              </div>
              {/* ------------------- POSISI SURAT ------------------- */}
              <div>
                <label className="text-l" htmlFor="keterangan">
                  Posisi Surat
                </label>
                <div>
                  <input
                    className="checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.posisi?.includes("AE")}
                    id="AE"
                    name="AE"
                  />
                  <label htmlFor="AE" className="ml-1">
                    AE
                  </label>
                  <input
                    className="ml-4 checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.posisi?.includes("TU")}
                    id="TU"
                    name="TU"
                  />
                  <label htmlFor="TU" className="ml-1">
                    TU
                  </label>
                  <input
                    className="ml-4 checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.posisi?.includes("SEKBAN")}
                    id="SEKBAN"
                    name="SEKBAN"
                  />
                  <label htmlFor="SEKBAN" className="ml-1">
                    SEKBAN
                  </label>
                  <input
                    className="ml-4 checkbox checkbox-info checkbox-xs"
                    type="checkbox"
                    checked={pickOfSuratMasukDetail.posisi?.includes("KABAN")}
                    id="KABAN"
                    name="KABAN"
                  />
                  <label htmlFor="KABAN" className="ml-1">
                    KABAN
                  </label>
                </div>
              </div>
            </div>
            <div className="p-2 bg-[#005DB9] text-center rounded-lg text-white">
              <ReactToPrint
                trigger={() => <button>Print!</button>}
                content={() => componentRef.current}
              />
            </div>
            <div style={{ display: "none" }}>
              <Disposisi
                ref={componentRef}
                nomor_agenda={pickOfSuratMasukDetail.nomor_agenda}
                pengirim={pickOfSuratMasukDetail.pengirim}
                tgl_surat={pickOfSuratMasukDetail.tgl_surat}
                tgl_diterima={pickOfSuratMasukDetail.tgl_diterima}
                perihal={pickOfSuratMasukDetail.perihal}
                nomor_surat={pickOfSuratMasukDetail.nomor_surat}
                tahun={pickOfSuratMasukDetail.tahun}
              />
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default DetailSuratMasuk;
