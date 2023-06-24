import { useState, useEffect } from "react";

import styles from "./Education.module.css";
import "./Education.css";

import FontBold from "../../../../elements/FontBold/FontBold";
import ModalDelete from "../../../../elements/Modal/ModalDelete";

import { VscDiffAdded, VscEdit, VscTrash } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

import {
  Button,
  FormControl,
  InputGroup,
  Tabs,
  Tab,
  Nav,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import axios from "axios";
import Sma from "./Sma";
import Smp from "./Smp";
import Search from "../../../../elements/Search/Search";

const Pendidikan = () => {
  // const [pendidikan, setPendidikan] = useState([]);

  // const handleDelete = () => {
  //   ModalDelete();
  // };

  // const perguruantinggiStatus = [];
  // const smaStatus = [];
  // const smpStatus = [];

  // // Mengelompokan data berdasarkan jenis status
  // dataPendidikan.forEach((dataPendidikan) => {
  //   if (dataPendidikan.status === "perguruantinggi") {
  //     perguruantinggiStatus.push(dataPendidikan);
  //   } else if (dataPendidikan.status === "sma") {
  //     smaStatus.push(dataPendidikan);
  //   } else if (dataPendidikan.status === "smp") {
  //     smpStatus.push(dataPendidikan);
  //   }
  // });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://649585f2b08e17c917923896.mockapi.io/pendidikan")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const handleDelete = (id) => {
  //   try {
  //     const confirm = ModalDelete();
  //     if (confirm) {
  //       axios.delete(
  //         "https://649585f2b08e17c917923896.mockapi.io/pendidikan/" + id
  //       );
  //       location.reload();
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // search
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEdu = data?.filter((edu) =>
    edu.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div className="pendidikan py-4 px-4">
      <FontBold $32>Pendidikan</FontBold>
      <div className="row">
        <div className="col-9">
          <Search
            placeholder="Cari berdasarkan Nama "
            onChange={handleSearch}
          />
        </div>
        <div className="col-3">
          <div className="btn-add d-flex justify-content-end pt-3">
            <Link to="">
              <Button
                style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
              >
                + Tambah Pendidikan
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Tab.Container defaultActiveKey="univ">
        <Nav variant="underline" className="nav-underline-edu">
          <Nav.Item>
            <Nav.Link
              eventKey="univ"
              href="#"
              className="nav-link-underline text-dark"
            >
              Perguruan Tinggi
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="sma" className="nav-link-underline text-dark">
              SMA
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="smp" className="nav-link-underline text-dark">
              SMP
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          {/* tabel Univ */}
          <Tab.Pane eventKey="univ" className="home">
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

                {filteredEdu.map((pendidikan, i) => (
                  <tbody key={i} id="table-body">
                    <tr style={{ fontSize: "16px" }}>
                      <td>{pendidikan.id.slice(0, 8)}</td>
                      <td>{pendidikan.name}</td>
                      <td>
                        <Link
                        // to={`/admin/layanan/pendidikan/edit/${pendidikan.id}`}
                        >
                          <IconContext.Provider
                            value={{ color: "#1C1B1F", size: "1.5rem" }}
                          >
                            <VscEdit className={styles.editIcon} />
                          </IconContext.Provider>
                        </Link>

                        <Link
                          to="#"
                          // onClick={(e) => handleDelete(pendidikan.id)}
                        >
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
          </Tab.Pane>

          {/* tabel SMA */}
          <Tab.Pane eventKey="sma" className="sma">
            <Sma />
            {/* <div className="bg-white shadow-sm justify-content-around rounded mt-2">
              <div className="table-responsive">
                <table
                  className="table text-center table-hover mt-2 rounded"
                  style={{ borderSpacing: "1em" }}
                  id="table"
                >
                  <thead
                    className="text-dark"
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

                  {dataPendidikan.map((pendidikan) => (
                    <tbody key={pendidikan.id} id="table-body">
                      <tr style={{ fontSize: "16px" }}>
                        <td>{pendidikan.id}</td>
                        <td>{pendidikan.nama}</td>
                        <td>
                          <Link to="/admin/layanan/pendidikan/edit">
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
            </div> */}
          </Tab.Pane>

          {/* tabel SMP */}
          <Tab.Pane eventKey="smp" className="smp">
            <Smp />
            {/* <div className="bg-white shadow-sm justify-content-around rounded mt-2">
              <div className="table-responsive">
                <table
                  className="table text-center table-hover mt-2 rounded"
                  style={{ borderSpacing: "1em" }}
                  id="table"
                >
                  <thead
                    className="text-dark"
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

                  {dataPendidikan.map((pendidikan) => (
                    <tbody key={pendidikan.id} id="table-body">
                      <tr style={{ fontSize: "16px" }}>
                        <td>{pendidikan.id}</td>
                        <td>{pendidikan.nama}</td>
                        <td>
                          <Link to="/admin/layanan/pendidikan/edit">
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
            </div> */}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Pendidikan;

// const dataPendidikan = [
//   {
//     id: "PT1234",
//     nama: "Universitas Malang",
//   },
//   {
//     id: "PT1236",
//     nama: "Universitas Jember",
//   },
//   {
//     id: "SMA1238",
//     nama: "SMA 5 Malang",
//   },
//   {
//     id: "SMA1237",
//     nama: "SMA 5 Jember",
//   },
//   {
//     id: "SMP1230",
//     nama: "SMP 5 Jakarta",
//   },
//   {
//     id: "SMP1233",
//     nama: "SMA 5 Bandung",
//   },
// ];
