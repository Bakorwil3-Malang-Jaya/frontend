import React from "react";
import { useState, useEffect } from "react";
import { getSuratMasukCount } from "../components/SuratMasuk/apiSuratMasuk";
import { getSuratKeluarCount } from "../components/SuratKeluar/apiSuratKeluar";
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
  const [total, setTotal] = useState([]);
  const [totalSK, setTotalSK] = useState([]);
  useEffect(() => {
    getSuratMasukCount().then((data) => {
      setTotal(data.total);
    });
    getSuratKeluarCount().then((data) => {
      setTotalSK(data.total);
    });
  }, []);

  return (
    <>
      <div className="p-2 flex justify-self items-center h-screen">
        <img src="logo.png" alt="" className="w-[25%] ml-4" />
        <div className="ml-4">
          <p className="text-3xl font-bold">
            Selamat Datang di Aplikasi{" "}
            <span style={{ color: "#005DB9" }} className="text-4xl">
              <Typewriter
                words={["sumasuka."]}
                loop={2000000}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={200}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className="text-2xl">Aplikasi E-Surat Bakorwil 3 Malang</p>
          <p>Jumlah surat masuk saat ini adalah : {total} Surat</p>
          <p>Jumlah surat masuk saat ini adalah : {totalSK} Surat</p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
