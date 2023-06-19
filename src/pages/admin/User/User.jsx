import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE } from "../../../config/Api";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import UserListTable from "../../../components/Table/UserListTable/UserListTable";
import FontBold from "../../../elements/FontBold/FontBold";
import Search from "../../../elements/Search/Search";
import "./User.css";

const User = () => {
     const [user, setUser] = useState([]);
     const [page, setPage] = useState(1);
     const [query, setQuery] = useState("");

     const limit = 20;

     const authToken = sessionStorage.getItem("Auth Token");

     useEffect(() => {
          const getUser = async () => {
               try {
                    const responseUser = await axios.get(
                         `${API_BASE}/admin/users?page=${page}&limit=${limit}`,
                         {
                              headers: {
                                   Authorization: `Bearer ${authToken}`,
                              },
                         }
                    );
                    const usersData = responseUser.data.data;
                    setUser(usersData);                    
               } catch (error) {
                    console.log("Error : ", error);
               }
          };
          getUser();
     }, [page]);

     const seacrh = (data) => {
          return data.filter((item) => item.name.toLowerCase().includes(query));
     };

     return (
          <div className="user mx-4 mt-4">
               <FontBold $26 className="mb-2">
                    Pengguna
               </FontBold>
               <div className="row justify-content-end">
                    <div className="col-12">
                         <form className="search-user">
                              <Search
                                   placeholder="Cari berdasarkan nama pengguna"
                                   onChange={(e) => setQuery(e.target.value)}
                              />
                         </form>
                    </div>
               </div>
               <div className="row">
                    <div className="col-12">
                         <UserListTable
                              data={seacrh(
                                   user.sort((a, b) => b.created_at.localeCompare(a.created_at))
                              )}
                         />
                    </div>
               </div>
               <div className="row d-flex align-items-center pagination">
                    <div className="col-4 text-start">
                         <button
                              className="btn-pagination"
                              disabled={page == 1}
                              type="button"
                              onClick={() => setPage((prev) => prev - 1)}
                         >
                              <IoIosArrowBack className="icon-prev" />
                              Sebelumnya
                         </button>
                    </div>
                    <div className="col-4">
                         <p className="text-center my-auto page-title">Halaman {page}</p>
                    </div>
                    <div className="col-4 text-end">
                         <button
                              className="btn-pagination"
                              type="button"
                              onClick={() => setPage((prev) => prev + 1)}
                         >
                              Berikutnya
                              <IoIosArrowForward className="icon-next" />
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default User;