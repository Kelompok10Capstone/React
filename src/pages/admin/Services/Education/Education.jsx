import { useState, useEffect } from "react";

import styles from "./Education.module.css";
import "./Education.css";

import FontBold from "../../../../elements/FontBold/FontBold";
import Search from "../../../../elements/Search/Search";
import ModalDelete from "../../../../elements/Modal/ModalDelete";

import { VscDiffAdded, VscEdit, VscTrash } from "react-icons/vsc";
import { IconContext } from "react-icons";

import { Button, Tab, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";
import axios from "axios";
import Sma from "./Sma";
import Smp from "./Smp";

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
    const getUniv = async () => {
      try {
        const responseUniv = await axios.get(
          "https://642e1dab2b883abc640747d3.mockapi.io/transaction"
        );

        const univData = responseUniv.data;
        setData(univData);
        setFilter(univData);
        console.log("Sma data :", univData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getUniv();
  }, []);

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
      const searchData = data.filter(
        (item) =>
          item.nama.toLowerCase().includes(getSearch) ||
          item.layanan.toLowerCase().includes(getSearch)
      );
      setData(searchData);
    } else {
      setData(filter);
    }
    setQuery(getSearch);
  };

  return (
    <div className="pendidikan py-4 px-4">
      <FontBold $32>Pendidikan</FontBold>
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
                <div className="btn-add d-flex justify-content-end pt-3 py-3">
                  <Link to={"/admin/layanan/pendidikan/tambah"}>
                    <Button
                      style={{
                        backgroundColor: "#2B3990",
                        borderRadius: "16px",
                      }}
                    >
                      + Tambah Perguruan Tinggi
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="table-responsive table-wrapper-pendidikan">
              <table
                className="table text-center mt-2 table-hover rounded"
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

                {data?.length == 0 && (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center fst-italic fs-5 py-3"
                    >
                      Institusi tidak ada
                    </td>
                  </tr>
                )}

                {data?.map((pendidikan, i) => (
                  <tbody key={i} id="table-body">
                    <tr style={{ fontSize: "16px" }}>
                      <td>{pendidikan.nama.slice(0, 8)}</td>
                      <td>{pendidikan.layanan}</td>
                      <td>
                        <Link
                          to={`/admin/layanan/pendidikan/edit/${pendidikan.id}`}
                        >
                          <IconContext.Provider
                            value={{ color: "#1C1B1F", size: "1.5rem" }}
                          >
                            <VscEdit className={styles.editIcon} />
                          </IconContext.Provider>
                        </Link>

                        <Link
                          to="#"
                          onClick={(e) => handleDelete(pendidikan.id)}
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
          </Tab.Pane>

          {/* tabel SMP */}
          <Tab.Pane eventKey="smp" className="smp">
            <Smp />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Pendidikan;
