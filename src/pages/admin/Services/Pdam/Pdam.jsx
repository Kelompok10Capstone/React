import React, { useState, useEffect } from "react";
import FontBold from "../../../../elements/FontBold/FontBold";
import Search from "../../../../elements/Search/Search";

import { VscEdit, VscTrash } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import ModalDelete from "../../../../elements/Modal/ModalDelete";
import styles from "./Pdam.module.css";

import ModalDelete from "../../../../elements/Modal/ModalDelete";
import api from "../../../../config/https";

const Pdam = () => {
  const [data, setData] = useState();

  const [page, setPage] = useState(1);
  const limit = 10;

  // search
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState("");

  // get
  useEffect(() => {
    const getPdam = async () => {
      try {
        const responsePdam = await api.get(`pdams?page=${page}&limit=${limit}`);

        const pdamData = responsePdam.data.data;
        setData(pdamData);
        setFilter(pdamData);
        // console.log("Pdam data :", pdamData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getPdam();
  }, [page]);

  // delete
  const handleDelete = async (id) => {
    try {
      const confirm = await ModalDelete();
      if (confirm) {
        await api.delete(`admin/pdam/` + id);
        location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPdam = data?.filter((pdam) =>
    pdam.address.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div className="pdam py-4 px-4">
      <div className="row">
        <div className="nama-dpam">
          <FontBold $32>PDAM</FontBold>
        </div>

        <div className="col-9">
          <Search
            placeholder="Cari berdasarkan Wilayah"
            // value={query}
            // onChange={(e) => handleSearch(e)}
            onChange={handleSearch}
          />
        </div>
        <div className="col-3 d-md-flex justify-content-md-end pt-3">
          <Link to="/admin/layanan/pdam/tambah">
            <Button
              style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
            >
              <AiOutlinePlus /> Tambah PDAM
            </Button>
          </Link>
        </div>
      </div>

      <div className="table-responsive table-wrapper-pdam">
        <table
          className="table text-center table-hover"
          id={styles.tableBorder}
          style={{ borderSpacing: "1em" }}
        >
          <thead
            className="text-dark"
            id={styles.thead}
            style={{ backgroundColor: "#B8BDDA" }}
          >
            <tr>
              <th scope="col" className="col-3">
                Kode PDAM
              </th>
              <th scope="col" className="col-3">
                Nama PDAM
              </th>
              <th scope="col" className="col-3">
                Wilayah
              </th>
              <th scope="col" className="col-3"></th>
            </tr>
          </thead>

          {filteredPdam?.length == 0 && (
            <tr>
              <td colSpan="4" className="text-center fst-italic fs-5 py-3">
                Layanan tidak ada
              </td>
            </tr>
          )}

          {filteredPdam?.map((pdam, i) => (
            <tbody key={i}>
              <tr className={styles.rowTable}>
                <td>{pdam.provider_name}</td>
                <td>{pdam.provider_name}</td>
                <td>{pdam.address}</td>
                <td>
                  <Link to={`/admin/layanan/pdam/edit/${pdam.id}`}>
                    <IconContext.Provider
                      value={{ color: "#1C1B1F", size: "1.5rem" }}
                    >
                      <VscEdit className={styles.editIcon} />
                    </IconContext.Provider>
                  </Link>

                  <Link to="#" onClick={(e) => handleDelete(pdam.id)}>
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
      <div className="row d-flex align-items-center pagination mt-1">
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
            disabled={data < limit - 1}
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

export default Pdam;
