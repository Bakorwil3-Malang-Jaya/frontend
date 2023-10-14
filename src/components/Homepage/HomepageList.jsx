import React from "react";
import { useState, useEffect } from "react";
import { getSuratMasukCount } from "../SuratMasuk/apiSuratMasuk";
import { Typewriter } from "react-simple-typewriter";

const HomepageList = () => {
  const [total, setTotal] = useState([]);
  useEffect(() => {
    getSuratMasukCount().then((data) => {
      setTotal(data.total);
    });
  }, []);

  return (
    <>
      <img src="../../../public/logo.png" alt="" className="w-[25%] ml-4" />
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
      </div>
      <div className="App"></div>
    </>
  );
};

export default HomepageList;
