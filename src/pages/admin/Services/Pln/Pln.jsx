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

const Pln = () => {
  const handleDelete = () => {
    ModalDelete();
  };

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
              <th scope="col" className="col-4">
                Kode PLN
              </th>
              <th scope="col" className="col-4">
                Jenis PLN
              </th>
              <th scope="col" className="col-4"></th>
            </tr>
          </thead>
          {datapln.map((pln) => (
            <tbody key={pln.idpln}>
              <tr className={styles.rowTable}>
                <td>{pln.idpln}</td>
                <td>{pln.jenispln}</td>
                <td>
                  <Link to="/admin/layanan/pln/edit">
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

export default Pln;

const datapln = [
  {
    idpln: "PLN01",
    jenispln: "POSTPAID",
  },
  {
    idpln: "PLN02",
    jenispln: "POSTPAID",
  },
  {
    idpln: "PLN03",
    jenispln: "POSTPAID",
  },
  {
    idpln: "PLN04",
    jenispln: "POSTPAID",
  },
  {
    idpln: "PLN05",
    jenispln: "POSTPAID",
  },
  {
    idpln: "PLN06",
    jenispln: "POSTPAID",
  },
  {
    idpln: "PLN07",
    jenispln: "POSTPAID",
  },
  {
    idpln: "PLN08",
    jenispln: "POSTPAID",
  },
  {
    idpln: "PLN09",
    jenispln: "POSTPAID",
  },
];
