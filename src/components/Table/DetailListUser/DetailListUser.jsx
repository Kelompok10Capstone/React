import React from 'react'
import Moment from "moment-with-locales-es6";

import './DetailListUser.css'

const DetailListUser = ({ data }) => {
     // Mengubah format waktu
     Moment.locale("id");
     var date = Moment(data.created_at).format("LL");

     return (
          <>
               <table className="table table-borderless mb-0 table-detail">
                    <tbody>
                         <tr>
                              <td className="fw-bold col-5">ID Pengguna</td>
                              <td>{data.id}</td>
                         </tr>
                         <tr>
                              <td className="fw-bold">Nama</td>
                              <td>{data.name}</td>
                         </tr>
                         <tr>
                              <td className="fw-bold">Email</td>
                              <td>{data.email}</td>
                         </tr>
                         <tr>
                              <td className="fw-bold">No. HP</td>
                              <td>{data.phone}</td>
                         </tr>
                         <tr>
                              <td className="fw-bold">Alamat</td>
                              <td>{data.address}</td>
                         </tr>
                         <tr>
                              <td className="fw-bold">Tanggal Gabung</td>
                              <td>{date}</td>
                         </tr>
                    </tbody>
               </table>
          </>
     );
}

export default DetailListUser
