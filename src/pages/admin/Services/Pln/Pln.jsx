import React from "react";
import "./Pln.css";

import FontBold from "../../../../elements/FontBold/FontBold";
import ModalDelete from "../../../../elements/Modal/ModalDelete";
import Search from "../../../../elements/Search/Search";

import { VscEdit, VscTrash } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./Pln.module.css"

import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE } from "../../../../config/Api";

const Pln = () => {

  const [datapln, setDataPln] = useState([]);
  const authToken = sessionStorage.getItem('Auth Token');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    axios.get('https://642e1dab2b883abc640747d3.mockapi.io/transaction')
      .then(res => setDataPln(res.data))
      .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    const confirm = window.confirm("Yakin mau di hapus?");
    if (confirm) {
      axios.delete('https://642e1dab2b883abc640747d3.mockapi.io/transaction/' + id)
        .then(res => {
          location.reload();
        }).catch(err => console.log(err));
    }
  }

  // useEffect(() => {
  //   const getPln = async () => {
  //     try {
  //       const responsePln = await axios.get(`${API_BASE}/electricitys?page=${page}&limit=${limit}`, {
  //         headers: {
  //           'Authorization': `Bearer ${authToken}`
  //         }
  //       });

  //       const plnData = responsePln.data.data
  //       setDataPln(plnData)
  //       console.log('Pln data :', plnData);

  //     } catch (error) {
  //       console.log('Error : ', error);
  //     }
  //   }
  //   getPln()
  // }, [])

  // const handleDelete = (id) => {
  //   const confirm = window.confirm("Yakin mau di hapus?");
  //   if (confirm) {
  //     axios.delete(`${API_BASE}/admin/Electricity/` + id, {
  //       headers: {
  //         'Authorization': `Bearer ${authToken}`
  //       }
  //     })
  //       // axios.delete(`${API_BASE}/admin/layanan/pdam/` + id)
  //       .then(res => {
  //         location.reload();
  //       }).catch(err => console.log(err));
  //   }
  // }

  return (
    <div className="bpjs py-4 px-4">
      <div className="row">
        <div className="nama-pln">
          <FontBold $32>PLN</FontBold>
        </div>

        <div className="col-9 pb-1">
          <Search placeholder="Cari PLN..." />
        </div>
        <div class="col-3 d-md-flex justify-content-md-end pt-3">
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

          {datapln.map((pln, i) => (
            <tbody key={i}>
              <tr className={styles.rowTable}>
                <td>{pln.id}</td>
                <td>{pln.layanan}</td>
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
    </div >
  );
};

export default Pln;
