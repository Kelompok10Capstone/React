import React from 'react'
import Moment from "moment-with-locales-es6";

import styles from "./TransactionListTable.module.css"

const TransactionListTable = ({ data }) => {
     // color status
     const getStatusColor = (status) => {
          switch (status) {
               case "successful":
                    return "green";
               case "processing":
                    return "blue";
               case "unpaid":
                    return "red";
               default:
                    return "black";
          }
     };

     // Mengubah format waktu
     Moment.locale("id");
     var date = Moment(data.created_at).format("LL");

     return (
          <>
               <div className="table-responsive mt-2" id={styles.tableFixHead}>
                    <table className="table table-hover table-borderless" id={styles.tableBorder}>
                         <thead className="text-dark" id={styles.thead}>
                              <tr className={styles.rowUser}>
                                   <th style={{ width: 110 }}>Order ID</th>
                                   {/* <th style={{ width: 160 }}>Nama</th> */}
                                   <th style={{ width: 80 }}>Jenis</th>
                                   <th style={{ width: 120 }}>Tanggal</th>
                                   <th style={{ width: 120 }}>Total</th>
                                   <th style={{ width: 80 }}>Status</th>
                                   <th style={{ width: 250 }}>Keterangan</th>
                              </tr>
                         </thead>

                         {data.length == 0 && (
                              <tr>
                                   <td colSpan="6" className="text-center fst-italic fs-5 py-3">
                                        Transaksi tidak ada
                                   </td>
                              </tr>
                         )}

                         {data.map((item) => (
                              <tbody key={item.id}>
                                   <tr className={styles.rowUser}>
                                        <td>{item.id.slice(0, 9)}</td>
                                        <td>{item.product_type}</td>
                                        <td>{date}</td>
                                        <td>
                                             Rp.{" "}
                                             {item.total_price.toLocaleString("id-ID", {
                                                  styles: "currency",
                                                  currency: "IDR",
                                             })}
                                        </td>
                                        <td style={{ color: getStatusColor(item.status) }}>
                                             {item.status}
                                        </td>
                                        <td>{item.product_detail.description}</td>
                                   </tr>
                              </tbody>
                         ))}
                    </table>
               </div>
          </>
     );
}

export default TransactionListTable
