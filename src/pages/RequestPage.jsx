import React, { useState } from "react";
import RequestList from "../components/Request/RequestList";
import Search from "../components/Request/Search";

const RequestPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-3 grid-cols">
      {/* <Search setSearch={setSearch} /> */}
      <RequestList />
    </div>
  );
};

export default RequestPage;
