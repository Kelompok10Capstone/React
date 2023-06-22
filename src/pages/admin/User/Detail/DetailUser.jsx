import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API_BASE } from "../../../../config/Api";
import FontBold from "../../../../elements/FontBold/FontBold";
import Search from '../../../../elements/Search/Search';
import TransactionListTable from "../../../../components/Table/TransactionListTable/TransactionListTable"
import DetailListUser from '../../../../components/Table/DetailListUser/DetailListUser';
import './DetailUser.css'



const DetailUser = () => {
     const id = useParams();
     const [transaction, setTransactions] = useState([]);
     const [user, setUser] = useState([]);
     const [query, setQuery] = useState("");

     const authToken = sessionStorage.getItem("Auth Token");

     useEffect(() => {
          // fetch dari api
          const getAllTransactionsById = async () => {
               try {
                    const responseTransaction = await axios.get(
                         `${API_BASE}/admin/transaction/user/${id.id}`,
                         {
                              headers: {
                                   Authorization: `Bearer ${authToken}`,
                              },
                         }
                    );
                    const transactionsData = responseTransaction.data.data;
                    setTransactions(transactionsData);
               } catch (error) {
                    console.log("Error : ", error);
               }
          };

          const getUser = async () => {
               try {
                    const responseUser = await axios.get(`${API_BASE}/admin/user/${id.id}`, {
                         headers: {
                              Authorization: `Bearer ${authToken}`,
                         },
                    });
                    const usersData = responseUser.data.data;
                    setUser(usersData);
               } catch (error) {
                    console.log("Error : ", error);
               }
          };

          getUser();
          getAllTransactionsById();
     }, []);

     const search = (data) => {
          return data.filter((item) => item.product_type.toLowerCase().includes(query));
     };

     return (
          <div className="detail-user mx-4 mt-4">
               <FontBold $26>Detail Pengguna</FontBold>
               <div className="detail">
                    <DetailListUser data={user} />
               </div>
               <FontBold $26 className="mt-2 title-transaksi">
                    Transaksi yang telah dilakukan
               </FontBold>
               <div className="row">
                    <div className="col-12">
                         <form className="search-transaksi">
                              <Search
                                   placeholder="Cari berdasarkan jenis transaksi"
                                   onChange={(e) => setQuery(e.target.value)}
                              />
                         </form>
                         <TransactionListTable data={search(transaction)} />
                    </div>
               </div>
               <div className="row">
                    <div className="col-12"></div>
               </div>
          </div>
     );
}

export default DetailUser
