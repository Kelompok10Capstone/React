import React from "react";
import FontBold from "../../../../elements/FontBold/FontBold";
import Search from "../../../../elements/Search/Search";

import { VscEdit, VscTrash } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModalDelete from "../../../../elements/Modal/ModalDelete";
import styles from "./Pdam.module.css"

const Pdam = () => {
  const handleDelete = () => {
    ModalDelete();
  };

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

      <div className="table-responsive shadow-sm">
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
          {datapdam.map((pdam) => (
            <tbody key={pdam.idpdam}>
              <tr className={styles.rowTable}>
                <td>{pdam.idpdam}</td>
                <td>{pdam.namapdam}</td>
                <td>{pdam.wilayahpdam}</td>
                <td>
                  <Link to="/admin/layanan/pdam/edit">
                    <IconContext.Provider
                      value={{ color: "#1C1B1F", size: "1.5rem" }}
                    >
                      <VscEdit className={styles.editIcon} />
                    </IconContext.Provider>
                  </Link>
                  <Link to="#" onClick={handleDelete}>
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

const datapdam = [
  {
    idpdam: "PDAM01",
    namapdam: "PDAM KAB MOJOKERTO",
    wilayahpdam: "Mojokerto",
  },
  {
    idpdam: "PDAM02",
    namapdam: "PDAM KAB MALANG",
    wilayahpdam: "Malang",
  },
  {
    idpdam: "PDAM03",
    namapdam: "PDAM KAB BOGOR",
    wilayahpdam: "Bogor",
  },
  {
    idpdam: "PDAM04",
    namapdam: "PDAM KOTA SUBANG",
    wilayahpdam: "Subang",
  },
  {
    idpdam: "PDAM05",
    namapdam: "PDAM KOTA SEMARANG",
    wilayahpdam: "Semarang",
  },
  {
    idpdam: "PDAM06",
    namapdam: "PDAM KOTA TEGAL",
    wilayahpdam: "Tegal",
  },
  {
    idpdam: "PDAM07",
    namapdam: "PDAM MADURA",
    wilayahpdam: "Madura",
  },
  {
    idpdam: "PDAM08",
    namapdam: "PDAM SURABAYA",
    wilayahpdam: "Surabaya",
  },
  {
    idpdam: "PDAM09",
    namapdam: "PDAM KAB JEMBER",
    wilayahpdam: "Jember",
  },
];
