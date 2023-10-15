import React, { useState } from "react";
// import HeaderSuratMasuk from "../components/HeaderSuratMasuk";
import Search from "../components/SuratMasuk/Search";
import SuratMasukList from "../components/SuratMasuk/SuratMasukList";

const SuratMasukPage = () => {
  const [search, setSearch] = useState("");
  
  return (
    <div className="p-3 grid-cols">
      {/* <HeaderSuratMasuk /> */}
      <Search setSearch={setSearch} />
      <SuratMasukList search={search} />
    </div>
  );
};

export default SuratMasukPage;
