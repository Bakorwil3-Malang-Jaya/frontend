import React, { useState } from "react";
import BtnTambahSuratKeluar from "../components/SuratKeluar/BtnTambahSuratKeluar";
import Search from "../components/SuratKeluar/Search";
import SuratKeluarList from "../components/SuratKeluar/SuratKeluarList";

const SuratKeluarPage = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="p-3 grid-cols">
      <div className="flex">
        <Search setSearch={setSearch} />
        <BtnTambahSuratKeluar />
      </div>
      <SuratKeluarList />
    </div>
  );
};

export default SuratKeluarPage;
