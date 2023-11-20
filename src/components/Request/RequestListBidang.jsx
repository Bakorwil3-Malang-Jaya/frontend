import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import BtnTambah from "./BtnTambah";
import { getRequest, deleteRequest } from "./apiRequest";
import AddRequest from "./AddRequest";
import dayjs from "dayjs";
import EditRequest from "./EditRequest";
import { ConfirmDeleteRequest } from "./confirmDeleteRequest";
import ReactPaginate from "react-paginate";

const RequestListBidang = () => {
  const [dataRequest, setDataRequest] = useState([]);
  const [pickOfRequestEdit, setpickOfRequestEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // =========== PAGINATION ===========
  const [pageNumber, setPageNumber] = useState(0);
  const RequestPerPage = 10;
  const pageVisited = pageNumber * RequestPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // =========== GET DATA FROM DB ===========
  useEffect(() => {
    getRequest().then((data) => {
      setDataRequest(data);
    });
  }, []);

  // =========== ADD REQUEST ===========
  const handleAddRequest = (newRequest) => {
    if (Array.isArray(dataRequest)) {
      setDataRequest([...dataRequest, newRequest]);
    }
  };

  // =========== EDIT REQUEST ===========
  const handleEditRequest = (requestData) => {
    setpickOfRequestEdit(requestData);
    setDataRequest((prevData) =>
      prevData.map((request) =>
        request.id === requestData.id ? requestData : request
      )
    );
  };

  // =========== DELETE REQUEST ===========
  const deleteRequestId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteRequest(id, setDataRequest, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-14">
        {/* ================= BUTTON DROPDOWN ================= */}
        {/* <Dropdown /> */}
        {/* ================= BUTTON REQUEST ================= */}
        <BtnTambah />
      </div>
      {/* ============== TABEL ============== */}
      <div className="flex flex-col  gap-2">
        <div className="overflow-x-auto">
          <table className="table">
            {/* ==================== TABEL HEADER ==================== */}
            <thead>
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Bidang</th>
                <th className="text-center">Tanggal</th>
                <th className="text-center">Gambar</th>
                <th className="text-center">Nomor Surat</th>
                {/* <th className="text-center">Aksi</th> */}
              </tr>
            </thead>
            {/* ==================== TABEL BODY ==================== */}
            <tbody className="text-center">
              {dataRequest
                .slice(pageVisited, pageVisited + RequestPerPage)
                .map((request, idx) => (
                  <tr key={request.id}>
                    <th>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: pageVisited + idx + 1,
                        }}
                      />
                    </th>
                    <td>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: request.bidang,
                        }}
                      />
                    </td>
                    <td>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: dayjs(request.tanggal).format("DD/MM/YYYY"),
                        }}
                      />
                    </td>
                    <td className="grid justify-items-center">
                      <div className="mask mask-squircle w-12 h-12 ">
                        <a target={"__blank"} href={`${request.url}`}>
                          <img src={`${request.url}`} alt="gambar" />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: request.nomor_surat,
                        }}
                      />
                    </td>
                    <td className="flex gap-2 justify-center items-center">
                      {/* =============== BUTTON HAPUS ===============  */}
                      {/* <button
                        onClick={() => {
                          window.my_modal_confirmDeleteRequest.showModal();
                          setPickIdDelete(request.id);
                        }}
                        className="btn-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                      >
                        <FaTrash />
                      </button> */}

                      {/* =============== BUTTON EDIT ===============  */}
                      {/* <button
                        onClick={() => {
                          handleEditRequest({
                            id: request.id,
                            bidang: request.bidang,
                            perihal: request.perihal,
                            tanggal: request.tanggal,
                            nomor_surat: request.nomor_surat,
                          });
                          window.my_modal_editRequest.showModal();
                        }}
                        className="btn-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                      >
                        <FaPencil />
                      </button> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* ==================== PAGINATION ==================== */}
          <div className="w-full flex justify-end shadow-md bg-whiterounded-md h-14 p-4 items-center">
            <ReactPaginate
              className="flex gap-4"
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              pageCount={Math.ceil(dataRequest.length / RequestPerPage)}
              onPageChange={changePage}
              marginPagesDisplayed={2}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              activeClassName={"paginationActivate"}
              nextLinkClassName={"nextBttn"}
              disabledLinkClassName={"paginationDisabled"}
            />
          </div>
        </div>

        <AddRequest handleAddRequest={handleAddRequest} />
        <ConfirmDeleteRequest
          deleteRequestId={deleteRequestId}
          pickIdDelete={pickIdDelete}
        />
        <EditRequest
          handleEditRequest={handleEditRequest}
          pickOfRequestEdit={pickOfRequestEdit}
        />
      </div>
    </>
  );
};

export default RequestListBidang;
