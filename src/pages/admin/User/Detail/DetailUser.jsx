import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import { API_TRANSACTION_URL, API_USERS_URL } from "../../../../config/Api";


import FontBold from "../../../../elements/FontBold/FontBold";
import FontReguler from '../../../../elements/FontReguler/FontReguler';
import Search from '../../../../elements/Search/Search';
import './DetailUser.css'
import styles from "./DetailUser.module.css"



const DetailUser = () => {
     const [transaction, setTransactions] = useState([]);
     const [user, setUser] = useState([]);

     useEffect(() => {
          // fetch dari api
          const getData = async () => {
               try {
                    const responseTransaction = await axios.get(API_TRANSACTION_URL);
                    const transactionsData = responseTransaction.data;
                    setTransactions(transactionsData);
                    console.log("transaksi:", transactionsData);
               } catch (error) {
                    console.log("Error : ", error);
               }
          };

          const getUser = async () => {
               try {
                    const responseUser = await axios.get(API_USERS_URL);
                    const usersData = responseUser.data;
                    setUser(usersData);
                    console.log("pengguna :", usersData);
               } catch (error) {
                    console.log("Error : ", error);
               }
          };



          getData();
          getUser();
     }, []);

     return (
          <div className="detail-user mx-4 mt-4">
               <FontBold $26 className="mb-2">
                    Detail Pengguna
               </FontBold>
               <div className="row detail">
                    {/* <div className="row">
                         <div className="col-12 bg-light shadow-sm p-3">                              
                                   <div className="row">
                                        <div className="col-6">
                                             <FontBold $16>ID Pengguna</FontBold>
                                        </div>
                                        <div className="col">
                                             <FontReguler $16>1</FontReguler>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-6">
                                             <FontBold $16>Nama</FontBold>
                                        </div>
                                        <div className="col">
                                             <FontReguler $16>1</FontReguler>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-6">
                                             <FontBold $16>Email</FontBold>
                                        </div>
                                        <div className="col">
                                             <FontReguler $16>1</FontReguler>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-6">
                                             <FontBold $16>No HP</FontBold>
                                        </div>
                                        <div className="col">
                                             <FontReguler $16>1</FontReguler>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-6">
                                             <FontBold $16>Tanggal Gabung</FontBold>
                                        </div>
                                        <div className="col">
                                             <FontReguler $16>1</FontReguler>
                                        </div>
                                   </div>
                         </div>
                    </div> */}
                    <div className="col-6">
                         <FontBold $16>ID Pengguna</FontBold>
                         <FontBold $16>Nama</FontBold>
                         <FontBold $16>Email</FontBold>
                         <FontBold $16>No HP</FontBold>
                         <FontBold $16>Tanggal Gabung</FontBold>
                    </div>
                    <div className="col-6">
                         <FontReguler $16>1</FontReguler>
                         <FontReguler $16>Ijat</FontReguler>
                         <FontReguler $16>Ijat@gmail.com</FontReguler>
                         <FontReguler $16>+123456789</FontReguler>
                         <FontReguler $16>11 November 2011</FontReguler>
                    </div>
               </div>
               <FontBold $26 className="mt-3 mb-0">
                    Transaksi yang telah dilakukan
               </FontBold>
               <div className="row">
                    <div className="col-12">
                         <form className="">
                              <Search placeholder="Cari berdasarkan jenis transaksi" />
                         </form>
                    </div>
               </div>
               <div className="bg-white shadow-sm justify-content-around rounded mt-2">
                    <div className="table-responsive">
                         <table
                              className="table table-hover mt-0"
                              style={{ borderSpacing: "1em" }}
                              id={styles.tableBorder}
                         >
                              <thead className="text-dark" id={styles.thead}>
                                   <tr className="">
                                        <th scope="col" className='col-1 text-center'>OrderID</th>
                                        <th scope="col" className='col-2'>Nama</th>
                                        <th scope="col" className='col-1'>Jenis</th>
                                        <th scope="col" className='col-2'>Tanggal</th>
                                        <th scope="col" className='col-1'>Total</th>
                                        <th scope="col" className='col-1'>Status</th>
                                        <th scope="col" className='col-4'>Keterangan</th>
                                   </tr>
                              </thead>

                              {transaction.map((transaction) => (
                                   <tbody key={transaction.id} id="table-body">
                                        <tr className="row-transaction" id={styles.rowTable}>
                                             <td className='text-center'>{transaction.id}</td>
                                             <td>{transaction.nama}</td>
                                             <td>{transaction.product}</td>
                                             <td>{transaction.createdAt}</td>
                                             <td>{transaction.total}</td>
                                             <td className="text-danger">{transaction.status}</td>
                                             <td
                                                  className="text-align-justify"
                                                  style={{ wordWrap: "break-word" }}
                                             >
                                                  {transaction.keterangan}
                                             </td>
                                        </tr>
                                   </tbody>
                              ))}
                         </table>
                    </div>
               </div>
          </div>
     );
}

export default DetailUser
