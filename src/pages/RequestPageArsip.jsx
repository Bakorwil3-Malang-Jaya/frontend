import React from "react";
import RequestList from "../components/Request/RequestListBidang";
import RequestListArsip from "../components/Request/RequestListArsip";

const RequestPageArsip = () => {

  return (
    <div className="p-3 grid-cols">
      {/* <RequestList /> */}
      <RequestListArsip />
    </div>
  );
};

export default RequestPageArsip;
