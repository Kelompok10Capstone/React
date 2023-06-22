import React from "react";
import "./Pln.css";

import FontBold from "../../../../elements/FontBold/FontBold";
import ModalDelete from "../../../../elements/Modal/ModalDelete";
import Search from "../../../../elements/Search/Search";

import { VscEdit, VscTrash } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./Pln.module.css"

import { useState, useEffect } from "react";
import api from "../../../../config/https";

const Pln = () => {

  const [datapln, setDataPln] = useState([]);

  const [pagePln, setPagePln] = useState(1);
  const limitPln = 10;

  // search
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getPln = async () => {
      try {
        const responsePln = await api.get(`electricitys?page=${pagePln}&limit=${limitPln}`);

        const plnData = responsePln.data.data
        setDataPln(plnData)
        setFilter(plnData)
        console.log('Pln data :', plnData);

      } catch (error) {
        console.log('Error : ', error);
      }
    }
    getPln()
  }, [pagePln])

  // delete
  const handleDelete = async (id) => {
    try {
      const confirm = await ModalDelete();
      if (confirm) {
        await api.delete(`admin/electricity/` + id);
        location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }

  // search
  // const handleSearch = (event) => {
  //   const getSearch = event.target.value;
  //   setQuery(getSearch);

  //   if (getSearch.length > 0) {
  //     const getSearch = event.target.value;
  //     const searchData = datapln.filter((item) => item.product_type.toLowerCase().includes(getSearch) ||
  //       item.provider_name.toLowerCase().includes(getSearch));
  //     setDataPln(searchData);
  //   } else {
  //     setDataPln(filter);
  //   }
  //   setQuery(getSearch);
  // }

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPln = datapln?.filter((pdam) =>
    pdam.provider_name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div className="bpjs py-4 px-4">
      <div className="row">
        <div className="nama-pln">
          <FontBold $32>PLN</FontBold>
        </div>

        <div className="col-9 pb-1">
          <Search
            placeholder="Cari PLN..."
            // value={query}
            // onChange={(e) => handleSearch(e)}
            onChange={handleSearch}
          />
        </div>
        <div className="col-3 d-md-flex justify-content-md-end pt-3">
          <Link to="/admin/layanan/pln/tambah">
            <Button
              style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
            >
              <AiOutlinePlus /> Tambah PLN
            </Button>
          </Link>
        </div>
      </div>

      <div className="table-responsive table-wrapper-pln">
        <table className="table text-center table-hover" id={styles.tableBorder} style={{ borderSpacing: "1em" }}>
          <thead className="text-dark" id={styles.thead} style={{ backgroundColor: "#B8BDDA" }}>
            <tr>
              <th scope="col" className="col-4">Kode PLN</th>
              <th scope="col" className="col-4">Jenis PLN</th>
              <th scope="col" className="col-4"></th>
            </tr>
          </thead>

          {filteredPln?.map((pln, i) => (
            <tbody key={i}>
              <tr className={styles.rowTable}>
                <td>{pln.product_type}</td>
                <td>{pln.provider_name}</td>
                <td>
                  <Link to={`/admin/layanan/pln/edit/${pln.id}`} >
                    <IconContext.Provider
                      value={{ color: "#1C1B1F", size: "1.5rem" }}
                    >
                      <VscEdit className={styles.editIcon} />
                    </IconContext.Provider>
                  </Link>

                  <Link to="#" onClick={e => handleDelete(pln.id)}>
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
            disabled={pagePln == 1}
            type="button"
            onClick={() => setPagePln((prev) => prev - 1)}
          >
            <IoIosArrowBack className="icon-prev" />
            Sebelumnya
          </button>
        </div>
        <div className="col-4">
          <p className="text-center my-auto page-title">Halaman {pagePln}</p>
        </div>
        <div className="col-4 text-end">
          <button
            className="btn-pagination"
            type="button"
            disabled={datapln < limitPln - 1}
            onClick={() => setPagePln((prev) => prev + 1)}
          >
            Berikutnya
            <IoIosArrowForward className="icon-next" />
          </button>
        </div>
      </div>

    </div >
  );
};

export default Pln;
