import { useEffect, useState } from "react";
import "./Topup.css";
import FontBold from "../../../../elements/FontBold/FontBold";
import Search from "../../../../elements/Search/Search";

import { API_TRANSACTION_URL } from "../../../../config/Api";
import axios from "axios";

import { AiOutlinePlus } from "react-icons/ai";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./Topup.module.css"
import ModalDelete from "../../../../elements/Modal/ModalDelete";


const Transaction = () => {
  const [transaction, setTransactions] = useState([]);

  useEffect(() => {
    // fetch dari api
    const getData = async () => {
      try {
        const responseTransaction = await axios.get(API_TRANSACTION_URL);
        const transactionsData = responseTransaction.data;
        setTransactions(transactionsData);
        console.log("transaksi:", transactionsData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    getData();
  }, []);

  // const navigate = useNavigate();

  // search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fungsi untuk melakukan pencarian pada tabel
  const searchTable = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Lakukan pencarian pada tabel mock API (data)
    const results = value.filter((transaction) =>
      transaction.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleDelete = () => {
    ModalDelete();
  };

  return (
    <div className="topup py-4 px-4">
      <div className="row">
        <div className="nama-pln">
          <FontBold $32>Top Up</FontBold>
        </div>

        <div className="col-9 pb-1">
          <Search placeholder="Cari BNI, Mandiri..." />
        </div>
        <div class="col-3 d-md-flex justify-content-md-end pt-3">
          <Link to="/admin/layanan/topup/tambah">
            <Button
              style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
            >
              <AiOutlinePlus /> Tambah Bank
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm justify-content-around rounded mt-2">
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
                Kode BANK
              </th>
              <th scope="col" className="col-4">
                Jenis BANK
              </th>
              <th scope="col" className="col-4"></th>
            </tr>
          </thead>
          {transaction.map((topup) => (
            <tbody key={topup.id}>
              <tr className={styles.rowTable}>
                <td>{topup.id}</td>
                <td>{topup.nama}</td>
                <td>
                  <Link to="/admin/layanan/topup/edit">
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

export default Transaction;
