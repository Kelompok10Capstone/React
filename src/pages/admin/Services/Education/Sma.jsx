import React from "react";
import { useState, useEffect } from "react";

import styles from "./Education.module.css";

import { VscDiffAdded, VscEdit, VscTrash } from "react-icons/vsc";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import axios from "axios";

import Search from "../../../../elements/Search/Search";
import ModalDelete from "../../../../elements/Modal/ModalDelete";

const Sma = () => {
  const [datasma, setDataSma] = useState([]);

  useEffect(() => {
    const getSma = async () => {
      try {
        const responseSma = await axios.get(
          "https://642e1dab2b883abc640747d3.mockapi.io/transaction"
        );

        const smaData = responseSma.data;
        setDataSma(smaData);
        setFilter(smaData);
        console.log("Sma data :", smaData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getSma();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://642e1dab2b883abc640747d3.mockapi.io/transaction/")
  //     .then((res) => {
  //       setDataSmp(res.data);
  //       setFilter(smaData);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // const handleDelete = (id) => {
  //   const confirm = window.confirm("Yakin mau di hapus?");
  //   if (confirm) {
  //     axios
  //       .delete("https://642e1dab2b883abc640747d3.mockapi.io/transaction/" + id)
  //       .then((res) => {
  //         location.reload();
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      const confirm = await ModalDelete();
      if (confirm) {
        await axios.delete(
          "https://642e1dab2b883abc640747d3.mockapi.io/transaction/" + id
        );
        location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  // search
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const getSearch = event.target.value;
      const searchData = datasma.filter(
        (item) =>
          item.nama.toLowerCase().includes(getSearch) ||
          item.layanan.toLowerCase().includes(getSearch)
      );
      setDataSma(searchData);
    } else {
      setDataSma(filter);
    }
    setQuery(getSearch);
  };

  return (
    <div>
      <div className="row">
        <div className="col-9">
          <Search
            placeholder="Cari berdasarkan ID dan Nama "
            value={query}
            onChange={(e) => handleSearch(e)}
            // onChange={handleSearch}
          />
        </div>
        <div className="col-3">
          <div className="btn-add d-flex justify-content-end pt-3">
            <Link to={"/admin/layanan/pendidikan/tambah"}>
              <Button
                style={{
                  backgroundColor: "#2B3990",
                  borderRadius: "16px",
                }}
              >
                + Tambah SMA
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="table-responsive table-wrapper-pendidikan">
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
            <tr className="" style={{ fontSize: "16px" }}>
              <th scope="col" className="col-4">
                ID
              </th>
              <th scope="col" className="col-4">
                Nama
              </th>
              <th scope="col" className="col-4"></th>
            </tr>
          </thead>

          {datasma?.length == 0 && (
            <tr>
              <td colSpan="3" className="text-center fst-italic fs-5 py-3">
                Institusi tidak ada
              </td>
            </tr>
          )}

          {datasma?.map((sma) => (
            <tbody key={sma.id} id="table-body">
              <tr style={{ fontSize: "16px" }}>
                <td>{sma.nama.slice(0, 8)}</td>
                <td>{sma.layanan}</td>
                <td>
                  <Link to={`/admin/layanan/pendidikan/edit/${sma.id}`}>
                    <IconContext.Provider
                      value={{ color: "#1C1B1F", size: "1.5rem" }}
                    >
                      <VscEdit className={styles.editIcon} />
                    </IconContext.Provider>
                  </Link>
                  <Link to="#" onClick={(e) => handleDelete(sma.id)}>
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

export default Sma;
