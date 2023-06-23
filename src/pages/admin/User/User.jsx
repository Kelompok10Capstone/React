import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import api from "../../../config/https";
import UserListTable from "../../../components/Table/UserListTable/UserListTable";
import FontBold from "../../../elements/FontBold/FontBold";
import Search from "../../../elements/Search/Search";
import "./User.css";

const User = () => {
     const [user, setUser] = useState([]);
     const [page, setPage] = useState(1);
     const [query, setQuery] = useState("");

     const limit = 10;

     useEffect(() => {
          const getUser = async () => {
               try {
                    const responseUser = await api.get(
                         `admin/users/query?page=${page}&limit=${limit}&query=${query}`
                    );
                    const usersData = responseUser.data.data;
                    setUser(usersData);
               } catch (error) {
                    console.log("Error : ", error);
               }
          };
          getUser();
     }, [page, query]);

     // const seacrh = (data) => {
     //      return data.filter((item) => item.name.toLowerCase().includes(query));
     // };

     return (
          <div className="user mx-4 mt-4">
               <FontBold $32 className="mb-2">
                    Pengguna
               </FontBold>
               <div className="row justify-content-end">
                    <div className="col-12">
                         <form className="search-user">
                              <Search
                                   placeholder="Cari berdasarkan nama, email, dan no telepon"
                                   onChange={(e) => setQuery(e.target.value.toLowerCase()) || setPage(1)}
                              />
                         </form>
                    </div>
               </div>
               <div className="row">
                    <div className="col-12">
                         <UserListTable data={user} />
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
                              disabled={user.length == 0}
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