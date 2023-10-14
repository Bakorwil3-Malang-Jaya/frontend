import React from "react";

const Disposisi = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="mt-[161px] ml-14">
        <table style={{ fontSize: "15px", width: "700px" }}>
          <tbody>
            <tr height="50">
              <td width="90"></td>
              <td align="left" width="300px">
                <b>{props.pengirim}</b>
              </td>
              <td width="105"></td>
              <td align="left">
                <b>{props.tgl_diterima}</b>
              </td>
            </tr>
            <tr height="50">
              <td width="90"></td>
              <td align="left">
                <b>{props.tgl_surat}</b>
              </td>
              <td width="105"></td>
              <td align="left">
                <b>{props.nomor_agenda}</b>
              </td>
            </tr>
            <tr height="50">
              <td width="90"></td>
              <td align="left">
                {/* <input type="hidden" name="id_surat" value={item.id} /> */}
                <b>{props.nomor_surat}</b>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <hr align="right" color="#FFFFFF" /> */}
        <div className="mt-6">
          <table width="700px">
            <tbody>
              <tr height="10"></tr>
              <tr height="50">
                <td width="90"></td>
                <td align="left">
                  <b>{props.perihal}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

export default Disposisi;
