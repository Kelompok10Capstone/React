import React from 'react'
import { Nav, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import styles from "./UserListTable.module.css"
import camelCase from "camelcase";

import "./UserListTable.css";

const UserListTable = ({ data }) => {
     const formatter = new Intl.DateTimeFormat("id", {
          year: "numeric",
          month: "long",
          day: "2-digit",
     });

     return (
          <>
               <div className="table-responsive mt-2" id={styles.tableFixHead}>
                    <table
                         className="table table-hover text-center table-borderless"
                         id={styles.tableBorder}
                    >
                         <thead className="text-dark" id={styles.thead}>
                              <tr>
                                   <th className="col-2">
                                        Kode
                                   </th>
                                   <th className="col-2">
                                        Nama Pengguna
                                   </th>
                                   <th className="col-2">
                                        Email
                                   </th>
                                   <th className="col-2">
                                        No. HP
                                   </th>
                                   <th className="col-2">
                                        Tanggal Gabung
                                   </th>
                                   <th className="col-2"></th>
                              </tr>
                         </thead>

                         {data.map((item) => (
                              <tbody key={item.id}>
                                   <tr className={styles.rowUser}>
                                        <td>{item.id.slice(0, 8)}</td>
                                        <td>
                                             {camelCase(item.name, {
                                                  pascalCase: true,
                                             })}
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{formatter.format(new Date(item.created_at))}</td>
                                        <td>
                                             <Link
                                                  to={`detail-pengguna/${item.id}`}
                                                  className="text-dark"
                                             >
                                                  <IoIosArrowForward
                                                       className={styles.forwardIcon}
                                                  />
                                             </Link>
                                        </td>
                                   </tr>
                              </tbody>
                         ))}
                    </table>
               </div>               
          </>
     );
};

export default UserListTable
