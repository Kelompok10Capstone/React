import React, { useState, useEffect } from "react";
import FontBold from "../../../../elements/FontBold/FontBold";
import Search from "../../../../elements/Search/Search";

import { VscEdit, VscTrash } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import ModalDelete from "../../../../elements/Modal/ModalDelete";
import styles from "./Pdam.module.css"

import axios from "axios";
import { API_BASE } from "../../../../config/Api";
// import { API_BASE } from "../../../../config/Api";


const Pdam = () => {

  const [data, setData] = useState();
  const authToken = sessionStorage.getItem('Auth Token');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // get
  useEffect(() => {
    const getPdam = async () => {
      try {
        const responsePdam = await axios.get(`${API_BASE}/pdams?page=${page}&limit=${limit}`, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });

        const pdamData = responsePdam.data.data
        setData(pdamData)
        console.log('Pdam data :', pdamData);

      } catch (error) {
        console.log('Error : ', error);
      }
    }
    getPdam()
  }, [])

  // delete
  const handleDelete = (id) => {
    const confirm = window.confirm("Yakin mau di hapus?");
    if (confirm) {
      axios.delete(`${API_BASE}/admin/pdam/` + id, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
        .then(res => {
          location.reload();
        }).catch(err => console.log(err));
    }
  }

  return (
    <div className="pdam py-4 px-4">
      <div className="row">
        <div className="nama-dpam">
          <FontBold $32>PDAM</FontBold>
        </div>

        <div className="col-9">
          <Search placeholder="Cari PDAM..." />
        </div>
        <div class="col-3 d-md-flex justify-content-md-end pt-3">
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
        <table className="table text-center table-hover" id={styles.tableBorder} style={{ borderSpacing: "1em" }}>
          <thead className="text-dark" id={styles.thead} style={{ backgroundColor: "#B8BDDA" }}>
            <tr>
              <th scope="col" className="col-3">Kode PDAM</th>
              <th scope="col" className="col-3">Nama PDAM</th>
              <th scope="col" className="col-3">Wilayah</th>
              <th scope="col" className="col-3"></th>
            </tr>
          </thead>
          {data?.map((pdam, i) => (
            <tbody key={i}>
              <tr className={styles.rowTable}>
                <td>{pdam.id}</td>
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

                  <Link to="#" onClick={e => handleDelete(pdam.id)}>
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
    </div>
  );
};

export default Pdam;
