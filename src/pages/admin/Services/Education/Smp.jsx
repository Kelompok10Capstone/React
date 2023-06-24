import React from "react";
import { useState, useEffect } from "react";

import styles from "./Education.module.css";

import { VscDiffAdded, VscEdit, VscTrash } from "react-icons/vsc";

import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import axios from "axios";

const Smp = () => {
  const [datasmp, setDataSmp] = useState([]);

  useEffect(() => {
    axios
      .get("https://649585f2b08e17c917923896.mockapi.io/pendidikan/")
      .then((res) => setDataSmp(res.data))
      .catch((err) => console.log(err));
  }, []);

  //   const handleDelete = (id) => {
  //     const confirm = window.confirm("Yakin mau di hapus?");
  //     if (confirm) {
  //       axios
  //         .delete("https://649585f2b08e17c917923896.mockapi.io/pendidikan/" + id)
  //         .then((res) => {
  //           location.reload();
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   };

  return (
    <div className="table-responsive table-wrapper-pendidikan mt-2">
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

        {datasmp.map((pendidikan) => (
          <tbody key={pendidikan.id} id="table-body">
            <tr style={{ fontSize: "16px" }}>
              <td>{pendidikan.id.slice(0, 8)}</td>
              <td>{pendidikan.name}</td>
              <td>
                <Link to="">
                  <IconContext.Provider
                    value={{ color: "#1C1B1F", size: "1.5rem" }}
                  >
                    <VscEdit className={styles.editIcon} />
                  </IconContext.Provider>
                </Link>
                <Link to="#">
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
  );
};

export default Smp;
