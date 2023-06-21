
import FontBold from "../../../../elements/FontBold/FontBold";
import Search from "../../../../elements/Search/Search";
import ModalDelete from "../../../../elements/Modal/ModalDelete";

import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import styles from "./Topup.module.css"
import "./Topup.css";

import { API_BASE } from "../../../../config/Api";
import axios from "axios";


const Topup = () => {

        const authToken = sessionStorage.getItem("Auth Token");
        console.log("auth token:", authToken);
        const [data, setData] = useState();
        const navigate = useNavigate()

        const [page, setPage] = useState(1);
        const limit = 10;
        
        // search
        const [filter, setFilter] = useState([]);
        const [query, setQuery] = useState('');
      
        // GET
        useEffect(() => {
          const getData = async () => {
              try {
                  const response = await axios.get(`${API_BASE}/banks?page=${page}&limit=${limit}`, {
                      headers: {
                          'Authorization': `Bearer ${authToken}`
                      }
                  });
  
                  const dataTopup = response.data.data
                  setData(dataTopup)
                  setFilter(dataTopup)
                  console.log('Data Topup :', dataTopup);
                  
              } catch (error) {
                  console.log('Error : ', error);
              }
          }
          getData();
      },[page]);
  
      // delete
      const handleDelete = async (id) => {
        try {
          const confirm = await ModalDelete();
          if (confirm) {
            await axios.delete(`${API_BASE}/admin/bank/` + id, {
              headers: {
                'Authorization': `Bearer ${authToken}`
              }
            });
              location.reload();
            // navigate("/admin/layanan/topup");
          }
        } catch (err) {
          console.log(err);
        }
      }

    // search
      const [searchQuery, setSearchQuery] = useState("");
      const handleSearch = (e) => {
        setSearchQuery(e.target.value);
      };
    
      const filteredTopup = data?.filter((topup) =>
        topup.name.toLowerCase().includes &&
        topup.bank_code.toLowerCase().includes
        (searchQuery.toLocaleLowerCase())
      );
    
    
    
      
  return (
    <div className="topup py-4 px-4">
        <div className="row">
            <div className="nama-pln">
                <FontBold $32>Top Up</FontBold>
            </div>

            <div className="col-9 pb-1">
                <Search placeholder="Cari BNI, Mandiri..."
                  // value={query}
                  onChange={handleSearch}
                />
            </div>

            <div class="col-3 d-md-flex justify-content-md-end pt-3">
              <Link to="/admin/layanan/topup/tambah">
                  <Button style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}>
                      <AiOutlinePlus /> Tambah Bank
                  </Button>
              </Link>
            </div>
      </div>

      <div className="bg-white table-wriper-topup shadow-sm justify-content-around rounded mt-2">
          <table
            className="table text-center table-hover mt-2 rounded"
            id={styles.tableBorder}
            style={{ borderSpacing: "1em" }}
          >
                <thead
                  className="text-dark"
                  id={styles.thead}
                  style={{ backgroundColor: "#B8BDDA" }}
                >
                    <tr>
                      <th scope="col" className="col-3"> Kode BANK</th>
                      <th scope="col" className="col-3">Jenis BANK</th>
                      <th scope="col" className="col-3">Gambar</th>
                      <th scope="col" className="col-3"></th>
                    </tr>
                </thead>
                    { filteredTopup?.map((topup) => (
                        <tbody key={topup.id}>
                            <tr className={styles.rowTable}>
                                <td>{topup.bank_code}</td>
                                <td>{topup.name}</td>
                                <td><img src={topup.image} alt="Gambar" width={43}/></td>
                                <td>
                                    <Link to={`edit/${topup.id}`}>
                                      <IconContext.Provider
                                        value={{ color: "#1C1B1F", size: "1.5rem" }}
                                      >
                                        <VscEdit className={styles.editIcon} />
                                      </IconContext.Provider>
                                    </Link>
                                    <Link to="#" onClick={e => handleDelete(topup.id)}>
                                      <IconContext.Provider
                                        value={{ color: "#D13217", size: "1.5rem" }}
                                      >
                                        <VscTrash className={styles.trashIcon} />
                                      </IconContext.Provider>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                      ))}
          </table>
      </div>


      <div className="row d-flex align-items-center pagination">
            <div className="col-4 text-start">
                  <button
                    className="btn-pagination "
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
                      disabled={data?.length < limit - 1}
                  >
                      Berikutnya
                      <IoIosArrowForward className="icon-next" />
                  </button>
            </div>

        </div>
    </div>
    
    
  );
};

export default Topup;
