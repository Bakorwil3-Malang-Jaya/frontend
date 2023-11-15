import React from "react";
import RequestListBidang from "../components/Request/RequestListBidang";
// import RequestListArsip from "../components/Request/RequestListArsip";

const RequestPageBidang = () => {
  return (
    <div className="p-3 grid-cols">
      <RequestListBidang />
      {/* <RequestListArsip /> */}
    </div>
  );
};

export default RequestPageBidang;
