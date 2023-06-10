import React from 'react'
import { Nav, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import styles from "./UserListTable.module.css"


import './UserListTable.css'

const UserListTable = ({ data }) => {
     return (
          <>
               <Tab.Container defaultActiveKey="semua">
                    <Nav variant="underline" className="nav-underline">
                         <Nav.Item>
                              <Nav.Link
                                   eventKey="semua"
                                   href="#"
                                   className="nav-link-underline text-dark"
                              >
                                   Semua
                              </Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                              <Nav.Link
                                   eventKey="hari-ini"
                                   href="#"
                                   className="nav-link-underline text-dark"
                              >
                                   Hari Ini
                              </Nav.Link>
                         </Nav.Item>
                    </Nav>

                    <Tab.Content>
                         {/* Tabel Semua Pengguna */}
                         <Tab.Pane eventKey="semua">
                              <div className="bg-white shadow-sm justify-content-around rounded mt-2">
                                   <div className="table-responsive">
                                        <table
                                             className="table table-hover mt-2 text-center table-borderless"
                                             id={styles.tableBorder}
                                        >
                                             <thead className="text-dark" id={styles.thead}>
                                                  <tr>
                                                       <th scope="col" className="col-1">
                                                            Kode
                                                       </th>
                                                       <th scope="col" className="col-2">
                                                            Nama Pengguna
                                                       </th>
                                                       <th scope="col" className="col-3">
                                                            Email
                                                       </th>
                                                       <th scope="col" className="col-2">
                                                            No. HP
                                                       </th>
                                                       <th scope="col" className="col-2">
                                                            Tanggal Gabung
                                                       </th>
                                                       <th scope="col"></th>
                                                  </tr>
                                             </thead>

                                             {data.map((item) => (
                                                  <tbody key={item.id}>
                                                       <tr className={styles.rowUser}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.phone}</td>
                                                            <td>{item.createdAt}</td>
                                                            <td>
                                                                 <Link
                                                                      to={
                                                                           "detail-pengguna"
                                                                      }
                                                                      className="text-dark"
                                                                 >
                                                                      <IoIosArrowForward />
                                                                 </Link>
                                                            </td>
                                                       </tr>
                                                  </tbody>
                                             ))}
                                        </table>
                                   </div>
                              </div>
                         </Tab.Pane>

                         {/* Tabel berdasarkan tanggal hari ini */}
                         <Tab.Pane eventKey="hari-ini">
                              <div className="bg-white shadow-sm justify-content-around rounded mt-2">
                                   <div className="table-responsive">
                                        <table
                                             className="table table-hover mt-2 text-center table-borderless"
                                             id={styles.tableBorder}
                                        >
                                             <thead className="text-dark" id={styles.thead}>
                                                  <tr>
                                                       <th scope="col" className="col-1">
                                                            Kode
                                                       </th>
                                                       <th scope="col" className="col-2">
                                                            Nama Pengguna
                                                       </th>
                                                       <th scope="col" className="col-3">
                                                            Email
                                                       </th>
                                                       <th scope="col" className="col-2">
                                                            No. HP
                                                       </th>
                                                       <th scope="col" className="col-2">
                                                            Tanggal Gabung
                                                       </th>
                                                       <th scope="col"></th>
                                                  </tr>
                                             </thead>

                                             {data.map((item) => (
                                                  <tbody key={item.id}>
                                                       <tr className={styles.rowUser}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.phone}</td>
                                                            <td>{item.createdAt}</td>
                                                            <td>
                                                                 <Link
                                                                      to={
                                                                           "detail-pengguna"
                                                                      }
                                                                      className="text-dark"
                                                                 >
                                                                      <IoIosArrowForward />
                                                                 </Link>
                                                            </td>
                                                       </tr>
                                                  </tbody>
                                             ))}
                                        </table>
                                   </div>
                              </div>
                         </Tab.Pane>
                    </Tab.Content>
               </Tab.Container>
          </>
     );
}

export default UserListTable
